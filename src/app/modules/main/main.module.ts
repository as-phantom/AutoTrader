import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FindAdsComponent } from './components/find-ads/find-ads.component';
import { LatestAdsComponent } from './components/latest-ads/latest-ads.component';
import { PlaceAdComponent } from './components/place-ad/place-ad.component';
import { HomeComponent } from './components/home/home.component';
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
  SortMakesPipe,
  GetModelsPerMakePipe,
];

const MODULES = [SharedModule, CommonModule, MainRoutingModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
})
export class MainModule {}
