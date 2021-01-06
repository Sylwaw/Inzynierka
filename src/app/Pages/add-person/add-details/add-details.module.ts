import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDetailsComponent } from './add-details.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AddDetailsComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
  ]
})
export class AddDetailsModule { }
