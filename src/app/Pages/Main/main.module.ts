import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './carousel/carousel.module';
import { MainComponent } from './Main.component';

@NgModule({
  declarations: [
    MainComponent,

  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class MainModule { }
