import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentModule } from 'src/app/components/components.module';
import { BookComponent } from './component/book.component';

@NgModule({
  declarations: [BookComponent],
  imports: [CommonModule, SharedModule, ComponentModule],
  exports: [BookComponent],
})
export class BooksModule {}
