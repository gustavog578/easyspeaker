import { BrowserModule } from '@angular/platform-browser';

import { NgModule, LOCALE_ID  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule, MatNativeDateModule } from "@angular/material";
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { JarwisService } from '../app/services/jarwis.service';
import { TokenService } from './services/token.service';
import { ProfileComponent } from './components/profile/profile.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { TeachersService } from './services/teachers/teachers.service';
import { AuthService } from './services/auth/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SignUpTeacherComponent } from './components/sign-up-teacher/sign-up-teacher.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    ProfileComponent,
    TeachersComponent,
    SearchBarComponent,
    SignUpTeacherComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule ,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [JarwisService, TokenService, TeachersService, LoginComponent, AuthService, AfterLoginService, BeforeLoginService, { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,{ provide: LOCALE_ID, useValue: "es-AR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
