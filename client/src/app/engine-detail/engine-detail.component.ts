import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EngineService }  from '../engine.service';

import { Engine } from '../engine';
@Component({
  selector: 'app-engine-detail',
  templateUrl: './engine-detail.component.html',
  styleUrls: ['./engine-detail.component.css']
})
export class EngineDetailComponent implements OnInit {

  engine: Engine;

  constructor(
    private route: ActivatedRoute,
    private engineService: EngineService,
    private location: Location
  ) { }

  ngOnInit(): void {
     this.getEngine();
  }

  getEngine(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.engineService.getEngine(id)
      .subscribe(engine => this.engine = engine);
  }

  save(): void {
    this.engineService.updateEngine(this.engine)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
