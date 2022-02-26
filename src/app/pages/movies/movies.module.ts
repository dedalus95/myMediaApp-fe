import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { ComponentModule } from "src/app/common/components.module";
import { MoviesComponent } from "./component/movies.component";

@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports : [
    CommonModule,
    SharedModule,
    ComponentModule
  ],
  exports : [
    MoviesComponent
  ]
})

export class MoviesModule {}
