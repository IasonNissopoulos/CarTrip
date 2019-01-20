import { Component, OnInit } from '@angular/core';

import { Engine } from '../engine';
import {EngineService} from '../engine.service';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {

  engines : Engine[];

  constructor(private engineService: EngineService) { }

  ngOnInit() {
    this.getEngines();
  }


    getEngines(): void {
      this.engineService.getEngines()
        .subscribe(engines => this.engines = engines);
    }
    add(title: string, engine_cubic_centimeters: number, engine_manufacturer:string ): void {
      title = title.trim();
      engine_manufacturer = engine_manufacturer.trim();
      if (!title || !engine_cubic_centimeters || !engine_manufacturer) { return; }
      this.engineService.addEngine({title, engine_cubic_centimeters, engine_manufacturer } as Engine)
        .subscribe(engine => {
          // If the operation has failed, EngineService's handleError()
          // will have given an empty result; so we add to the
          // engines array only if a non-empty result has been produced.
          if (engine) {
            this.engines.push(engine);
          }
        });
    }

    delete(engine: Engine): void {
      this.engines = this.engines.filter(h => h !== engine);
      this.engineService.deleteEngine(engine).subscribe();
    }
}
