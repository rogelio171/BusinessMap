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

const appRoutes: Routes = [
  {path: '', component: PlacesComponent},
  {path: 'places', component: PlacesComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'detail/:id', component: DetailComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    PlacesComponent,
    HighlightDirective,
    CountClicksDirective,
    DetailComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT88f5iaFmgYqKcvs7HpJfV3CeYzu1aKU'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
