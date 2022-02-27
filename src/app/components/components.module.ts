import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './header/header.module';
import { SharedModule } from '../shared/shared.module';
import { FooterModule } from './footer/footer.module';
import { CardModule } from './card/card.module';
import { IconModule } from './icon/icon.module';
import { HomeButtonModule } from './home-button/home-button.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    SharedModule,
    CardModule,
    IconModule,
    HomeButtonModule,
  ],
  exports: [
    HeaderModule,
    FooterModule,
    CardModule,
    IconModule,
    HomeButtonModule,
  ],
  declarations: [],
})
export class ComponentModule {}
