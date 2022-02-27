import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import myMediaApp_url from '../constants/url/url';
import { Movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getAllMovies() {
    return this.http.get<Movies[]>(myMediaApp_url.movie);
  }

  createMovie() {}

  deleteMovie() {}

  editMovie() {}

  openMovieForm() {}
}
