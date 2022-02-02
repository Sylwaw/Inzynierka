import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './carousel/carousel.module';
import { MainComponent } from './Main.component';
import { PersonCardModule } from '../Components/person-card/person-card.module';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {PaginatorModule} from 'primeng/paginator';
import {DataViewModule} from 'primeng/dataview';

@NgModule({
  declarations: [
    MainComponent

  ],
  imports: [
    CommonModule,
    PersonCardModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    PaginatorModule,
    DataViewModule
  ]
})
export class MainModule { }
