import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ExhibitionService }  from '../exhibition.service';

import { Exhibition } from '../exhibition';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-exhibition-detail',
  templateUrl: './exhibition-detail.component.html',
  styleUrls: ['./exhibition-detail.component.css']
})
export class ExhibitionDetailComponent implements OnInit {

  exhibition: Exhibition;
  closeResult: string;

  constructor(
    private route: ActivatedRoute,
    private exhibitionService: ExhibitionService,
    private location: Location,
    private modalService: NgbModal
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
