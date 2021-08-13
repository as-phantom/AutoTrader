import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FindAdComponent } from './components/find-ad/find-ad.component';
import { LatestOffersComponent } from './components/latest-offers/latest-offers.component';
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

const COMPONENTS = [
  HomeComponent,
  FindAdComponent,
  LatestOffersComponent,
  PlaceAdComponent,
  SortRegionsPipe,
  SortMakesPipe,
  GetModelsPerMakePipe,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
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
  ],
})
export class MainModule {}
