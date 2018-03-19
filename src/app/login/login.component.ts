import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginContainer:any ={}

  constructor(private authorizationService: AuthorizationService) { 
    
  }

  login() {
    this.authorizationService.login(this.loginContainer.email, this.loginContainer.pass);
  }

  facebookLogin() {
    this.authorizationService.facebookLogin();
  }

}
