import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //imports http class from angular core.
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'; //importing the map and other functions from rxjs library.
import {Subject} from 'rxjs/Subject'; //imports subject from rxjs.

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

    constructor(private http: Http) { //injecting http class
  }

  getAllCribs() {
    return this.http.get('data/cribs.json')
      // we will map this http request before it actually returns in json format in crib-listing.component.ts before we subscribe it.
               .map(res => res.json());
  }

  addCrib(data){ //is the method used to communicate between the components
    this.newCribSubject.next(data);
    //when the data is coming from addCrib(); when ever the button is clicked and the data is called, sent it through the subject.
    //if the observed data comes over the period of time, always something comes next.
    data.image = 'default-crib';
    //image property that we have should be default because we dont have any specific image to insert for this listing.
  }
  

}
