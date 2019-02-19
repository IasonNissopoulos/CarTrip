import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExcursionService }  from '../excursion.service';

import { Excursion } from '../excursion';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-excursion-detail',
  templateUrl: './excursion-detail.component.html',
  styleUrls: ['./excursion-detail.component.css']
})
export class ExcursionDetailComponent implements OnInit {

  excursion: Excursion;
  closeResult: string;

  constructor(
    private route: ActivatedRoute,
    private excursionService: ExcursionService,
    private location: Location,
    private modalService: NgbModal
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
