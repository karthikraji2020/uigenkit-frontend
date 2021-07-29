import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageOptimizerRoutingModule } from './image-optimizer-routing.module';
import { ImageOptimizerComponent } from './image-optimizer.component';


@NgModule({
  declarations: [ImageOptimizerComponent],
  imports: [
    CommonModule,
    ImageOptimizerRoutingModule
  ]
})
export class ImageOptimizerModule { }
