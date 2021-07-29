import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinearGradientRoutingModule } from './linear-gradient-routing.module';
import { LinearGradientComponent } from './linear-gradient.component';


@NgModule({
  declarations: [LinearGradientComponent],
  imports: [
    CommonModule,
    LinearGradientRoutingModule
  ]
})
export class LinearGradientModule { }
