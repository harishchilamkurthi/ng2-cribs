import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { cribs} from './../data/cribs'; //this is the import from cribs.ts file in data folder. 


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribListingComponent implements OnInit { //
	cribs: Array<any> = cribs; // we are assigning the type as any and assigning it to cribs data. here crib is a member and cribs(red) is a local memeber.

	@Input('crib') crib;

  constructor() { }

  ngOnInit() {
  }

 }
