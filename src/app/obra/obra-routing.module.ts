import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObraComponent } from './obra.component';

const routes: Routes = [
  { path: '', component: ObraComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObraRoutingModule { }