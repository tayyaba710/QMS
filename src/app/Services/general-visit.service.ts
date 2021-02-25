import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralVisitService {
  public locationList:any[]=[
    {"location": "Cardiology"},
    {"location": "Urology"},
    {"location": "Neurology"}
  ];

  constructor() { }
  locatioVal(){
    return this.locationList;
  }

}
