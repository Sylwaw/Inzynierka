import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { AddPersonComponent } from './add-person.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AddDataModule } from './add-data/add-data.module';
import { AddPhotoModule } from './add-photo/add-photo.module';
import { AddDetailsModule } from './add-details/add-details.module';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AddImageModule } from '../Components/add-image/add-image.module';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';
import { DialogModule } from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AddPersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    StepsModule,
    ToastModule,
    AddDataModule,
    AddPhotoModule,
    AddDetailsModule,
    CardModule,
    CalendarModule,
    InputTextModule,
    ButtonModule,
    AddImageModule,
    DropdownModule,
    CheckboxModule,
    DialogModule,
    InputTextareaModule,
    RouterModule
  ],
  exports: [AddPersonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
})
export class AddPersonModule {}
