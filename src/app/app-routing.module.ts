import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralVisitComponent } from './Pages/general-visit/general-visit.component';
import { InpatientComponent } from './Pages/inpatient/inpatient.component';
import { PatientNotValidComponent } from './Pages/patient-not-valid/patient-not-valid.component';
import { PatientScanValidComponent } from './Pages/patient-scan-valid/patient-scan-valid.component';
import { QuestionariesComponent } from './Pages/questionaries/questionaries.component';
import { RegSuccessComponent } from './Pages/reg-success/reg-success.component';
import { RegUnsuccessComponent } from './Pages/reg-unsuccess/reg-unsuccess.component';
import { SocComponent } from './Pages/soc/soc.component';
import { VisitTypeComponent } from './Pages/visit-type/visit-type.component';

const routes: Routes = [
  {path:'',component:VisitTypeComponent},
  {path:'soc',component:SocComponent},
  {path:'inpatient',component:InpatientComponent},
  {path:'generalVisit',component:GeneralVisitComponent},
  {path:'patientNotValid',component:PatientNotValidComponent},
  {path:'patientScanValid',component:PatientScanValidComponent},
  {path:'questionarie',component:QuestionariesComponent},
  {path:'regSuccess',component:RegSuccessComponent},
  {path:'regUnsuccess',component:RegUnsuccessComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
