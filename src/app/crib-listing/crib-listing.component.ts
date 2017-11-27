import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { cribs} from './../data/cribs'; //this is the import from cribs.ts file in data folder. 


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribListingComponent implements OnInit {
	cribs: Array<any> = cribs;

	@Input('crib') crib;

  constructor() { }

  ngOnInit() {
  }

 }
