import { CarouselComponent } from './carousel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NgbCarouselConfig,
  NgbCarouselModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, NgbCarouselModule],
  exports: [CarouselComponent],
  providers: [NgbCarouselConfig],
})
export class CarouselModule {}
