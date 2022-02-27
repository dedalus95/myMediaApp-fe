import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { PlusComponent } from "./component/plus.component";

@NgModule({
  declarations: [
    PlusComponent
  ],
  imports : [
    CommonModule,
    SharedModule
  ],
  exports : [
    PlusComponent
  ]
})

export class PlusModule {}
