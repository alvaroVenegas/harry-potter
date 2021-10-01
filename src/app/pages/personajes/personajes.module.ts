import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { DetallesPersonajesComponent } from './detalles-personajes/detalles-personajes.component';


@NgModule({
  declarations: [
    PersonajesComponent,
    DetallesPersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule
  ]
})
export class PersonajesModule { }
