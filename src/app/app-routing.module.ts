import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hechizos', loadChildren: () => import('./pages/hechizos/hechizos.module').then(m=>m.HechizosModule)
  },
  {
    path: 'libros', loadChildren: () => import('./pages/libros/libros.module').then(m=>m.LibrosModule)
  },
  {
    path: 'personajes', loadChildren: () => import('./pages/personajes/personajes.module').then(m=>m.PersonajesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
