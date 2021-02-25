import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { VisitTypeService } from 'src/app/Services/visit-type.service';
import { Router } from '@angular/router';


import { SocService } from 'src/app/Services/soc.service';
import { InpatientService } from 'src/app/Services/inpatient.service';


@Component({
  selector: 'app-inpatient',
  templateUrl: './inpatient.component.html',
  styleUrls: ['./inpatient.component.css']
})
export class InpatientComponent implements OnInit {
 
  public wardList: any;
  public roomList: any;
  public bedList: any;
  patientName: any;
  ward:any;
  room:any;
  bed:any;
  constructor(private _inpatient:InpatientService, private router: Router) { }

  patControl = new FormControl('', Validators.required); 
  wardControl = new FormControl('', Validators.required);
  roomControl = new FormControl('', Validators.required);
  bedControl = new FormControl('', Validators.required);
  //selectFormControl = new FormControl('', Validators.required);

  ngOnInit(): void {
    this.wardList=this._inpatient.wardVal();
    this.roomList=this._inpatient.roomsVAlue();
    this.bedList=this._inpatient.bedVAlue();
  }

  getPatientVal(item:any){
    console.log(item.target.value);
    console.log(Location);
    this.patientName = item.target.value;
  }
  getSelectedDropdownWard(item:any) {
    console.log(item.target.innerHTML); 
    this.ward = item.target.innerHTML;   
  }

  getSelectedDropdownRoom(item:any) {
    console.log(item.target.innerHTML); 
    this.room = item.target.innerHTML;   
  }
  getSelectedDropdownBed(item:any) {
    console.log(item.target.innerHTML); 
    this.bed = item.target.innerHTML;   
  }


  onSubmit(){
    let validationResult = this._inpatient.inpatientValidation(this.patientName, this.ward, this.room, this.bed);
    console.log(validationResult);
    if(validationResult == true){
     this.router.navigate(['patientScanValid']);
    }
   else{
     this.router.navigate(['patientNotValid']);
   }
  }








  
 
}
