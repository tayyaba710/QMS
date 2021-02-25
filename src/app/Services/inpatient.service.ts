import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class InpatientService {
  patientName='p';
  item:any;
  constructor(private router: Router) { }
  
  public ward:any[]=[
    {"wn" : "General"},
    {"wn": "Private"},
    {"wn": "VIP"},
    {"wn": "Doctor"}
  ];

  public room: any[] = [
    {"rn": "Room-1"},
    {"rn": "Room-2"},
    {"rn": "Room-3"}
  ];

  public bed:any[] = [
    {"bn": "Bed-1"},
    {"bn": "Bed-2"},
    {"bn": "Bed-3"}
  ];



  wardVal(){
    return this.ward;
  }
  
  roomsVAlue(){
    return this.room;
  }
  
  bedVAlue(){
    return this.bed;
  }
 
  patientNameOne="P";
  inpatientValidation(patientName: any, wardone: any, roomone:any, bed:any){
    
      if(patientName.substr(0,10) == "P" && wardone == "General" && roomone == "Room-1" && bed =="Bed-1" ){
 
      return true;
    }
    else{
      return false;
    }
  }
  



}
