import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  place: any = {};
  id: any = null;

  constructor(private placeServices: PlacesService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'new') {
      this.placeServices.getPlace(this.id)
        .valueChanges()
        .subscribe(place => {
          this.place = place;
        })
    }
  }

  savePlace() {
    var address = this.place.street + ',' + this.place.city + ',' + this.place.country;

    this.placeServices.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result['results'][0].geometry.location.lat;
        this.place.lng = result['results'][0].geometry.location.lng;
        
        if(this.id != 'new') {
          this.placeServices.editPlace(this.place);
          alert('Business edited')
        } else {
          this.place.id = Date.now();
          this.placeServices.savePlace(this.place);
          alert('Business created')
        }
        this.place = {};
      });
  }


}
