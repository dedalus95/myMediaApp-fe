import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, ComponentModule],
  exports: [HomeComponent],
})
export class HomeModule {}
