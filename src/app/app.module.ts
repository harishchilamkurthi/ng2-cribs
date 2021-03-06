import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { CribsService} from './services/cribs.service'; //CribsService will be used through out the application.
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { FormModule } from '@angular/forms';
import { UtilService } from './services/util.service';

@NgModule({ //point 1
  declarations: [  //whenever we create a new component, we declare here in decorator.
    AppComponent,
    CribListingComponent,
    CribCardComponent
  ],
  imports: [  //this is where we assign our import list.
    BrowserModule,
    HttpModule,
    FormModule
  ],
  //providers: [], // any injectable services that we create
  providers: [CribsService, UtilService], //service that is created should be provided.
  bootstrap: [AppComponent] // main component is bootstrapped
})
export class AppModule { }
