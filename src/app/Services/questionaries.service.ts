import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionariesService {

  constructor() { }


  public quesList: any[] = [
    {​​​​​​​​
"Q":"Question 1",
"Ques":"Have you travelled out of Singapore in the last 3 weeks?",

    }​​​​​​​​,
    {​​​​​​​​
"Q":"Question 2",
"Ques":"Do you have cough / fever / sore throat / runny nose?",
    }​​​​​​​​,
    {​​​​​​​​
"Q":"Question 3",
"Ques":"Are you here to see a doctor? ",
      }​​​​​​​​
    ];
 
     
valReg() {​​​​​​​​
  return this.quesList;
      }​​​​​​​​
   


}
