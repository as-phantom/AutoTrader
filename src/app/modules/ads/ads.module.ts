import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdsRoutingModule } from './ads-routing.module';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EditAdComponent, CreateAdComponent, AdsListComponent, AdDetailsComponent],
  imports: [CommonModule, AdsRoutingModule, IvyCarouselModule, SharedModule],
})
export class AdsModule {}
