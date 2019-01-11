import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExcursionService }  from '../excursion.service';

import { Excursion } from '../excursion';
@Component({
  selector: 'app-excursion-detail',
  templateUrl: './excursion-detail.component.html',
  styleUrls: ['./excursion-detail.component.css']
})
export class ExcursionDetailComponent implements OnInit {

  excursion: Excursion;

  constructor(
    private route: ActivatedRoute,
    private excursionService: ExcursionService,
    private location: Location
  ) { }

  ngOnInit(): void {
     this.getExcursion();
  }

  getExcursion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.excursionService.getExcursion(id)
      .subscribe(excursion => this.excursion = excursion);
  }

  goBack(): void {
    this.location.back();
  }

}
