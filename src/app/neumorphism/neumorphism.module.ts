import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NeumorphismRoutingModule } from './neumorphism-routing.module';
import { NeumorphismComponent } from './neumorphism.component';


@NgModule({
  declarations: [NeumorphismComponent],
  imports: [
    CommonModule,
    NeumorphismRoutingModule
  ]
})
export class NeumorphismModule { }
