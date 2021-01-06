import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { AddPersonComponent } from './add-person.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { AddPhotoComponent } from './add-photo/add-photo.component';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AddDataModule } from './add-data/add-data.module';

@NgModule({
  declarations: [AddPersonComponent, AddPhotoComponent, AddDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    StepsModule,
    ToastModule,
    AddDataModule,
  ],
  exports: [AddPersonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],
})
export class AddPersonModule {}
