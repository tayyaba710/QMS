import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientScanValidComponent } from './patient-scan-valid.component';

describe('PatientScanValidComponent', () => {
  let component: PatientScanValidComponent;
  let fixture: ComponentFixture<PatientScanValidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientScanValidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientScanValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
