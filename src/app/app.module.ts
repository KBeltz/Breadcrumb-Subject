import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, DashboardComponent, BreadcrumbsComponent, PreferencesComponent, ProfileComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
