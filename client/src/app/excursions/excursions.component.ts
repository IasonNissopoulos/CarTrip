import { Component, OnInit } from '@angular/core';

import { Excursion } from '../excursion';
import {ExcursionService} from '../excursion.service';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

  excursions : Excursion[];

  constructor(private excursionService: ExcursionService) { }

  ngOnInit() {
    this.getExcursions();
  }


    getExcursions(): void {
      this.excursionService.getExcursions()
        .subscribe(excursions => this.excursions = excursions);
    }
}
