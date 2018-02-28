import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BusinessMap';

  places:any = [
    {plan:'paid', near:1, distance:1, active:true, name: 'Flower Shop'},
    {plan:'free', near:1, distance:2, active:true, name: 'Donuts'},
    {plan:'free', near:2, distance:7, active:true, name: 'PetStore'},
    {plan:'paid', near:3, distance:15, active:false, name: 'Barbery'},
    {plan:'free', near:3, distance:20, active:false, name: 'Cookies'},
    {plan:'free', near:3, distance:27, active:true, name: 'Sushi Roll'}
  ];

  lat:number = 20.6017929;
  lng:number = -103.4109716;

  constructor(){

  }

}
