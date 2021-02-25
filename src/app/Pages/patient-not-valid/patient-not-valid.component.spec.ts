import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotValidComponent } from './patient-not-valid.component';

describe('PatientNotValidComponent', () => {
  let component: PatientNotValidComponent;
  let fixture: ComponentFixture<PatientNotValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNotValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNotValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
