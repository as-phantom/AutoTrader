import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdsDetailsComponent } from './components/ads-details/ads-details.component';


@NgModule({
  declarations: [
    AdsListComponent,
    AdsDetailsComponent
  ],
  imports: [
    CommonModule,
    AdsRoutingModule
  ]
})
export class AdsModule { }
