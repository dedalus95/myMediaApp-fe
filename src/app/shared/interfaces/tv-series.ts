import { TvSeriesAuthor } from "./tv-series-author";
import { TvSeriesProvider } from "./tv-series-provider";

export interface TvSeries {
  year : number,
  imageUrl: string,
  description : string,
  author : TvSeriesAuthor,
  title : string,
  provider : TvSeriesProvider[],
  episodesNum : number,
  seasonsNum : number
}
