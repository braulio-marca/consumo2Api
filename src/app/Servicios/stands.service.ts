import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StandsService {

  _url:string ='https://stand-by-me.herokuapp.com/api/v1/stands';
  constructor(
    private http: HttpClient
  ) { 
    
  }
  getStand(){
    let header=new HttpHeaders()
    .set('Type-content','aplication/json');
    return this.http.get(this._url, {headers:header});
      }
}
