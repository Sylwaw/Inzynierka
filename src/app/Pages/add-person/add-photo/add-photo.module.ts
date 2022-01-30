import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhotoComponent } from './add-photo.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { AddImageModule } from '../../Components/add-image/add-image.module';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [AddPhotoComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    AddImageModule,
    DialogModule
  ],
  exports: [AddPhotoComponent]
})
export class AddPhotoModule { }
