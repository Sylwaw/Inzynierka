import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonCard } from '../../Models/IPersonCard';
import { IPersonDetails } from '../../Models/IPersonDetails';
import { ICity } from '../../Models/ICity';
import { IPersonCreate } from 'src/app/Models/IPersonCreate';
import { IPersonUpdate } from 'src/app/Models/IPersonUpdate';


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

  getCityByName(value: string): Observable<ICity>{
    return this.http.get<ICity>(this.linkHttp2 + 'cityByName/' + value);
  }

  postPerson(person:IPersonCreate): Observable<IPersonCreate> {
    return this.http.post<IPersonCreate>(this.linkHttp + 'createPerson', person);
  }

  putPeopleById(id: number, person: IPersonUpdate): Observable<IPersonUpdate> {
    return this.http.put<IPersonUpdate>(this.linkHttp + 'updatePerson/' + id, person);
  }


}
