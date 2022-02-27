import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentModule } from 'src/app/components/components.module';
import { TvseriesComponent } from './tvseries/tvseries.component';

@NgModule({
  declarations: [TvseriesComponent],
  imports: [CommonModule, SharedModule, ComponentModule],
  exports: [TvseriesComponent],
})
export class TvseriesModule {}
