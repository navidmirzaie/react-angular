import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import {MoviesListComponent} from "./movies-list/movies-list.component";
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { RatingComponent } from './rating/rating.component';
import {HttpClientModule} from "@angular/common/http";
import { MovieDetailComponent } from './movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    NavComponent,
    SearchComponent,
    CarouselComponent,
    RatingComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
