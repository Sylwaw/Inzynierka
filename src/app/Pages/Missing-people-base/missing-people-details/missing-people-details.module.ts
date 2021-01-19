import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingPeopleDetailsComponent } from './missing-people-details.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  declarations: [MissingPeopleDetailsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    GalleriaModule,
    DialogModule,
    InputTextModule,
    
  ]
})
export class MissingPeopleDetailsModule { }
