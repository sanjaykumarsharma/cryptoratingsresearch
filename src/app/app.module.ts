import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './admin/home/home.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';

import { routing } from './app.routing';
import { LoginService } from './login.service';
import { AuthGuard } from './_guards/auth.guard';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { AppConfigModule } from './api.config.module';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminSidebarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppConfigModule
  ],
  providers: [LoginService,
    AuthGuard,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
