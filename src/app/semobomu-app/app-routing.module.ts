import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from '../pages/books/component/book.component';
import { HomeComponent } from '../pages/home/component/home.component';
import { MoviesComponent } from '../pages/movies/component/movies.component';
import { MusicComponent } from '../pages/music/component/music.component';
import { TvseriesComponent } from '../pages/tvseries/tvseries/tvseries.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'music',
    component: MusicComponent,
  },

  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'books',
    component: BookComponent,
  },
  {
    path: 'tv-series',
    component: TvseriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
