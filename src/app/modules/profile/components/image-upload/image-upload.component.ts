import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdsService } from 'src/app/modules/core/services/ads.service';
import { ProfileService } from 'src/app/modules/core/services/profile.service';
import { StorageService } from 'src/app/modules/core/services/storage.service';
import { User } from '../../../../../API';
import { AuthFacade } from '../../../../store/facades/auth.facade';
import { NotificationService } from '../../../core/services/notifications.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.sass'],
})
export class ImageUploadComponent implements OnInit {
  public fileDraggedOver: boolean = false;
  public uploading: boolean = false;
  public user$: Observable<User | undefined> | undefined;

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly storageService: StorageService,
    private readonly notificationService: NotificationService,
    private readonly profileService: ProfileService
  ) {}

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

  private updateUserPicture(user: User, picture: string): void {
    const { id } = user;

    this.profileService.uploadProfilePicture(id, picture).subscribe({
      next: (updateUser) => {
        this.authFacade.setUser({
          ...user,
          picture: updateUser.picture,
        });

        this.notificationService.success('Picture uploaded successfully.');
      },
      error: () => {
        this.notificationService.error('Something went wrong! Please try again later.');
      },
    });
  }

  private async handlePictureUpload(file: File, user: User): Promise<void> {
    let { picture } = user;

    this.uploading = true;

    if (picture) {
      try {
        await this.deleteExistingPictureFromS3(picture);
      } catch {
        this.notificationService.error('Something went wrong! Please try again later.');
        return;
      }
    }

    try {
      picture = await this.uploadPictureToS3(file);
    } catch {
      this.notificationService.error('Something went wrong! Please try again later.');
      return;
    }

    await this.updateUserPicture(user, picture);

    this.uploading = false;
  }
}
