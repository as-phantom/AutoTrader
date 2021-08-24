import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { API } from 'aws-amplify';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../../../../API';
import { AuthFacade } from '../../../../store/facades/auth.facade';
import { NotificationsService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  public loading: boolean = false;

  public user$: Observable<User | undefined> | undefined;

  public readonly formGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', []),
    lastName: new FormControl('', []),
  });

  constructor(private readonly authFacade: AuthFacade, private readonly notificationsService: NotificationsService) {}

  public ngOnInit(): void {
    this.user$ = this.authFacade.user$.pipe(
      tap((user) => {
        this.initForm(user);
      })
    );
  }

  public async onSave(user: User): Promise<void> {
    this.loading = true;

    await this.updateUser(user);

    this.loading = false;
  }

  private initForm(user: User | undefined): void {
    this.formGroup.controls.firstName.setValue(user?.firstName);
    this.formGroup.controls.lastName.setValue(user?.lastName);
  }

  private async updateUser(user: User): Promise<void> {
    const { id } = user;

    const firstName: string = this.formGroup.controls.firstName.value.trim();
    const lastName: string = this.formGroup.controls.lastName.value.trim();

    if (firstName === user.firstName && lastName === user.lastName) {
      this.notificationsService.info('These details are already saved');
      return;
    }

    try {
      const response = await API.graphql({
        query: gql`
          mutation UpdateUser($input: UpdateUserInput!) {
            updateUser(input: $input) {
              firstName
              lastName
            }
          }
        `,
        variables: {
          input: {
            id,
            firstName,
            lastName,
          },
        },
      });

      const {
        data: { updateUser },
      } = response as { data: { updateUser: User } };

      this.authFacade.setUser({
        ...user,
        ...updateUser,
      });

      this.notificationsService.success('Profile updated successfully');
    } catch (e) {
      this.notificationsService.error('Something went wrong! Please try again later');
    }
  }
}
