import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HighlightDirective } from './directives/highlight.directive';
import { CountClicksDirective } from './directives/count-clicks.directives';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CountClicksDirective    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCT88f5iaFmgYqKcvs7HpJfV3CeYzu1aKU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
