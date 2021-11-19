import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPhotoComponent } from './add-photo.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [AddPhotoComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule
  ],
  exports: [AddPhotoComponent]
})
export class AddPhotoModule { }
