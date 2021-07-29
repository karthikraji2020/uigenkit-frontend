import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NeumorphismComponent } from './neumorphism.component';

const routes: Routes = [{ path: '', component: NeumorphismComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NeumorphismRoutingModule { }
