import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddDataComponent],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    CalendarModule,
    FormsModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AddDataModule {}
