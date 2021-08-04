import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [ProfileComponent, ImageUploadComponent],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule],
})
export class ProfileModule {}
