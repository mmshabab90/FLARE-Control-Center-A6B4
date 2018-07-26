import { AuthService } from './services/security/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/security/auth.guard';

const routeLists: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alarms', component: AlarmsComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavigationComponent,
    FooterComponent,
    AlarmsComponent,
    AlarmListComponent,
    MapComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseChatDemo),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    RouterModule.forRoot(routeLists),
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
