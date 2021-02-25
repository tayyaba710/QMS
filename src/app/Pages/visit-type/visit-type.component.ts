import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visit-type',
  templateUrl: './visit-type.component.html',
  styleUrls: ['./visit-type.component.css']
})
export class VisitTypeComponent implements OnInit {
  Operations:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoPage(pageName:string):void{
 
localStorage.setItem("Operations", pageName);
console.log(pageName);
this.router.navigate(['questionarie']);
}
}
