import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineSelectorComponent } from './engine-selector.component';

describe('EngineSelectorComponent', () => {
  let component: EngineSelectorComponent;
  let fixture: ComponentFixture<EngineSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
