import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CarService }  from '../car.service';
import { AuthService } from '../auth.service';

import { Car } from '../car';
@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car: Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
    private auth: AuthService

  ) { }

  ngOnInit(): void {
     this.getCar();
  }

  getCar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.carService.getCar(id)
      .subscribe(car => this.car = car);
  }

  save(): void {
    this.carService.updateCar(this.car)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }



}
