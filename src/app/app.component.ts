import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;

  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.isLogged()
    .subscribe((result) => {
      if(result && result.uid) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    }, (error) => {
      this.loggedIn = false;
    })
  }

  logout() {
    this.authorizationService.logout();
  }
}
