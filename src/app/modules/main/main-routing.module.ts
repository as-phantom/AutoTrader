import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'search',
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
