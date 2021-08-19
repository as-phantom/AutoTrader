import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const COMPONENTS = [HeaderComponent, FooterComponent, NotFoundComponent];

const MODULES = [CommonModule, RouterModule, MatRippleModule, SharedModule, FontAwesomeModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoreModule {}
