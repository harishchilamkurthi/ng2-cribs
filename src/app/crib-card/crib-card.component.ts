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
  constructor() { }

  ngOnInit() {
  	let bedrooms = this.crib.bedrooms;
  	let kitchens = this.crib.kitchens;
  }

}
