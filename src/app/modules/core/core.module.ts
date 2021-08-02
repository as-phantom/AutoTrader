import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const COMPONENTS = [HeaderComponent, FooterComponent, NotFoundComponent];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class CoreModule {}
