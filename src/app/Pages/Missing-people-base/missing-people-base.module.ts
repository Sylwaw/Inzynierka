import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';
import { MissingPeopleBaseComponent } from './Missing-people-base.component';
import { DatabaseModule } from './database/database.module';
import { DatabaseComponent } from './database/database.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [MissingPeopleBaseComponent],
  imports: [CommonModule, ButtonModule, AccordionModule, DatabaseModule, AppRoutingModule],
})
export class MissingPeopleBaseModule {}
