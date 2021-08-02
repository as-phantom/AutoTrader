import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule, MatButtonModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
