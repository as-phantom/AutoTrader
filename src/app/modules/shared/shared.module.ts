import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';

const COMPONENTS = [SocialFabIconComponent];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MatRippleModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
