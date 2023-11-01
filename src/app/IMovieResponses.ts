import {Movie} from "./Movie";

export interface IMovieResponses {
  page: number,
  results: Movie[],
  total_pages: number,
  total_results: number
}
