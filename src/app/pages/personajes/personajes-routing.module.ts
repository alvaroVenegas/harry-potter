import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesPersonajesComponent } from './detalles-personajes/detalles-personajes.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  {
    path: '', 
    component: PersonajesComponent
  }, 
  {
    path: ':idPersonaje', 
    component: DetallesPersonajesComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
