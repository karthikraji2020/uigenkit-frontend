import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'neumorphism', loadChildren: () => import('./neumorphism/neumorphism.module').then(m => m.NeumorphismModule) },
  { path: 'lineargradient', loadChildren: () => import('./linear-gradient/linear-gradient.module').then(m => m.LinearGradientModule) },
  { path: 'imageoptimizer', loadChildren: () => import('./image-optimizer/image-optimizer.module').then(m => m.ImageOptimizerModule) },
  { path:"**",component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
