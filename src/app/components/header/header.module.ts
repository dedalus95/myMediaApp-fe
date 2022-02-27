import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, SharedModule, IconModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
