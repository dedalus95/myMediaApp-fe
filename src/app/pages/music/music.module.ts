import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { MusicComponent } from './component/music.component';
import { ComponentModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [MusicComponent],
  imports: [CommonModule, SharedModule, ComponentModule],
  exports: [MusicComponent],
})
export class MusicModule {}
