import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IvyCarouselModule } from 'angular-responsive-carousel';
// Components
import { AdCardBigComponent } from './components/ad-card-big/ad-card-big.component';
import { AdCardSmallComponent } from './components/ad-card-small/ad-card-small.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { RatingComponent } from './components/rating/rating.component';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';
import { CurrencyPipe } from './pipes/currency.pipe';

const COMPONENTS = [
  AdCardBigComponent,
  AdCardSmallComponent,
  ImageUploadComponent,
  LoadingComponent,
  NoResultsComponent,
  RatingComponent,
  SocialFabIconComponent,
  CurrencyPipe,
];

const MODULES = [CommonModule, FontAwesomeModule, MatRippleModule, MatProgressSpinnerModule, IvyCarouselModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
