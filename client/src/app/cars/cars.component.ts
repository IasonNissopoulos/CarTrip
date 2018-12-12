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
}
