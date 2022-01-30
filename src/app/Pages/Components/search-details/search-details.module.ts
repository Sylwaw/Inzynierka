import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { SearchDetailsComponent } from './search-details.component';
import {DropdownModule} from 'primeng/dropdown';




@NgModule({
  declarations: [
    SearchDetailsComponent,
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    DropdownModule
  ],
  exports: [
    SearchDetailsComponent
  ]
})
export class SearchDetailsModule { }
