import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissingPeopleDetailsComponent } from './missing-people-details.component';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { AddImageModule } from '../../Components/add-image/add-image.module';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MissingPeopleDetailsComponent],
  imports: [
    CommonModule,
    ButtonModule,
    ToastModule,
    GalleriaModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    AddImageModule,
    CardModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [ConfirmationService]
})
export class MissingPeopleDetailsModule { }
