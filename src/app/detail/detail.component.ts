import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../services/places.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    id = null;
    place: any = {};
    constructor(private route: ActivatedRoute, private placesServices: PlacesService) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action']);
        console.log(this.route.snapshot.queryParams['referer']);
        
        this.id = this.route.snapshot.params['id'];
        this.place = this.placesServices.findPlace(this.id);
    }
}
