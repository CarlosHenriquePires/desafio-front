import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { People } from '../model/people';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  url = 'http://localhost:8080/people/';

  // Injeto o httpclient
  constructor(private httpClient: HttpClient) { }

  // Config do Header
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    // Obter todas as people
    getPeoples(): Observable<People[]> {
       return this.httpClient.get<People[]>(this.url + 'findAll');
     }
    // // Obter um people pelo id
    // getPeopleById(peopleid: number): Observable<People> {
    //   return this.httpClient.get<People>(this.url + '/' + peopleid);
    // }
    // // Salvar um people
    // savePeople(people: People): Observable<People> {
    //   return this.httpClient.post<People>(this.url + 'save', JSON.stringify(people), this.httpOptions);
    // }
    // // Atualiza um people
    // updatePeople(people: People): Observable<People> {
    //   return this.httpClient.put<People>(this.url + '/' + people.idpeople, JSON.stringify(people), this.httpOptions);
    // }

    // deletePeople(people: People) {
    //   return this.httpClient.delete<People>(this.url + 'delOne/' + people.idpeople, this.httpOptions);
    // }

}
