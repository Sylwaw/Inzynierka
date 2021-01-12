import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MainModule } from './Pages/Main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { MissingPeopleBaseModule } from './Pages/Missing-people-base/missing-people-base.module';
import { AddPersonModule } from './Pages/add-person/add-person.module';
import { MissingPeopleDetailsModule } from './Pages/Missing-people-base/missing-people-details/missing-people-details.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MainModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    MissingPeopleDetailsModule,
    AddPersonModule,
    MissingPeopleBaseModule,
    AccordionModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
