import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-success',
  templateUrl: './reg-success.component.html',
  styleUrls: ['./reg-success.component.css']
})
export class RegSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  clickEvent(){
    this.router.navigate(['/']);
  }
}
