import { Component, OnInit } from '@angular/core';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/modules/core/services/storage.service';
import { User } from '../../../../../API';
import { AuthFacade } from '../../../../store/facades/auth.facade';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass'],
})
export class ImageUploadComponent implements OnInit {
  public fileDraggedOver: boolean = false;
  public uploading: boolean = false;
  public user$: Observable<User | undefined> | undefined;

  constructor(private readonly authFacade: AuthFacade, private readonly storageService: StorageService) {}

  public ngOnInit(): void {
    this.user$ = this.authFacade.user$;
  }

  public getBackgroundPictureUrl(picture: string | null | undefined): string {
    return `url('${picture}')`;
  }

  public onDragEnter(): void {
    this.fileDraggedOver = true;
  }

  public onDragLeave(): void {
    this.fileDraggedOver = false;
  }

  public onDrop(): void {
    this.fileDraggedOver = false;
  }

  public async onInput(e: Event, user: User): Promise<void> {
    const input = e.target as HTMLInputElement;

    if (!input.files) {
      return;
    }

    const [file] = Array.from(input.files);

    if (!file) {
      return;
    }

    await this.handlePictureUpload(file, user);
  }

  private async deleteExistingPictureFromS3(picture: string): Promise<void> {
    const publicFolder: string = '/public/';
    const key: string = picture.substr(picture.indexOf(publicFolder)).replace(publicFolder, '');

    return await this.storageService.deleteFileFromS3(key);
  }

  private async uploadPictureToS3(file: File): Promise<string> {
    return await this.storageService.uploadFileToS3(file);
  }

  private async updateUserPicture(id: string, picture: string): Promise<User> {
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

    return updateUser;
  }

  private async handlePictureUpload(file: File, user: User): Promise<void> {
    let { id, picture } = user;

    this.uploading = true;

    if (picture) {
      await this.deleteExistingPictureFromS3(picture);
    }

    picture = await this.uploadPictureToS3(file);

    const updateUser: User = await this.updateUserPicture(id, picture);

    this.uploading = false;

    this.authFacade.setUser({
      ...user,
      picture: updateUser.picture,
    });
  }
}
