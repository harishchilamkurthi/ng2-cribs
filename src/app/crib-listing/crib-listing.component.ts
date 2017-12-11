import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
//import { cribs} from './../data/cribs'; //this is the import from cribs.ts file in data folder. 
//removing the above import because the ts fil eis converted to json file.
import { Http } from '@angular/http'; //imports angular http requests.
import 'rxjs/add/operator/map'; //imports from rxjs library.

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribListingComponent implements OnInit { //
	//cribs: Array<any> = cribs; // we are assigning the type as any and assigning it to cribs data. here crib is a member and cribs(red) is a local memeber.
	cribs: Array<any> = [];
	//the cribs injection file is no more. it has been renamed to json file.
	
	
	@Input('crib') crib;

  // when a http request is used, we need to inject it to component which will make use of implementation that angular givesus for injecting dependencies which is done in constructor.	
  constructor(private http : Http ) { } //gives us private instance of http and we can call by using this keyword.

  ngOnInit() {
	  //this.http.get('data/cribs.json'); // we are using cribs.json file for data and using "get" keyword.
	  this.http.get('data/cribs.json')
	      .map(res=>res.json())
	  //http request goes out, we get request from data/cribs.json file and what ever comes back will be MAPped to json file and the result will be SUBSCRIBE.
	      .subscribe( 
		  data => console.log(data) 
	  );
	  }

 }
