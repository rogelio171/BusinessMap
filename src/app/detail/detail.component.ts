import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

    places: any = [
        { id: 1, plan: 'paid', near: 1, distance: 1, active: true, name: 'Flower Shop', description: 'This is the description for this place' },
        { id: 2, plan: 'free', near: 1, distance: 2, active: true, name: 'Donuts', description: 'This is the description for this place' },
        { id: 3, plan: 'free', near: 2, distance: 7, active: true, name: 'PetStore', description: 'This is the description for this place' },
        { id: 4, plan: 'paid', near: 3, distance: 15, active: false, name: 'Barbery', description: 'This is the description for this place' },
        { id: 5, plan: 'free', near: 3, distance: 20, active: false, name: 'Cookies', description: 'This is the description for this place' },
        { id: 6, plan: 'paid', near: 3, distance: 27, active: true, name: 'Sushi Roll', description: 'This is the description for this place' }
      ];

    id = null;
    place: any = {};
    constructor(private route: ActivatedRoute) {
        console.log(this.route.snapshot.params['id']);
        console.log(this.route.snapshot.queryParams['action']);
        console.log(this.route.snapshot.queryParams['referer']);
        this.id = this.route.snapshot.params['id'];
        this.place = this.findPlace();

        console.log(this.findPlace());
    }

    findPlace() {
        return this.places.filter((place) => {return place.id == this.id})[0] || null;
    }
}
