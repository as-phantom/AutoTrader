import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    // When signing in, 'auth' is passed trough various urls so to achieve better performance I want
    // the auth component to not be loaded on all of them and that's why path match full is used here
    pathMatch: 'full',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
