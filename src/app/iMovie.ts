export interface IMovie {
  id: number
  title?: string | "" | undefined,
  overview?: string,
  backdrop?: string,
  poster_path: string,
  genres?: [number],
  popularity?: number,
  release_date: string,
  voteAverage?: number,
  voteCount?: number
}
