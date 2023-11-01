import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {environment} from "../../environments/environment";
import { Movie } from "../Movie";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  private posterUrl = environment.posterUrl;
  private coverImage = "";

 @Input() movie: Movie;
 @Output() movieSelected = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit():void {
  }

  onMovieSelected() {
    this.movieSelected.emit(this.movie);
  }

  getPoster(): string {
    return this.coverImage = this.posterUrl + this.movie.poster_path;
  }

}
