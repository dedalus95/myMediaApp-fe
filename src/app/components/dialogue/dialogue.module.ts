import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueComponent } from './component/dialogue.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DialogueComponent],
  imports: [CommonModule, SharedModule],
  exports: [DialogueComponent],
})
export class DialogueModule {}
