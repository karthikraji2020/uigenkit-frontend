import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ColorPalateComponent } from './color-palate.component';

const routes: Routes = [{ path: '', component: ColorPalateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorPalateRoutingModule { }
