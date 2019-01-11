import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcursionDetailComponent } from './excursion-detail.component';

describe('ExcursionDetailComponent', () => {
  let component: ExcursionDetailComponent;
  let fixture: ComponentFixture<ExcursionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcursionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcursionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
