import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Solution } from '../models/solution';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  data = {
    text:''
  };

  constructor(private http: HttpClient) { }

  getSolution(): Observable<Solution> {
    return this.http.get<Solution>('assets/data.json')
      .pipe(
        map(res => {
          this.data.text = res.text;

          return this.data;
        })
      );
  }
}