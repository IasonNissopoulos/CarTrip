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
}
