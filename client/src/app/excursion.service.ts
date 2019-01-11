import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Excursion } from './excursion';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExcursionService {

  private excursionsUrl = 'api/excursions';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getExcursions(): Observable<Excursion[]> {
    return this.http.get<Excursion[]>(this.excursionsUrl)
      .pipe(
        tap(_ => this.log('fetched excursions')),
        catchError(this.handleError('getExcursions', []))
      );
  }

  /** GET excursion by id. Will 404 if id not found */
  getExcursion(id: number): Observable<Excursion> {
    const url = `${this.excursionsUrl}/${id}`;
    return this.http.get<Excursion>(url).pipe(
      tap(_ => this.log(`fetched excursion id=${id}`)),
      catchError(this.handleError<Excursion>(`getExcursion id=${id}`))
    );
  }


  /* GET excursions whose title contains search term */
  searchExcursions(term: string): Observable<Excursion[]> {
    if (!term.trim()) {
      // if not search term, return empty excursion array.
      return of([]);
    }
    return this.http.get<Excursion[]>(`api/excursions/?title=${term}`).pipe(
      tap(_ => this.log(`found excursions matching "${term}"`)),
      catchError(this.handleError<Excursion[]>('searchExcursions', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('ExcursionService: ' + message);
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
