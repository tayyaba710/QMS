import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralVisitComponent } from './general-visit.component';

describe('GeneralVisitComponent', () => {
  let component: GeneralVisitComponent;
  let fixture: ComponentFixture<GeneralVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
