import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyAdsComponent } from './components/my-ads/my-ads.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const COMPONENTS = [
  CommonModule,
  ProfileRoutingModule,
  SharedModule,
  ReactiveFormsModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [ProfileComponent, MyAdsComponent, FavouritesComponent],
  imports: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ProfileModule {}
