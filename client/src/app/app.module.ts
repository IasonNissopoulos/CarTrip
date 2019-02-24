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
import { CarSearchComponent } from './car-search/car-search.component';
import { LoginComponent } from './login/login.component';
import { LocationsComponent } from './locations/locations.component';
import { ExhibitionsComponent } from './exhibitions/exhibitions.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { BundlesComponent } from './bundles/bundles.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';


import { CarDetailComponent } from './car-detail/car-detail.component';
import { ExcursionDetailComponent } from './excursion-detail/excursion-detail.component';
import { ExhibitionDetailComponent } from './exhibition-detail/exhibition-detail.component';
import { BundleDetailComponent } from './bundle-detail/bundle-detail.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { HomeComponent } from './home/home.component';

import { PostService } from './post.service';
import { CarService } from './car.service';
import { MessageService } from './message.service';
import { AuthService } from './auth.service';
import { ExcursionService } from './excursion.service';
import { ExhibitionService } from './exhibition.service';


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MessagesComponent,
    CarSearchComponent,
    LoginComponent,
    LocationsComponent,
    ExhibitionsComponent,
    ExcursionsComponent,
    BundlesComponent,
    PostsComponent,
    CommentsComponent,
    CarDetailComponent,
    ExcursionDetailComponent,
    ExhibitionDetailComponent,
    BundleDetailComponent,
    PostDetailComponent,
    HomeComponent,

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
