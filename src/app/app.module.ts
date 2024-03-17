import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    MsAdalAngular6Module.forRoot({
      
      tenantid:"",
      clientid:"",
      redirectUri:'https://localhost:4200/',
      endpoints: {
        'https://graph.microsoft.com': 'https://graph.microsoft.com'
      },
      navigateToLoginRequestUrl: false,
      cacheLocation: 'localStorage'
    })
  ],
  providers: [AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
