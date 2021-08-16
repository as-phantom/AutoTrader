import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { NoResultsComponent } from './components/no-results/no-results.component';

const COMPONENTS = [SocialFabIconComponent, LoadingComponent, ImageUploadComponent, NoResultsComponent];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MatRippleModule, MatProgressSpinnerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
