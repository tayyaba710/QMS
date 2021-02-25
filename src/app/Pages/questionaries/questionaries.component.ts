import { Component, OnInit } from '@angular/core';
import { QuestionariesService } from 'src/app/Services/questionaries.service';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionaries',
  templateUrl: './questionaries.component.html',
  styleUrls: ['./questionaries.component.css']
})
export class QuestionariesComponent implements OnInit {
  _listQues:any;
  Operations:any;
  constructor(private _RegSer:QuestionariesService, private router: Router) { }

  ngOnInit(): void {
    this._listQues = this._RegSer.valReg();
    this.Operations=localStorage.getItem("Operations");
    console.log(this.Operations);
  }

  goForward(stepper: MatStepper, index: any) {
    stepper.next();
    if (index == this._listQues.length - 1) {

      if (this.Operations == "specialist_outpatient_clinics") {
        this.router.navigate(['/soc']);
      } 
     else if(this.Operations == "inpatient_wards") {
        this.router.navigate(['/inpatient']);
      }
      else if (this.Operations == "general")
      {
       this.router.navigate(['/generalVisit']);
     } 
     else{
       alert("please select your visit type.")
     }
     
    }
  }

}
