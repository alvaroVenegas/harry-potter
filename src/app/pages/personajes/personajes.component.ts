import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/models/Personaje';
import { PersonajesService } from 'src/app/services/personajes/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  public personajesList: Personaje[] = []
  

  constructor(private personajesService: PersonajesService) { }

  ngOnInit(): void {

    this.personajesService.getPersonajes().subscribe((personajesApi) => {
      this.personajesList = personajesApi
      console.log(personajesApi);
    })
  }

}
