import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import { StorageService } from 'src/app/modules/core/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public files: FileList | null | undefined;

  constructor(private readonly service: StorageService) {}

  public async onSubmit(e: Event): Promise<void> {
    const inputElement = e.target as HTMLInputElement;

    if (inputElement.files === null) {
      return;
    }

    this.files = inputElement.files;
    this.service.uploadProfilePicture(this.files);
  }

  ngOnInit(): void {
    Auth.resendSignUp('spam');
  }
}
