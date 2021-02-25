import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralVisitService } from 'src/app/Services/general-visit.service';
import { SocService } from 'src/app/Services/soc.service';

@Component({
  selector: 'app-general-visit',
  templateUrl: './general-visit.component.html',
  styleUrls: ['./general-visit.component.css']
})
export class GeneralVisitComponent implements OnInit {


  generalVal:any;
  constructor(private _genealVisit:GeneralVisitService, private router: Router) { }

  ngOnInit(): void {
    this.generalVal=this._genealVisit.locatioVal();
  }

  onSubmit(){
    this.router.navigate(['patientScanValid']);
  }
  
}



