import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FindAdsComponent } from './components/find-ads/find-ads.component';
import { LatestAdsComponent } from './components/latest-ads/latest-ads.component';
import { PlaceAdComponent } from './components/place-ad/place-ad.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';

// Materials
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortRegionsPipe } from './pipes/sort-regions.pipe';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SortMakesPipe } from './pipes/sort-makes.pipe';
import { SharedModule } from '../shared/shared.module';
import { GetModelsPerMakePipe } from './pipes/get-models-per-make.pipe';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';

const COMPONENTS = [
  HomeComponent,
  FindAdsComponent,
  LatestAdsComponent,
  PlaceAdComponent,
  AdDetailsComponent,
  AdsListComponent,
  SortRegionsPipe,
  SortMakesPipe,
  GetModelsPerMakePipe,
];

const MODULES = [
  CommonModule,
  MainRoutingModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  ReactiveFormsModule,
  MatSelectModule,
  FontAwesomeModule,
  IvyCarouselModule,
  MatRippleModule,
  SharedModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class MainModule {}
