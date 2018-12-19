import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap, tap, catchError
 } from 'rxjs/operators';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: [ './car-search.component.css' ]
})
export class CarSearchComponent {
  public model: any;
  searching = false;
  searchFailed = false;

  public cars$: Observable<Car[]>;

  constructor(private router: Router,
              private carService: CarService) {}

  // Push a search term into the observable stream.
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
                this.carService.searchCars(term).pipe(
                  tap(() => this.searchFailed = false),
                  catchError(() => {
                    console.log('Failed!');
                    this.searchFailed = true;
                    return of([]);
                  }))
               ),
      tap(() => {this.searching = false;})
    )

  formatter(b: Car): string {
    return b.model;
  }

  selectedItem(event) : void {
    var car = event.item;
    this.router.navigate([`/cars/${car.id}`]);
  }

}
