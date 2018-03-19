import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerMock:any ={}

  constructor(private authorizationService: AuthorizationService) {}
  
  register() {
    debugger;
    this.authorizationService.register(this.registerMock.email, this.registerMock.pass);
  }

}
