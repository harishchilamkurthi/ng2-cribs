import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';
// Input is a class that comes from @angular/core and we used that as decorator.
@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribCardComponent implements OnInit {

	@Input('crib') crib:any; //@Input('crib') 	     crib:any;
			//		     |
			//	 inputing property value to local property	
			// we are inputing a property value('crib') to local property called crib and asssigning type as any.
			//i.e., any given value passed as property value will be inputed to local property as ANY in out view (crib-card.component.html) which is crib.price, crib.type etc.
  			
			//now the entire application is running on crib-card.component.ts and can be resued anywhere in the applciation.
	
  constructor() { }
 //lets assume that we dont knw what is going on with the values, like what values each item has, lets see if we want to use or get the number of bedrooms or kitchens,

  ngOnInit() {
  	let bedrooms = this.crib.bedrooms;
  	let kitchens = this.crib.kitchens; //challenge is, we dont have kitchen property information in our data.
  
  // Typescript guives us really explicit abut what kind of data should exist on crib property, which can be done by INTERFACE concept.

  }

}
