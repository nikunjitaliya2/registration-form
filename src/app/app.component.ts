import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'angular-practise';
  ismenurequired = false;

  constructor(private router: Router) {

  }

  ngDoCheck(): void {
    // throw new Error("Method not implemented.")
    let currentUrl = this.router.url;
    if(currentUrl=='/login' || currentUrl == '/register'){
      this.ismenurequired = false;
    } else{
      this.ismenurequired = true;
    }
  }
}
