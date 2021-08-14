import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from '../ads/components/ad-details/ad-details.component';
import { AdsListComponent } from '../ads/components/ads-list/ads-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },

  {
    path: 'ads',
    component: AdsListComponent,
  },
  {
    path: 'ads/:id',
    component: AdDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
