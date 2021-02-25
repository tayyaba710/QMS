import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocService } from 'src/app/Services/soc.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-soc',
  templateUrl: './soc.component.html',
  styleUrls: ['./soc.component.css']
})
export class SocComponent implements OnInit {
  public listsoc: any;
  patientName: any;
  Location:any;
  constructor(private soclist1:SocService, private router: Router) { }

  patControl = new FormControl('', Validators.required); 

  ngOnInit(): void {
    this.listsoc=this.soclist1.valsoc();
  }

  getVal(item:any){
    console.log(item.target.value);
    console.log(Location);
  
     (this.patientName = item.target.value)
    
  
  }
  getSelectedDropdown(item:any) {
    console.log(item.target.innerHTML); 
    this.Location = item.target.innerHTML;   
  }
  onSubmit(){
    let validationResult = this.soclist1.inpatientValidation(this.patientName, this.Location);
    console.log(validationResult);
    
    if(validationResult==true){

      this.router.navigate(['patientScanValid']);
    }

    else{
      this.router.navigate(['patientNotValid']);
    }
   
  }

}
