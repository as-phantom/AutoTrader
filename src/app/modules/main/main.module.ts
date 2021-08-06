import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FindAdComponent } from './components/find-ad/find-ad.component';
import { LatestOffersComponent } from './components/latest-offers/latest-offers.component';
import { PlaceAdComponent } from './components/place-ad/place-ad.component';
import { HomeComponent } from './components/home/home.component';

const COMPONENTS = [HomeComponent, FindAdComponent, LatestOffersComponent, PlaceAdComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, MainRoutingModule],
})
export class MainModule {}
