import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchDetailsComponent } from './search-details.component';



@NgModule({
  declarations: [
    SearchDetailsComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule
  ],
  exports: [
    SearchDetailsComponent
  ]
})
export class SearchDetailsModule { }
