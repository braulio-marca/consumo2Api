import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  _url:string ='https://stand-by-me.herokuapp.com/api/v1/characters';
  constructor(
    private http: HttpClient
  ) { 
    console.log('PersonaServ ice');
  }
  getPersona(){
    let header=new HttpHeaders()
    .set('Type-content','aplication/json');
    return this.http.get(this._url, {headers:header});
      }
}
