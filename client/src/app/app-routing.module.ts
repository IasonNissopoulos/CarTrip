import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnginesComponent } from './engines/engines.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { BundlesComponent } from './bundles/bundles.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path : '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path : 'cars', component: CarsComponent },
  { path : 'dashboard', component: DashboardComponent },
  { path: 'engines', component: EnginesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'excursions', component: ExcursionsComponent },
  { path: 'bundles', component: BundlesComponent },
  { path: 'posts', component: PostsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
