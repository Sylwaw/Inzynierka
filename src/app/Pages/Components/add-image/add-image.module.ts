import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddImageComponent } from './add-image.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [AddImageComponent],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    CardModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [AddImageComponent]
})
export class AddImageModule { }
