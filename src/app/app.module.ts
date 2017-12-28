import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { AppConfigModule } from './api.config.module';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';

// import needed PrimeNG modules here
import {PanelMenuModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/components/button/button';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {MessagesModule} from 'primeng/components/messages/messages';

import { TagsComponent } from './admin/tags/tags.component';

// services
import { UserService } from './_services/user.service';
import { TagService } from './admin/service/tag.service';
import { AdminMainLayoutComponent } from './admin-main-layout/admin-main-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminNavComponent,
    AdminSidebarComponent,
    TagsComponent,
    AdminMainLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppConfigModule,
    PanelMenuModule,
    DataTableModule,
    ButtonModule,
    InputTextModule,
    DialogModule,
    MessagesModule
  ],
  providers: [LoginService,
    AuthGuard,
    AuthenticationService,
    UserService,
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
