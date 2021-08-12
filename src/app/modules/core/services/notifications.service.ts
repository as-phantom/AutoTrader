import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class NotificationsService {
  private readonly notificationsConfigurations: { progressBar: boolean; closeButton: boolean; positionClass: string } =
    {
      progressBar: true,
      closeButton: true,
      positionClass: 'toast-top-right',
    };

  constructor(private readonly toastrService: ToastrService) {}

  success(message: string) {
    this.toastrService.success(message, 'Success', this.notificationsConfigurations);
  }

  info(message: string) {
    this.toastrService.info(message, 'Info', this.notificationsConfigurations);
  }

  warning(message: string) {
    this.toastrService.warning(message, 'Warning', this.notificationsConfigurations);
  }

  error(message: string) {
    this.toastrService.error(message, 'Error', this.notificationsConfigurations);
  }
}
