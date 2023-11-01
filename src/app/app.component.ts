import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Movie } from "./Movie";
import {MovieService} from "./movie.service";
import {MovieFilters} from "./MovieFilters";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Movies';
    @ViewChild('dialogElement') dialog: ElementRef<HTMLDialogElement>;

    movies : Movie[];
    movie: Movie | null;

  constructor(private movieService: MovieService) {
  }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe((data) => {
        this.movies = data.results
      });
  }

  closeDialog():void {
    this.dialog.nativeElement.close();
    this.movie = null;
  }

  selectedFilter(filter: MovieFilters):void {
    switch(filter) {
      case MovieFilters.Toprated:
        this.movieService.getTopRated()
          .subscribe((data) => {
            this.movies = data.results;
        })
      break;

      case MovieFilters.Upcoming:
          this.movieService.getUpcoming()
            .subscribe((data) => {
              this.movies = data.results;
            })
      break;

      case MovieFilters.NowPlaying:
        this.movieService.getNowPlaying()
          .subscribe((data) => {
            this.movies = data.results;
          })
      break;

      default:
        this.movieService.getPopular()
          .subscribe((data) => {
            this.movies = data.results
          });
    }
  }

  onMovieSelected(movie: Movie) {
    this.movie = movie;
    this.dialog.nativeElement.show();
  }


}
