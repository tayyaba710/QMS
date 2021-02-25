import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BlocklistService {
  

  inpatientValidation(NR: any){
  
    if(NR !=  'S6890927I' ){
      return true;
    }
    else{
      return false;
    }
  }

 
}
