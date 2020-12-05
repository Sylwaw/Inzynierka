import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data.component';



@NgModule({
  declarations: [AddDataComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AddDataModule { }
