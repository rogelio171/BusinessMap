import { Component } from '@angular/core';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  title = 'BusinessMap';

  places: any = [
    { id: 1, plan: 'paid', near: 1, distance: 1, active: true, name: 'Flower Shop' },
    { id: 2, plan: 'free', near: 1, distance: 2, active: true, name: 'Donuts' },
    { id: 3, plan: 'free', near: 2, distance: 7, active: true, name: 'PetStore' },
    { id: 4, plan: 'paid', near: 3, distance: 15, active: false, name: 'Barbery' },
    { id: 5, plan: 'free', near: 3, distance: 20, active: false, name: 'Cookies' },
    { id: 6, plan: 'free', near: 3, distance: 27, active: true, name: 'Sushi Roll' }
  ];

  lat: number = 20.6017929;
  lng: number = -103.4109716;

  constructor() {

  }
}
