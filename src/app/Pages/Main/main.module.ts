import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './carousel/carousel.module';
import { MainComponent } from './Main.component';
import { PersonCardModule } from '../Components/person-card/person-card.module';

@NgModule({
  declarations: [
    MainComponent

  ],
  imports: [
    CommonModule,
    PersonCardModule,
    CarouselModule
  ]
})
export class MainModule { }
