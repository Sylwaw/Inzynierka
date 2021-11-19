import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { PersonCardModule } from '../Components/person-card/person-card.module';
import { SearchDetailsModule } from '../Components/search-details/search-details.module';




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
    FormsModule,
    PersonCardModule,
    SearchDetailsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MissingPeopleBaseModule {}
