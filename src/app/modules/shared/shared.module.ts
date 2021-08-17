import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// Components
import { AdCardBigComponent } from './components/ad-card-big/ad-card-big.component';
import { AdCardSmallComponent } from './components/ad-card-small/ad-card-small.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { RatingComponent } from './components/rating/rating.component';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';

const COMPONENTS = [
  AdCardBigComponent,
  AdCardSmallComponent,
  ImageUploadComponent,
  LoadingComponent,
  NoResultsComponent,
  RatingComponent,
  SocialFabIconComponent,
];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MatRippleModule, MatProgressSpinnerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
