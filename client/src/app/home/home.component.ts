import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers

})
export class HomeComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ['../assets/car-3046424_1280.jpg', '../assets/car-repair-362150_1280.jpg', '../assets/vintage-car-852239_1280.jpg']

  constructor(config: NgbCarouselConfig, private _http: HttpClient) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
}
