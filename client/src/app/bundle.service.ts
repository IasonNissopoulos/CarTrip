import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';

import { Bundle } from './bundle';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BundleService {

  private bundlesUrl = 'api/bundles';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getBundles(): Observable<Bundle[]> {
    return this.http.get<Bundle[]>(this.bundlesUrl)
      .pipe(
        tap(_ => this.log('fetched bundles')),
        catchError(this.handleError('getBundles', []))
      );
  }

  /** GET bundle by id. Will 404 if id not found */
  getBundle(id: number): Observable<Bundle> {
    const url = `${this.bundlesUrl}/${id}`;
    return this.http.get<Bundle>(url).pipe(
      tap(_ => this.log(`fetched bundle id=${id}`)),
      catchError(this.handleError<Bundle>(`getBundle id=${id}`))
    );
  }


  /* GET bundles whose title contains search term */
  searchBundles(term: string): Observable<Bundle[]> {
    if (!term.trim()) {
      // if not search term, return empty bundle array.
      return of([]);
    }
    return this.http.get<Bundle[]>(`api/bundles/?title=${term}`).pipe(
      tap(_ => this.log(`found bundles matching "${term}"`)),
      catchError(this.handleError<Bundle[]>('searchBundles', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('BundleService: ' + message);
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
