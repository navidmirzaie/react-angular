import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment, endpoints } from "../environments/environment";
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
    return this.request(endpoints.genres);
  }

  getPopular() {
    return this.request(endpoints.popular);
  }

  getTopRated() {
    return this.request(endpoints.topRated);
  }

  getUpcoming() {
    return this.request(endpoints.upcoming);
  }

  getNowPlaying() {
    return this.request(endpoints.nowPlaying);
  }


}
