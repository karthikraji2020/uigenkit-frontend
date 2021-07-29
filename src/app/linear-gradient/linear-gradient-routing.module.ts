import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinearGradientComponent } from './linear-gradient.component';

const routes: Routes = [{ path: '', component: LinearGradientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinearGradientRoutingModule { }
