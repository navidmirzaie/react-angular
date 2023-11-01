import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment } from "../environments/environment";
import {IMovieResponses} from "./IMovieResponses";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpService: HttpClient) {}

  private request(url: string): Observable<IMovieResponses> {
    const params = new HttpParams()
      .set('api_key', `${environment.apiKey}`);

    return this.httpService.get<IMovieResponses>(url, {params})

  }

  getGenres() {
    return this.request(environment.genres);
  }

  getPopular() {
    return this.request(environment.popular);
  }

  getTopRated() {
    return this.request(environment.topRated);
  }

  getUpcoming() {
    return this.request(environment.upcoming);
  }

  getNowPlaying() {
    return this.request(environment.nowPlaying);
  }


}
