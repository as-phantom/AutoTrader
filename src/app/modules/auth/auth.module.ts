import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, SharedModule, MatButtonModule, MatProgressSpinnerModule],
  declarations: [AuthComponent],
})
export class AuthModule {}
