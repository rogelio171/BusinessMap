import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";

@Injectable()
export class AuthorizationService {

    constructor(private angularFireAuth: AngularFireAuth) {

    }

    public login = (mail, pass) => {
        console.log("Login method");
    }

    public register = (mail, pass) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, pass)
        .then((response) => {
            alert('User registered');
            console.log(response);
        })
        .catch((error) => {
            alert('Error');
            console.log(error);
        })
    }
}