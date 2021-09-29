import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HechizosComponent } from './hechizos.component';

const routes: Routes = [
  {
    path: '', 
    component: HechizosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HechizosRoutingModule { }
