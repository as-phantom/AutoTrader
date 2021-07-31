import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Add Amplify imports */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AmplifyUIAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
