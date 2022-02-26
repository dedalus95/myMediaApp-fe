import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http : HttpClient) { }


  addMovie(movie: Movies) {
    return this.http.post(myMediaApp_url.movie, movie);
  }

  getAllMovies() {
    return this.http.get<Movies[]>(myMediaApp_url.movie);
  }
}
