import { Component, trigger, state, style, transition, animate } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css'],
  animations: [
    trigger('animableContainer', [
      state('initial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('initial => final', animate(2000)),
      transition('final => inicial', animate(1000))
    ])
  ]
})
export class PlacesComponent {
  title = 'BusinessMap';
  state = 'initial'

  places = null;

  constructor(private placesServices: PlacesService) {
    placesServices.getPlaces()
      .valueChanges().subscribe((places) => {
        this.places = places;
        this.state = 'final'
      });
  }
}
