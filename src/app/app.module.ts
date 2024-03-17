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
      
      tenant: '516e848d-1ae9-4414-b36c-65260ec80967',
      clientId: '8639ec81-b47f-4696-84ee-aeda335c3e28',
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
