import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExhibitionService }  from '../exhibition.service';

import { Exhibition } from '../exhibition';


@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnInit {

  exhibition: Exhibition;

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService,
    private location: Location
  ) { }

  ngOnInit(): void {
     this.getExhibition();
  }

  getExhibition(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.exhibitionService.getExhibition(id)
      .subscribe(exhibition => this.exhibition = exhibition);
  }

  goBack(): void {
    this.location.back();
  }

}
