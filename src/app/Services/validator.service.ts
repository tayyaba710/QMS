import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  createNric(formObj: any) {
    throw new Error('Method not implemented.');
  }
  NRIC_MAX_LENGTH = 9;
  FIN_MAX_LENGTH = 9;
  constructor() { }

  check_nric(id:String)
  {
    
    try
    {
      if (id.length != this.NRIC_MAX_LENGTH)
        return false;

      var prefix = (id.substring(0, 1)).toUpperCase();
      var M = new Array(2, 7, 6, 5, 4, 3, 2);
      var C = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "Z", "J");
      var N = new Array();
      var i = 0;

      for (i = 0; i < 7; i++)
        N[i] = id.substring((i + 1), (i + 2));
      var suffix = (id.substring(8, 9)).toUpperCase();
      var checksum = 0;
      for (i = 0; i < 7; i++) // Sum the result of all digits multiplication
        checksum += N[i] * M[i];
      if (prefix == 'T')
        checksum += 4;
      checksum = checksum % 11; // Divide the sum by 11 to get the remainder
      checksum = 11 - checksum; // Substract remainder from 11
      if (suffix == C[checksum - 1]) // Check digit via answer mapping
        return true;
      else
        return false;
    }
    catch (e)
    {
      return false;
    }
  }	
  check_fin(id:String)
  {
    
    try
    {
      if (id.length != this.FIN_MAX_LENGTH )
        return false;

      var prefix = (id.substring(0, 1)).toUpperCase();
      var M = new Array(2, 7, 6, 5, 4, 3, 2);
      var C = new Array("K", "L", "M", "N", "P", "Q", "R", "T", "U", "W", "X");
      var N = new Array();
      var i = 0;

      for (i = 0; i < 7; i++)
        N[i] = id.substring((i + 1), (i + 2));
      var suffix = (id.substring(8, 9)).toUpperCase();
      var checksum = 0;
      for (i = 0; i < 7; i++) // Sum the result of all digits multiplication
        checksum += N[i] * M[i];
      if (prefix == 'G')
        checksum += 4;
      checksum = checksum % 11; // Divide the sum by 11 to get the remainder
      checksum = 11 - checksum; // Substract remainder from 11
      if (suffix == C[checksum - 1]) // Check digit via answer mapping
        return true;
      else
        return false;
    }
    catch (e)
    {
      return false;
    }
  }
}

