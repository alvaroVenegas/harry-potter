import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from 'src/app/models/Personaje';
import { PersonajesService } from 'src/app/services/personajes/personajes.service';

@Component({
  selector: 'app-detalles-personajes',
  templateUrl: './detalles-personajes.component.html',
  styleUrls: ['./detalles-personajes.component.scss']
})
export class DetallesPersonajesComponent implements OnInit {

  public personaje: Personaje = {
    id: 0,
    personaje: '',
    apodo: '',
    estudianteDeHogwarts: false, 
    casaDeHogwarts: '',
    interpretado_por: '',
    hijos: [],
    imagen: ''
  }
  

  constructor(private route: ActivatedRoute, private personajeService: PersonajesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {

      let idPersonaje = param.get('idPersonaje');
      this.personajeService.getPersonajeById(idPersonaje).subscribe(
        personajeApi => this.personaje = personajeApi
      )
    }

    )

  }

}
