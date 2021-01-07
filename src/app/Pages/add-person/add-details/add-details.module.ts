import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsComponent } from './add-details.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';



// tslint:disable-next-line: no-unused-expression



@NgModule({
  declarations: [AddDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    DropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AddDetailsModule { }
