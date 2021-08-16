import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdDetailsComponent } from './components/ad-details/ad-details.component';
import { AdsListComponent } from './components/ads-list/ads-list.component';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AdsListComponent,
  },
  {
    path: 'ads/:id',
    component: AdDetailsComponent,
  },
  {
    path: 'ads/edit/:id',
    component: EditAdComponent,
  },
  {
    path: 'ads/create',
    component: CreateAdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdsRoutingModule {}
