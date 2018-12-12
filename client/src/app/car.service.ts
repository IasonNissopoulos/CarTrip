import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    this.messageService.add('CarService: fetched cars');
    return of(CARS);
  }

}
