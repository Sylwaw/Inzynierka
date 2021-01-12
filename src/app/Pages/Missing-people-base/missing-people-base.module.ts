import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MissingPeopleBaseComponent } from './Missing-people-base.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DataViewModule } from 'primeng/dataview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';

@NgModule({
  declarations: [MissingPeopleBaseComponent],
  imports: [
    CommonModule,
    ButtonModule,
    AccordionModule,
    AppRoutingModule,
    DataViewModule,
    BrowserAnimationsModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    InputTextModule,
    RippleModule,
    HttpClientModule,
    RatingModule,
    FormsModule,
  ],
})
export class MissingPeopleBaseModule {}
