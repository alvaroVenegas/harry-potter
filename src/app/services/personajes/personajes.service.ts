import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Personaje } from 'src/app/models/Personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private httpClient:HttpClient) { }

  getPersonajes():Observable<any> {
    return this.httpClient.get('https://fedeperin-harry-potter-api.herokuapp.com/personajes');
  }

  getPersonajeById(idPersonaje:any):Observable<any>{
    return this.httpClient.get('https://fedeperin-harry-potter-api.herokuapp.com/personajes/' + idPersonaje);
  }

  
}
