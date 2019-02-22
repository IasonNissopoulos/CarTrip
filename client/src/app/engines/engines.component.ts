import { Component, OnInit } from '@angular/core';

import { Engine } from '../engine';
import {EngineService} from '../engine.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {

  engines : Engine[];

  constructor(private engineService: EngineService,
    private auth: AuthService,
  ) { }

  ngOnInit() {
    this.getEngines();
  }


    getEngines(): void {
      this.engineService.getEngines()
        .subscribe(engines => this.engines = engines);
    }
    add(title: string, cubic_centimeters: number, manufacturer:string ): void {
      title = title.trim();
      manufacturer = manufacturer.trim();
      if (!title || !cubic_centimeters || !manufacturer) { return; }
      this.engineService.addEngine({title, cubic_centimeters, manufacturer } as Engine)
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
