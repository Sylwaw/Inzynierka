import { MainComponent } from './Pages/Main/Main.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './Pages/Main/carousel/carousel.component';
import { CarouselModule } from './Pages/Main/carousel/carousel.module';
import { MainModule } from './Pages/Main/main.module';
import { AppRoutingModule } from './app-routing.module';
import { AddPersonComponent } from './Pages/add-person/add-person.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { DatabaseComponent } from './Pages/Missing-people-base/database/database.component';
import { MissingPeopleBaseModule } from './Pages/Missing-people-base/missing-people-base.module';
import { AddPersonModule } from './Pages/add-person/add-person.module';

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
    AddPersonModule,
    MissingPeopleBaseModule,
    AccordionModule,
    TabMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
