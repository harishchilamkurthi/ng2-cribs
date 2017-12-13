import { Component, OnInit, ViewChild } from '@angular/core'; 
import { NgForm } from '@angular/forms';
import { CribsService } from './../services/cribs.service';//imports from recently created service
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-listing-form',
  templateUrl: './add-listing-form.component.html',
  styleUrls: ['./add-listing-form.component.css']
})
export class AddListingFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm; //from our template
  propertyTypes: Array<string> = ['Condo', 'Duplex', 'House'];
  //all the data comes from newCribsForm.value - values:object

  constructor(
    private cribsService: CribsService, //CribService is an instance
    private utilService: UtilService //
  ) { }

  ngOnInit() {
  }

  onCribSubmit(data) : void { // returns nothing for now
    this.cribsService.addCrib(data); //adding cribs service from crib method
                             //data that comes from form
    this.newCribForm.reset(); // resets the existing form
    }

}

