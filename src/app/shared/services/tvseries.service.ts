import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { TvSeries } from '../interfaces/tv-series';

@Injectable({
  providedIn: 'root'
})
export class TvseriesService {

  constructor(private http: HttpClient) { }

  addTvSeries(tvseries: TvSeries) {
    this.http.post(myMediaApp_url.tvSeries, tvseries);
  }

  getAllTvSeries() {
    return this.http.get<TvSeries[]>(myMediaApp_url.tvSeries);
  }
}
