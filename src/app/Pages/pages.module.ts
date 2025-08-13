import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angular Material used by Pages/*
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule }     from '@angular/material/input';
import { MatSelectModule }    from '@angular/material/select'; 
import { MatIconModule }      from '@angular/material/icon';
import { MatCardModule }      from '@angular/material/card';
import { MatRadioModule }     from '@angular/material/radio';
import { MatStepperModule }   from '@angular/material/stepper';
import { MatButtonModule }    from '@angular/material/button';

// Components under Pages/*
import { VisitTypeComponent } from './visit-type/visit-type.component';
import { QuestionariesComponent } from './questionaries/questionaries.component';
import { SocComponent } from './soc/soc.component';
import { InpatientComponent } from './inpatient/inpatient.component';
import { GeneralVisitComponent } from './general-visit/general-visit.component';
import { PatientNotValidComponent } from './patient-not-valid/patient-not-valid.component';
import { PatientScanValidComponent } from './patient-scan-valid/patient-scan-valid.component';
import { RegSuccessComponent } from './reg-success/reg-success.component';
import { RegUnsuccessComponent } from './reg-unsuccess/reg-unsuccess.component';

@NgModule({
  declarations: [
    VisitTypeComponent,
    QuestionariesComponent,
    SocComponent,
    InpatientComponent,
    GeneralVisitComponent,
    PatientNotValidComponent,
    PatientScanValidComponent,
    RegSuccessComponent,
    RegUnsuccessComponent
  ],
  imports: [
    CommonModule,            
    FormsModule,
    ReactiveFormsModule,

    
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatRadioModule,
    MatStepperModule,
    MatButtonModule
  ],
  exports: [
    
  ]
})
export class PagesModule {}
