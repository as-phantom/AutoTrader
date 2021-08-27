import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Components
import { AdCardBigComponent } from './components/ad-card-big/ad-card-big.component';
import { AdCardSmallComponent } from './components/ad-card-small/ad-card-small.component';
import { LoadingComponent } from './components/loading/loading.component';
import { NoResultsComponent } from './components/no-results/no-results.component';
import { RatingComponent } from './components/rating/rating.component';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';
import { AddToFavorite } from './components/add-to-favorite/add-to-favorite.component';
// Pipes
import { SortRegionsPipe } from '../main/pipes/sort-regions.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';
// Modules
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MapDialogComponent } from './components/map-dialog/map-dialog.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';

const COMPONENTS = [
  AdCardBigComponent,
  AdCardSmallComponent,
  LoadingComponent,
  NoResultsComponent,
  RatingComponent,
  SocialFabIconComponent,
  CurrencyPipe,
  SortRegionsPipe,
  AddToFavorite,
  ConfirmDialogComponent,
  MapDialogComponent,
];

const MODULES_WITH_PROVIDERS = [
  AgmCoreModule.forRoot({
    apiKey: environment.googleAPIKey,
    libraries: ['places'],
  }),
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
  MatDialogModule,
  AgmCoreModule,
];

@NgModule({
  imports: [...MODULES, ...MODULES_WITH_PROVIDERS],
  declarations: [...COMPONENTS, BottomSheetComponent],
  exports: [...COMPONENTS, ...MODULES],
})
export class SharedModule {}
