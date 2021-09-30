import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HechizosService {

  constructor(private httpClient:HttpClient) { }

  getHechizos():Observable<any>{
    return this.httpClient.get('https://fedeperin-harry-potter-api.herokuapp.com/hechizos')
  }
}
