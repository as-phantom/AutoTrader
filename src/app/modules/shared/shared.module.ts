import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocialFabIconComponent } from './components/social-fab-icon/social-fab-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdsListComponent } from '../ads/components/ads-list/ads-list.component';
import { AdDetailsComponent } from '../ads/components/ad-details/ad-details.component';

const COMPONENTS = [SocialFabIconComponent, LoadingComponent, AdsListComponent, AdDetailsComponent];

@NgModule({
  imports: [CommonModule, FontAwesomeModule, MatRippleModule, MatProgressSpinnerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SharedModule {}
