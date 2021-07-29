import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColorPalateRoutingModule } from './color-palate-routing.module';
import { ColorPalateComponent } from './color-palate.component';


@NgModule({
  declarations: [ColorPalateComponent],
  imports: [
    CommonModule,
    ColorPalateRoutingModule
  ]
})
export class ColorPalateModule { }
