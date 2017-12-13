import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //imports http class from angular core.
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'; //importing the map and other functions from rxjs library.
import {Subject} from 'rxjs/Subject';

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

  addCrib() { //is the method used to communicate between the components
  }

}
