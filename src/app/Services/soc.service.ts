import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocService {
  public soclist:any[]=[
    {
      "soc": "SOC"
    },
    {
      "soc": "Inpatient"
    },
    {
      "soc": "General"
    }
  ];
  constructor() { }
  valsoc(){
    return this.soclist;
  }
  inpatientValidation(patientName: any, location: any){
  
    //console.log(patientName+location)
    if(patientName.substr(0,1) == "A" && location =="SOC"){
      return true;
    }
    else{
      return false;
    }
  }
}
