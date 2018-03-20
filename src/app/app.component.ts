import { Component } from '@angular/core';
import { AuthorizationService } from './services/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  loggedUser: any = null;

  constructor(private authorizationService: AuthorizationService) {
    this.authorizationService.isLogged()
      .subscribe((result) => {
        if (result && result.uid) {
          this.loggedIn = true;
          setTimeout(() => {
            this.loggedUser = this.authorizationService.getUser().currentUser.email;
            console.log(this.loggedUser)
          }, 500);
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
