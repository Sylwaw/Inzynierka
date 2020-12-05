import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatabaseComponent } from './database.component';


@NgModule({
  declarations: [DatabaseComponent],
  imports: [
    CommonModule,
  ],
  exports: [DatabaseComponent],
})
export class DatabaseModule { }
