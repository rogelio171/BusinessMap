import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent {
  title = 'BusinessMap';

  places = null;

  constructor(private placesServices: PlacesService) {
    placesServices.getPlaces()
      .valueChanges().subscribe((places) => {
        this.places = places;
      });
  }
}
