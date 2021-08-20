import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [SharedModule, CommonModule, AuthRoutingModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
