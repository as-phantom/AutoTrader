import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { FindAdComponent } from './components/find-ad/find-ad.component';
import { LatestOffersComponent } from './components/latest-offers/latest-offers.component';
import { PlaceAdComponent } from './components/place-ad/place-ad.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';

// Materials
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SortRegionsPipe } from './pipes/sort-regions.pipe';

const COMPONENTS = [HomeComponent, FindAdComponent, LatestOffersComponent, PlaceAdComponent, SortRegionsPipe];

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
  ],
})
export class MainModule {}
