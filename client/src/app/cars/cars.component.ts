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

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
  add(company: string,  model: string, yearStr: string, color:string, engine:string, extra_information:string): void {
    company = company.trim();
    model = model.trim();
    color = color.trim();
    engine = engine.trim();
    extra_information = extra_information.trim();
    let year = +yearStr;
    if (!company || !model || !color || !engine || !extra_information || !year) { return; }
    this.carService.addCar({ company, model, color, engine, extra_information, year } as Car)
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
