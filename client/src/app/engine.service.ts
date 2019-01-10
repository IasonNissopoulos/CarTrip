import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Engine } from './engine';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EngineService {

  private enginesUrl = 'api/engines';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getEngines(): Observable<Engine[]> {
    return this.http.get<Engine[]>(this.enginesUrl)
      .pipe(
        tap(_ => this.log('fetched engines')),
        catchError(this.handleError('getEngines', []))
      );
  }

  /** GET engine by id. Will 404 if id not found */
  getEngine(id: number): Observable<Engine> {
    const url = `${this.enginesUrl}/${id}`;
    return this.http.get<Engine>(url).pipe(
      tap(_ => this.log(`fetched engine id=${id}`)),
      catchError(this.handleError<Engine>(`getEngine id=${id}`))
    );
  }

  /** PUT: update the engine on the server */
  updateEngine (engine: Engine): Observable<any> {
    const url = `${this.enginesUrl}/${engine.id}`;
    return this.http.put(url, engine, httpOptions).pipe(
      tap(_ => this.log(`updated engine id=${engine.id}`)),
      catchError(this.handleError<any>('updateEngine'))
    );
  }

  /** POST: add a new engine to the server */
  addEngine (engine: Engine): Observable<Engine> {
    return this.http.post<Engine>(this.enginesUrl, engine, httpOptions).pipe(
      tap((engine: Engine) => this.log(`added engine w/ id=${engine.id}`)),
      catchError(this.handleError<Engine>('addEngine'))
    );
  }

  /** DELETE: delete the engine from the server */
  deleteEngine(engine: Engine | number): Observable<Engine> {
    const id = typeof engine === 'number' ? engine : engine.id;
    const url = `${this.enginesUrl}/${id}`;

    return this.http.delete<Engine>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted engine id=${id}`)),
      catchError(this.handleError<Engine>('deleteEngine'))
    );
  }

  /* GET engines whose title contains search term */
  searchEngines(term: string): Observable<Engine[]> {
    if (!term.trim()) {
      // if not search term, return empty engine array.
      return of([]);
    }
    return this.http.get<Engine[]>(`api/engines/?title=${term}`).pipe(
      tap(_ => this.log(`found engines matching "${term}"`)),
      catchError(this.handleError<Engine[]>('searchEngines', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('EngineService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
