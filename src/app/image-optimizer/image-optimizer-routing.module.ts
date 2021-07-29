import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImageOptimizerComponent } from './image-optimizer.component';

const routes: Routes = [{ path: '', component: ImageOptimizerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageOptimizerRoutingModule { }
