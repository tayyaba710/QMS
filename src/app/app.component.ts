import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Internet';

  curDay: number = Date.now();
  dayDate: number = Date.now(); 
  currentTime: number = Date.now();
  constructor(private router: Router) {}
  
  ngOnInit(): void {
    console.log("laod time!"); 
    setInterval(() => {
        this.dayDate = Date.now();
        this.currentTime = Date.now();
        this.curDay = Date.now();
      }, 1);

    }
Welcome()
{
  this.router.navigateByUrl('');
}

}
