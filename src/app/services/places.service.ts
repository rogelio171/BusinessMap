import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PlacesService {

    places: any = {};

    constructor(private afDb: AngularFireDatabase, private http: HttpClient) {}

    public getPlaces() {
        return this.afDb.list('places/')
    }

    public findPlace(id) {
        return this.places.filter((place) => {return place.id == id})[0] || null;
    }

    public savePlace(place) {
        this.afDb.database.ref('places/' + place.id).set(place);
    }

    public editPlace(place) {
        console.log(place);
        this.afDb.database.ref('places/' + place.id).set(place);
    }

    public getGeoData(address) {
        //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address='+address);
    }

    public getPlace(id) {
        return this.afDb.object('places/' + id);
    }
}