import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountClicksDirective } from './directives/count-clicks.directives';
import { DetailComponent } from './detail/detail.component';
import { PlacesComponent } from './places/places.component';
import { ContactComponent } from './contact/contact.component';
import { PlacesService } from './services/places.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from "@angular/common/http";
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthorizationService } from './services/authorization.service';
import { Guard } from './services/guard.service';

const appRoutes: Routes = [
  { path: '', component: PlacesComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'create/:id', component: CreateComponent, canActivate: [Guard] },
  { path: 'detail/:id', component: DetailComponent }
]

export const firebaseConfig = {
  apiKey: '${ secrets.API_KEY }',
  authDomain: "businessmap-1519793269506.firebaseapp.com",
  databaseURL: "https://businessmap-1519793269506.firebaseio.com",
  storageBucket: "businessmap-1519793269506.appspot.com",
  messagingSenderId: '${ secrets.SENDER_ID }'
};


@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HighlightDirective,
    CountClicksDirective,
    DetailComponent,
    ContactComponent,
    CreateComponent,
    LinkifystrPipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: '${ secrets.API_KEY }'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [PlacesService, AuthorizationService, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
