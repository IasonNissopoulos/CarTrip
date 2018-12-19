import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import {CarService} from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : Car[];
  selectedCar: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  onSelect(car: Car): void {
  this.selectedCar = car;
  }
  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
  add(company: string,  model: string, yearStr: string): void {
    model = model.trim();
    company = company.trim();
    let year = +yearStr;
    if (!model || !company || !year) { return; }
    this.carService.addCar({ model, company, year } as Car)
      .subscribe(car => {
        // If the operation has failed, CarService's handleError()
        // will have given an empty result; so we add to the
        // cars array only if a non-empty result has been produced.
        if (car) {
          this.cars.push(car);
        }
      });
  }

  delete(car: Car): void {
    this.cars = this.cars.filter(h => h !== car);
    this.carService.deleteCar(car).subscribe();
  }
}
