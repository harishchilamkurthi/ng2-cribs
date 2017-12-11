import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //imports http class from angular core.
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CribsService {

  public newCribSubject = new Subject<any>();

  constructor(private http: Http) { //injecting http class
  }

  getAllCribs() {
    return this.http.get('data/cribs.json')
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

}
