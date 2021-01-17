import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingPeopleDetailsComponent } from './missing-people-details.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';



@NgModule({
  declarations: [MissingPeopleDetailsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    GalleriaModule
  ]
})
export class MissingPeopleDetailsModule { }
