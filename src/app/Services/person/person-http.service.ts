import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPersonCard } from '../../Models/IPersonCard';
import { IPersonDetails } from '../../Models/IPersonDetails';

// serwis widoczny w całej aplikacji
@Injectable({
  providedIn: 'root',
})
export class PersonHttpService {
  linkHttp = `${environment.apiUrl}/api/Person/`;

  constructor(private http: HttpClient) {}

  getPeopleById(id: number): Observable<IPersonDetails> {
    return this.http.get<IPersonDetails>(this.linkHttp + 'peopleByID' + id);
  }

  getAllPeople(): Observable<IPersonCard[]> {
    const params = new HttpParams();
    //params.set('page', numberOfPeople.toString());

    return this.http.get<IPersonCard[]>(this.linkHttp + 'getAllPeople');
  }
}
