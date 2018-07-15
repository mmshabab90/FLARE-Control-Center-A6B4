import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { AlarmsComponent } from './alarms/alarms.component';
import { AlarmListComponent } from './alarm-list/alarm-list.component';
import { MapComponent } from './map/map.component';
import { ChatComponent } from './chat/chat.component';


const routeLists: Routes = [
  {path: 'alarms', component: AlarmsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    FooterComponent,
    AlarmsComponent,
    AlarmListComponent,
    MapComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routeLists)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
