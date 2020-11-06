import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PilotRoomComponent } from './components/pilot-room/pilot-room.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HangarComponent } from './components/hangar/hangar.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PilotRoomComponent,
    NavbarComponent,
    HangarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
