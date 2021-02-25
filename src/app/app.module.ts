import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Angular-Materials/material.module';
import { ValidatorService } from './Services/validator.service';
import { QuestionariesService } from './Services/questionaries.service';
import { VisitTypeService } from './Services/visit-type.service';
import { VisitTypeComponent } from './Pages/visit-type/visit-type.component';
import { QuestionariesComponent } from './Pages/questionaries/questionaries.component';
import { SocComponent } from './Pages/soc/soc.component';
import { InpatientComponent } from './Pages/inpatient/inpatient.component';
import { GeneralVisitComponent } from './Pages/general-visit/general-visit.component';
import { PatientNotValidComponent } from './Pages/patient-not-valid/patient-not-valid.component';
import { PatientScanValidComponent } from './Pages/patient-scan-valid/patient-scan-valid.component';
import { RegSuccessComponent } from './Pages/reg-success/reg-success.component';
import { RegUnsuccessComponent } from './Pages/reg-unsuccess/reg-unsuccess.component';
import { SocService } from './Services/soc.service';
import { InpatientService } from './Services/inpatient.service';
import {BlocklistService} from './Services/blocklist.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [ValidatorService,QuestionariesService,VisitTypeService, InpatientService,SocService,BlocklistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
