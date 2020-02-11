import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';
import { Film } from '../model/film';


@Injectable({
  providedIn: 'root'
})
export class FilmService {

  url = 'http://localhost:8080/film/';

  // Injeto o httpclient
  constructor(private httpClient: HttpClient) { }

  // Config do Header
  httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

    // Obter todas os film
    getFilms(): Observable<Film[]> {
       return this.httpClient.get<Film[]>(this.url + 'findAll');
     }
}
