import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './components/main/main.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [CommonModule, MainRoutingModule],
  declarations: [MainComponent],
})
export class MainModule {}
