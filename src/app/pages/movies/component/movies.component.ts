import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/shared/interfaces/movies';
import { MoviesService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movieList!: Movies[];


  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.service.getAllMovies().subscribe(res => {
      this.movieList = res;
    })
  }

}
