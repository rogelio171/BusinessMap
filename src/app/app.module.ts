import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create/:id', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent}
]

export const firebaseConfig = {
  apiKey: "AIzaSyBHAiZS4gVXJtFzjsKk2Ucvkh3010VBd14",
    authDomain: "businessmap-1519793269506.firebaseapp.com",
    databaseURL: "https://businessmap-1519793269506.firebaseio.com",
    storageBucket: "businessmap-1519793269506.appspot.com",
    messagingSenderId: "581169443040"
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
    LinkifystrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT88f5iaFmgYqKcvs7HpJfV3CeYzu1aKU'
    }),
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [PlacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
