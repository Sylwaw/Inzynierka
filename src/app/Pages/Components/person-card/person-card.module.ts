import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PersonCardComponent } from './person-card.component';
import { DataViewModule } from 'primeng/dataview';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [PersonCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    DataViewModule,
    AppRoutingModule,
    MessagesModule
  ],
  exports: [PersonCardComponent]
})
export class PersonCardModule {}
