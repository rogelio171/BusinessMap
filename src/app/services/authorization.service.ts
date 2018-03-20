import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase/app';
import { Router } from "@angular/router";

@Injectable()
export class AuthorizationService {

    constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
        this.isLogged();
    }

    public facebookLogin() {
        this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then((result) => {
            console.log(result);
            alert('User logged with facebook')
            this.router.navigate(['places'])
        })
        .catch((error) => {
            console.log(error);
        })
    }

    public login = (mail, pass) => {
        this.angularFireAuth.auth.signInWithEmailAndPassword(mail, pass)
        .then((response) => {
            alert('User logged in');
            console.log(response);
            this.router.navigate(['places'])
        })
        .catch((error) => {
            alert('Error');
            console.log(error);
        })
    }

    public register = (mail, pass) => {
        this.angularFireAuth.auth.createUserWithEmailAndPassword(mail, pass)
        .then((response) => {
            alert('User registered');
            console.log(response);
            this.router.navigate(['places'])
        })
        .catch((error) => {
            alert('Error');
            console.log(error);
        })
    }

    public isLogged() {
        return this.angularFireAuth.authState;
    }

    public logout() {
        this.angularFireAuth.auth.signOut();
        alert('Session closed.')
    }

    public getUser() {
        return this.angularFireAuth.auth;
    }

}