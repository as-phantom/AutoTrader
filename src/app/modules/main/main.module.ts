import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FindVehicleComponent } from './components/find-vehicle/find-vehicle.component';
import { BrandNewDealsComponent } from './components/brand-new-deals/brand-new-deals.component';
import { LatestOffersComponent } from './components/latest-offers/latest-offers.component';
import { PlaceAdComponent } from './components/place-ad/place-ad.component';


@NgModule({
  declarations: [
    FindVehicleComponent,
    BrandNewDealsComponent,
    LatestOffersComponent,
    PlaceAdComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
