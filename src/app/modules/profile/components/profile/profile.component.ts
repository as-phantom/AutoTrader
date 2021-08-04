import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import API from '@aws-amplify/api';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import aws_exports from 'src/aws-exports';
import { User } from '../../../../../API';
import { AuthFacade } from '../../../../store/facades/auth.facade';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  public readonly formGroup: FormGroup = new FormGroup({});
  public user$: Observable<User | undefined> | undefined;

  constructor(private readonly authFacade: AuthFacade, private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.user$ = this.authFacade.user$;
  }

  public async onImageUploaded(file: File, user: User): Promise<void> {
    let { id, picture } = user;

    if (picture && picture.includes(aws_exports.aws_user_files_s3_bucket)) {
      const publicFolder: string = '/public/';
      const key: string = picture.substr(picture.indexOf(publicFolder)).replace(publicFolder, '');

      console.log(await this.storageService.deleteFileFromS3(key));
    }

    picture = (await this.storageService.uploadFileToS3(file)) as string;

    const response = await API.graphql({
      query: gql`
        mutation UpdateUser($input: UpdateUserInput!) {
          updateUser(input: $input) {
            picture
          }
        }
      `,
      variables: {
        input: {
          id,
          picture,
        },
      },
    });

    const {
      data: { updateUser },
    } = response as { data: { updateUser: User } };

    this.authFacade.user$
      .pipe(
        take(1),
        map((user) => ({ ...user, picture: updateUser.picture } as User))
      )
      .subscribe((user) => this.authFacade.setUser(user));
  }
}
