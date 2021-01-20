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
  ],
  providers: [ConfirmationService]
})
export class MissingPeopleDetailsModule { }
