import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DeleteAdComponent } from './components/delete-ad/delete-ad.component';
import { SharedModule } from '../shared/shared.module';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

const COMPONENTS = [CreateAdComponent, DeleteAdComponent, EditAdComponent, FavouritesComponent, MyAdsComponent];

const MODULES = [
  CommonModule,
  AdminRoutingModule,
  SharedModule,
  MatRippleModule,
  MatInputModule,
  MatFormFieldModule,
  MatOptionModule,
  ReactiveFormsModule,
  MatSelectModule,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [...MODULES],
})
export class AdminModule {}
