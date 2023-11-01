import {IMovie} from "./IMovie";

export class Movie implements IMovie {
  id: number;
  title?: string | " " | undefined;
  poster_path: string;
  genre_ids: [number];
  release_date: string;
  backdrop_path?: string | " " | undefined;
  overview?: string;
  vote_average?: number;

  constructor(id: number, title: string, poster: string, genreIds:[number], release_date: string, backdrop?: string, overview?: string, vote_average?: number) {
    this.id = id;
    this.title = title;
    this.poster_path = poster;
    this.genre_ids = genreIds;
    this.release_date = release_date;
    this.backdrop_path = backdrop;
    this.overview = overview;
    this.vote_average = vote_average;
  }


}
