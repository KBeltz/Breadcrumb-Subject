import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'preferences', component: PreferencesComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }