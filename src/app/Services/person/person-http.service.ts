import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonCard } from '../../Models/IPersonCard';
import { IPersonDetails } from '../../Models/IPersonDetails';
// import { ICity } from '../../Models/ICity';

// serwis widoczny w całej aplikacji
@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  linkHttp = `${environment.apiUrl}/api/Person/`;
  linkHttp2 = `${environment.apiUrl}/api/City/`;

  constructor(private http: HttpClient) {}

  getPeopleById(id: number): Observable<IPersonDetails> {
    return this.http.get<IPersonDetails>(this.linkHttp + 'peopleByID/' + id);
  }

  getAllPeople(): Observable<IPersonCard[]> {
    const params = new HttpParams();
    return this.http.get<IPersonCard[]>(this.linkHttp + 'getAllPeople');
  }

  // getCityByName(value: string): Observable<ICity>{
  //   return this.http.get<ICity>(this.linkHttp + 'cityByName/' + value);
  // }


}
