import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingPeopleDetailsComponent } from './missing-people-details.component';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [MissingPeopleDetailsComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    ButtonModule
  ]
})
export class MissingPeopleDetailsModule { }
