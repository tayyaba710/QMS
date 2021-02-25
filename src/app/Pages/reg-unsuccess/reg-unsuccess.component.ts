import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-unsuccess',
  templateUrl: './reg-unsuccess.component.html',
  styleUrls: ['./reg-unsuccess.component.css']
})
export class RegUnsuccessComponent implements OnInit {
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 
  clickEvent(){
    this.router.navigate(['/']);
  }
}
