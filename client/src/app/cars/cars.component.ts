import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import {CarService} from '../car.service';
import { AuthService } from '../auth.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {EngineService} from '../engine.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  cars : Car[];
  closeResult: string;


  constructor(private carService: CarService,
    private auth: AuthService,
    private modalService: NgbModal,
  ) { }

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  fileChange(input): void {
    this.readFiles(input.files);
  }

  readFile(file: File, reader: FileReader, callback): void {
    reader.onload = () => {
      callback(reader.result);
    }
    reader.readAsDataURL(file);
  }

  readFiles(files: FileList, index=0): void {
    let reader = new FileReader();

    if (index in files) {
      this.readFile(files[index], reader, (result) => {
        this.readFiles(files, index+1);
      });
    }

  }

}
