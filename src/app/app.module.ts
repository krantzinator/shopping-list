import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
