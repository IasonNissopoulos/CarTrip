import { Component, OnInit } from '@angular/core';

import { Exhibition } from '../exhibition';
import {ExhibitionService} from '../exhibition.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.css']
})
export class ExhibitionsComponent implements OnInit {

  exhibitions : Exhibition[];

  constructor(private exhibitionService: ExhibitionService) { }

  ngOnInit() {
    this.getExhibitions();
  }


    getExhibitions(): void {
      this.exhibitionService.getExhibitions()
        .subscribe(exhibitions => this.exhibitions = exhibitions);
    }
}
