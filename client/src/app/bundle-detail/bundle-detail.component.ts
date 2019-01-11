import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BundleService }  from '../bundle.service';

import { Bundle } from '../bundle';
@Component({
  selector: 'app-bundle-detail',
  templateUrl: './bundle-detail.component.html',
  styleUrls: ['./bundle-detail.component.css']
})
export class BundleDetailComponent implements OnInit {

  bundle: Bundle;

  constructor(
    private route: ActivatedRoute,
    private bundleService: BundleService,
    private location: Location
  ) { }

  ngOnInit(): void {
     this.getBundle();
  }

  getBundle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bundleService.getBundle(id)
      .subscribe(bundle => this.bundle = bundle);
  }

  goBack(): void {
    this.location.back();
  }

}
