import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'rockets', pathMatch: 'full' },
  {
    path: 'rockets',
    loadChildren: () => import('./modules/rocket/rocket.module').then(m => m.RocketModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
