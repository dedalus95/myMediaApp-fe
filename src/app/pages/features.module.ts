import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { HomeModule } from "./home/home.module";
import { MusicModule } from "./music/music.module";
import { ComponentModule } from "../common/components.module";
import { MoviesModule } from "./movies/movies.module";
import { BooksModule } from "./books/books.module";
import { TvseriesModule } from "./tvseries/tvseries.module";

@NgModule({
  imports: [
    CommonModule,
    HomeModule,
    SharedModule,
    MusicModule,
    MoviesModule,
    BooksModule,
    ComponentModule,
    TvseriesModule
  ],
  exports : [
    HomeModule,
    MusicModule,
    MoviesModule,
    BooksModule,
    TvseriesModule
  ]
})

export class FeaturesModule { }
