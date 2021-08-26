import { NgModule } from '@angular/core';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';

const COMPONENTS = [ProfileComponent, ImageUploadComponent];

const MODULES = [SharedModule, ProfileRoutingModule];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
  exports: [...MODULES],
})
export class ProfileModule {}
