import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { EnginesComponent } from './engines/engines.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { BundlesComponent } from './bundles/bundles.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './login/login.component';
import { CommentsComponent } from './comments/comments.component';
import { HomeComponent } from './home/home.component';

import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ExcursionDetailComponent } from './excursion-detail/excursion-detail.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { BundleDetailComponent } from './bundle-detail/bundle-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


const routes: Routes = [
  { path : 'home', component: HomeComponent },
  { path : '', redirectTo: '/home', pathMatch: 'full' },
  { path : 'cars', component: CarsComponent },
  { path: 'cars/:id', component: CarDetailComponent },
  { path: 'engines', component: EnginesComponent },
  { path: 'engines/:id', component: EngineDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'exhibitions', component: ExhibitionsComponent },
  { path: 'exhibitions/:id', component: ExhibitionDetailComponent },
  { path: 'excursions', component: ExcursionsComponent },
  { path: 'excursions/:id', component: ExcursionDetailComponent },
  { path: 'bundles', component: BundlesComponent },
  { path: 'bundles/:id', component: BundleDetailComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'posts/:id', component: PostDetailComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
