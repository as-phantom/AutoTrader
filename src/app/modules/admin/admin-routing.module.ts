import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { DeleteAdComponent } from './components/delete-ad/delete-ad.component';
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MyAdsComponent } from './components/my-ads/my-ads.component';

const routes: Routes = [
  {
    path: 'ads/my-ads',
    component: MyAdsComponent,
  },
  {
    path: 'ads/create',
    component: CreateAdComponent,
  },
  {
    path: 'ads/edit/:id',
    component: EditAdComponent,
  },
  {
    path: 'ads/delete/:id',
    component: DeleteAdComponent,
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
