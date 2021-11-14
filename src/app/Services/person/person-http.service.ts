import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Person} from '../../Models/person';

// serwis widoczny w całej aplikacji
@Injectable({
  providedIn: 'root'
})

export class PersonHttpService {

linkHttp = `${environment.apiUrl}/api/person/`;

  constructor(private http: HttpClient) { }

  getPersonById(id: number): Observable<Person> {
    return this.http.get<Person>(this.linkHttp + id);
  }
}
