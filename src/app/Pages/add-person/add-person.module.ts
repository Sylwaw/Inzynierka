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


@NgModule({
  declarations: [AddPersonComponent],
  imports: [
    CommonModule,
    FormsModule,
    StepsModule,
    ToastModule,
    AddDataModule,
    AddPhotoModule,
    AddDetailsModule
  ],
  exports: [AddPersonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
})
export class AddPersonModule {}
