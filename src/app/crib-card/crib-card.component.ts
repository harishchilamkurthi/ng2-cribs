import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CribCardComponent implements OnInit {

	@Input('crib') crib:any;

  constructor() { }

  ngOnInit() {
  	let bedrooms = this.crib.bedrooms;
  	let kitchens = this.crib.kitchens;
  }

}
