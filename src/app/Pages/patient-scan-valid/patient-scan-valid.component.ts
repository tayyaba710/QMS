import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators, ReactiveFormsModule, ValidationErrors  } from '@angular/forms';
import { ValidatorService } from 'src/app/Services/validator.service';
import { Router } from '@angular/router';
import {BlocklistService} from '../../Services/blocklist.service';


@Component({
  selector: 'app-patient-scan-valid',
  templateUrl: './patient-scan-valid.component.html',
  styleUrls: ['./patient-scan-valid.component.css']
})
export class PatientScanValidComponent implements OnInit {
  validationResult: any;
   profileForm: any;
   operations: any; 
  
NRIC:any;
 
   constructor(private _validator: ValidatorService, private router: Router, private blocklist:BlocklistService) {}
  
  NRICValidator: ValidatorFn = (control : AbstractControl): ValidationErrors | null => {
    const patNRIC = control.get('patNRIC');
    let validation = this.checkValidation(patNRIC!.value)
    return patNRIC && validation ? { identityRevealed: true } : null;
  };
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      patNRIC: new FormControl(''),
    },
    { validators: this.NRICValidator }
    )
    console.log("laod time!"); 

    
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.profileForm.value);
   
    
  }

  
  checkValidation(firstName: String) : boolean | undefined{
    let prefix = firstName.substr(0,1);
    console.log(prefix);
    if(prefix == "S" || prefix == "T" || prefix == "F" || prefix == "G"){
      let validation : boolean | undefined = undefined;
      if(prefix == "S" || prefix == "T")
        validation = this._validator.check_nric(firstName);
      if(prefix == "F" || prefix == "G")
        validation = this._validator.check_fin(firstName);
      if(validation){
    
        this.validationResult = "Valid NRIC"; 
        return true;
      }
      else
        this.validationResult = "InValid NRIC";
        return false;
    }
    return;
  }
 
  getVal(item:any){
     (this.NRIC = item.target.value)
  }
  ngclick(pageName:string){
    let blocking = this.blocklist.inpatientValidation(this.NRIC);
    console.log(blocking);
    
    if(  this.blocklist.inpatientValidation(this.NRIC)==true){
console.log(this.NRIC.values );
      this.router.navigate(['regSuccess']);
    }

    else{
      this.router.navigate(['regUnsuccess']);
    }
   
  }

}

 

