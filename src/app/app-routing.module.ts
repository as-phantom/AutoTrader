import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/core/components/not-found/not-found.component';
import { IsAuthGuard } from './modules/core/guards/isAuth.guard';
import { IsGuestGuard } from './modules/core/guards/isGuest.guard';
import { SetRedirect } from './modules/core/guards/setRedirect.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    canActivate: [IsGuestGuard],
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [IsAuthGuard],
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [IsAuthGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Improves the performance of preloading routes.
      preloadingStrategy: PreloadAllModules,
      // Always scroll to top on route change.
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
