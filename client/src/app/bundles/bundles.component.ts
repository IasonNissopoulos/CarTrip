import { Component, OnInit } from '@angular/core';

import { Bundle } from '../bundle';
import {BundleService} from '../bundle.service';

@Component({
  selector: 'app-bundles',
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.css']
})
export class BundlesComponent implements OnInit {

  bundles : Bundle[];

  constructor(private bundleService: BundleService) { }

  ngOnInit() {
    this.getBundles();
  }


    getBundles(): void {
      this.bundleService.getBundles()
        .subscribe(bundles => this.bundles = bundles);
    }
}
