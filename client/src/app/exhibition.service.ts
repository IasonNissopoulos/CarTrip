import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Exhibition } from './exhibition';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {

  private exhibitionsUrl = 'api/exhibitions';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getExhibitions(): Observable<Exhibition[]> {
    return this.http.get<Exhibition[]>(this.exhibitionsUrl)
      .pipe(
        tap(_ => this.log('fetched exhibitions')),
        catchError(this.handleError('getExhibitions', []))
      );
  }

  /** GET exhibition by id. Will 404 if id not found */
  getExhibition(id: number): Observable<Exhibition> {
    const url = `${this.exhibitionsUrl}/${id}`;
    return this.http.get<Exhibition>(url).pipe(
      tap(_ => this.log(`fetched exhibition id=${id}`)),
      catchError(this.handleError<Exhibition>(`getExhibition id=${id}`))
    );
  }


  /* GET exhibitions whose title contains search term */
  searchExhibitions(term: string): Observable<Exhibition[]> {
    if (!term.trim()) {
      // if not search term, return empty exhibition array.
      return of([]);
    }
    return this.http.get<Exhibition[]>(`api/exhibitions/?title=${term}`).pipe(
      tap(_ => this.log(`found exhibitions matching "${term}"`)),
      catchError(this.handleError<Exhibition[]>('searchExhibitions', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('ExhibitionService: ' + message);
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
