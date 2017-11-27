import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';


@NgModule({ //point 1
  declarations: [  //whenever we create a new component, we declare here in decorator.
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],
  imports: [  //this is where we assign our import list.
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
