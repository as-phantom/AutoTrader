import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndEditAdComponent } from './components/create-and-edit-ad/create-and-edit-ad.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

const routes: Routes = [
  {
    path: 'ads/my-ads',
    component: MyAdsComponent,
  },
  {
    path: 'ads/create',
    component: CreateAndEditAdComponent,
  },
  {
    path: 'ads/edit/:id',
    component: CreateAndEditAdComponent,
  },
  {
    path: 'ads/favourites',
    component: FavouritesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
