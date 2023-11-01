import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from "../Movie";
import {MovieFilters} from "../MovieFilters";

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  filters: MovieFilters[] = [MovieFilters.Popular, MovieFilters.Toprated, MovieFilters.Upcoming, MovieFilters.NowPlaying];
  filter: string = this.filters[0];

  // the input here is to connect to the movie data collection in app.component.html
  @Input() movies: Movie[];
  @Output() selectedFilter = new EventEmitter<MovieFilters>();
  @Output() showDetailMovie = new EventEmitter<Movie>();


  constructor() {
  }

  ngOnInit(): void {
  }

  onMovieSelected(movie: Movie) {
    this.showDetailMovie.emit(movie);
  }

  selectFilter(filter: MovieFilters):boolean {
    return this.filter === filter;
  }

  onSelectedFilter(filter: MovieFilters):void {
    this.selectedFilter.emit(filter);
    this.filter = filter;
  }


}
