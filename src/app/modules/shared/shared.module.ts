import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
// Pipes
import { SortRegionsPipe } from '../main/pipes/sort-regions.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
// Modules
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { AddToFavorite } from './components/add-to-favorite/add-to-favorite.component';

const COMPONENTS = [
  AdCardBigComponent,
  AdCardSmallComponent,
  ImageUploadComponent,
  LoadingComponent,
  NoResultsComponent,
  RatingComponent,
  SocialFabIconComponent,
  CurrencyPipe,
  SortRegionsPipe,
  AddToFavorite,
];

const MODULES = [
  CommonModule,
  FontAwesomeModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  IvyCarouselModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatOptionModule,
  MatSelectModule,
  RouterModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
