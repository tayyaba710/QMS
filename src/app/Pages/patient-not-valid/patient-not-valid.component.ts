import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-not-valid',
  templateUrl: './patient-not-valid.component.html',
  styleUrls: ['./patient-not-valid.component.css']
})
export class PatientNotValidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


getVal(){
  this.router.navigate(['/']);
}
}