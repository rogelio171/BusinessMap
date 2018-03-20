import { Component } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  place: any = {};
  id: any = null;
  results$: Observable<any>;
  private searchField: FormControl;

  constructor(private placeServices: PlacesService, private route: ActivatedRoute, private http: HttpClient) {
    this.id = this.route.snapshot.params['id'];
    if (this.id != 'new') {
      this.placeServices.getPlace(this.id)
        .valueChanges()
        .subscribe(place => {
          this.place = place;
        })
    }
    const URL = 'https://maps.google.com/maps/api/geocode/json';
    this.searchField = new FormControl();
    this.results$ = this.searchField.valueChanges
      .debounceTime(500)
      .switchMap(query => this.http.get(`${URL}?address=${query}`))
      .map(response => response['results']);
  }

  savePlace() {
    var address = this.place.street + ',' + this.place.city + ',' + this.place.country;

    this.placeServices.getGeoData(address)
      .subscribe(result => {
        this.place.lat = result['results'][0].geometry.location.lat;
        this.place.lng = result['results'][0].geometry.location.lng;

        if (this.id != 'new') {
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

  selectAddress(address) {
    console.log(address);
    this.place.street = address.address_components[1].long_name + ' ' + address.address_components[0].long_name;
    this.place.city = address.address_components[4].long_name;
    this.place.country = address.address_components[6].long_name;
  }

}
