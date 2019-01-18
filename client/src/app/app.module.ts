import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { TokenInterceptor } from './token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CarSearchComponent } from './car-search/car-search.component';
import { LoginComponent } from './login/login.component';
import { EnginesComponent } from './engines/engines.component';
import { LocationsComponent } from './locations/locations.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { BundlesComponent } from './bundles/bundles.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';


import { EngineDetailComponent } from './engine-detail/engine-detail.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ExcursionDetailComponent } from './excursion-detail/excursion-detail.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { BundleDetailComponent } from './bundle-detail/bundle-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


import { PostService } from './post.service';
import { CarService } from './car.service';
import { MessageService } from './message.service';
import { EngineService } from './engine.service';
import { HomeComponent } from './home/home.component';
import { EngineSelectorComponent } from './engine-selector/engine-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MessagesComponent,
    DashboardComponent,
    CarSearchComponent,
    LoginComponent,
    EnginesComponent,
    LocationsComponent,
    ExhibitionsComponent,
    ExcursionsComponent,
    BundlesComponent,
    PostsComponent,
    CommentsComponent,
    CarDetailComponent,
    EngineDetailComponent,
    ExcursionDetailComponent,
    ExhibitionDetailComponent,
    BundleDetailComponent,
    PostDetailComponent,
    HomeComponent,
    EngineSelectorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
