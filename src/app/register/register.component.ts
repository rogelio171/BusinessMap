import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerContainer:any ={}

  constructor(private authorizationService: AuthorizationService) {}
  
  register() {
    this.authorizationService.register(this.registerContainer.email, this.registerContainer.pass);
  }

}
