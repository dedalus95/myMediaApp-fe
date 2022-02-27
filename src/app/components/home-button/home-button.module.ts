import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeButtonComponent } from './component/home-button.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [HomeButtonComponent],
  imports: [CommonModule, IconModule],
  exports: [HomeButtonComponent],
})
export class HomeButtonModule {}
