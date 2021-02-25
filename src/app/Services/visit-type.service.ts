import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

interface Ward{
  name:string;
 
}
interface Room{
  number:string;
}

interface Bed{
  number:string;
}


@Injectable({
  providedIn: 'root'
})
export class VisitTypeService {
  patientName='pawan';
  item:any;
  constructor(private router: Router) { }

  
  wardControl = new FormControl('', Validators.required);
  patControl = new FormControl('', Validators.required);
  roomControl = new FormControl('', Validators.required);
  bedControl = new FormControl('', Validators.required);
  selectFormControl = new FormControl('', Validators.required);
  ward: Ward[] = [
    {name: 'General'},
    {name: 'Private'},
    {name: 'VIP'},
    {name: 'Doctor'},
  ];

  rooms: Room[] = [
    {number: 'Room-1'},
    {number: 'Room-2'},
    {number: 'Room-3'},
    {number: 'Room-4'},
    {number: 'Room-5'},
    {number: 'Room-6'},
    {number: 'Room-7'},
  ];

  bed: Bed[] = [
    {number: 'Bed-1'},
    {number: 'Bed-2'},
    {number: 'Bed-3'},
    {number: 'Bed-4'},
    {number: 'Bed-5'},
    {number: 'Bed-6'},
    {number: 'Bed-7'},
  ];

  valWard() {​​​​​​​​
    return this.ward;
        }​​​​​​​​
  valRoom() {​​​​​​​​
  return this.rooms;
   }​​​​​​​​
  valBed() {​​​​​​​​
    return this.bed;
   }​​​​​​​​
   validatorPat(){
    return this.patControl;
   }
   validatorOne(){
     return this.wardControl;
     return this.selectFormControl; 
      }
   validatorTwo(){
    return this.roomControl;
  }
  validatorThree(){
    return this.bedControl;
  }
  validatorFour(){
    return this.wardControl;
    
     }

     validateForm(item:any){
      this.patientName=item;
      if(this.patientName=="pawan"){
  
        this.router.navigate(['patientScanValid']);
      }
      else{
        this.router.navigate(['patientNotValid']);
      }
       }

     


}
