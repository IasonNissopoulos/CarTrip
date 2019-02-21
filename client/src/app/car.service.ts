import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { MessageService } from './message.service';
import { EngineService} from './engine.service';
import { Car } from './car';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = 'api/cars';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl)
      .pipe(
        tap(_ => this.log('fetched cars')),
        catchError(this.handleError('getCars', []))
      );
  }

  /** GET car by id. Will 404 if id not found */
  getCar(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url).pipe(
      tap(_ => this.log(`fetched car id=${id}`)),
      catchError(this.handleError<Car>(`getCar id=${id}`))
    );
  }

  /** PUT: update the car on the server */
  updateCar (car: Car): Observable<any> {
    const url = `${this.carsUrl}/${car.id}`;
    return this.http.put(url, car, httpOptions).pipe(
      tap(_ => this.log(`updated car id=${car.id}`)),
      catchError(this.handleError<any>('updateCar'))
    );
  }

  /** POST: add a new car to the server */
  addCar (car: Car): Observable<Car> {
    return this.http.post<Car>(this.carsUrl, car, httpOptions).pipe(
      tap((car: Car) => this.log(`added car w/ id=${car.id}`)),
      catchError(this.handleError<Car>('addCar'))
    );
  }

  /** DELETE: delete the car from the server */
  deleteCar(car: Car | number): Observable<Car> {
    const id = typeof car === 'number' ? car : car.id;
    const url = `${this.carsUrl}/${id}`;

    return this.http.delete<Car>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted car id=${id}`)),
      catchError(this.handleError<Car>('deleteCar'))
    );
  }

  /* GET cars whose title contains search term */
  searchCars(term: string): Observable<Car[]> {
    if (!term.trim()) {
      // if not search term, return empty car array.
      return of([]);
    }
    return this.http.get<Car[]>(`api/cars/?model=${term}`).pipe(
      tap(_ => this.log(`found cars matching "${term}"`)),
      catchError(this.handleError<Car[]>('searchCars', []))
    );
  }

  private log(message: string): void {
    this.messageService.add('CarService: ' + message);
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
