import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeleteAdComponent } from './components/delete-ad/delete-ad.component';
import { SharedModule } from '../shared/shared.module';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

const COMPONENTS = [CreateAdComponent, DeleteAdComponent, EditAdComponent, FavouritesComponent, MyAdsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
