import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-select-cleaner',
  templateUrl: './select-cleaner.page.html',
  styleUrls: ['./select-cleaner.page.scss'],
})
export class SelectCleanerPage implements OnInit {
  finalobj: any;
  tax = 0;
  totalcost = 0;
  packageType: any;
  optionalAddOn: any;
  public cleaningSummaryCleaner: {
    cleaningStartTime: string;
    cleaningEndTime: string;
    cleaningRequestedFromDate: string;
    cleaningRequestedToDate: string;
    packageType: string;
  };

  public finalcleaningSummary: {
    cleaningLocationAddress: string;
    cleaningLocationLattitude: any;
    cleaningLocationLongitude: any;
    cleaningType: string;
    cleaningRequestedHours: number;
    noOfcleanersRequested: number;
    cleaningStartTime: string;
    cleaningEndTime: string;
    cleaningRequestedFromDate: string;
    cleaningRequestedToDate: string;
    selectedCleaners: string[];
    packageType: string;
    optionalAddOn: boolean;
  };

  cleaners: any = [];
  requestedHour: any = null;
  numberofcleaner: any = null;
  finalselectedCleaners = [];
  finalselectedCleanerscount = 0;
  constructor(public service: CustomerService, public route: ActivatedRoute) {}

  ngOnInit() {
    this.finalobj = this.route.snapshot.queryParams;
    console.log(this.finalobj);
    this.getrequesthours();
    this.gettotalCosting();
    this.cleaningSummaryCleaner = {
      "cleaningStartTime": this.finalobj.cleaningStartTime,
      "cleaningEndTime": this.finalobj.cleaningEndTime,
      "cleaningRequestedFromDate": this.finalobj.cleaningRequestedFromDate,
      "cleaningRequestedToDate": this.finalobj.cleaningRequestedToDate,
      "packageType": this.finalobj.packageType,
    };
    this.finalcleaningSummary = {
      "cleaningLocationAddress": this.finalobj.cleaningLocationAddress,
      "cleaningLocationLattitude": this.finalobj.cleaningLocationLattitude,
      "cleaningLocationLongitude": this.finalobj.cleaningLocationLongitude,
      "cleaningType": this.finalobj.cleaningType,
      "cleaningRequestedHours": this.requestedHour,
      "noOfcleanersRequested": this.numberofcleaner,
      "cleaningStartTime": this.finalobj.cleaningStartTime,
      "cleaningEndTime": this.finalobj.cleaningEndTime,
      "cleaningRequestedFromDate": this.finalobj.cleaningRequestedFromDate,
      "cleaningRequestedToDate": this.finalobj.cleaningRequestedToDate,
      "selectedCleaners": ['60f669791040ed504c76e537'],
      "packageType": this.finalobj.packageType,
      "optionalAddOn": this.finalobj.optionalAddOn,
    };
    this.getAvailableCleaners();
  }

  ionViewDidEnter() {
    this.finalobj = this.route.snapshot.queryParams;
    this.packageType = this.finalobj.packageType;
    this.optionalAddOn = this.finalobj.optionalAddOn;
    this.getrequesthours();
    this.gettotalCosting();
    this.cleaningSummaryCleaner = {
      "cleaningStartTime": this.finalobj.cleaningStartTime,
      "cleaningEndTime": this.finalobj.cleaningEndTime,
      "cleaningRequestedFromDate": this.finalobj.cleaningRequestedFromDate,
      "cleaningRequestedToDate": this.finalobj.cleaningRequestedToDate,
      "packageType": this.finalobj.packageType,
    };
    this.finalcleaningSummary = {
      "cleaningLocationAddress" : this.finalobj.cleaningLocationAddress,
      "cleaningLocationLattitude": this.finalobj.cleaningLocationLattitude,
      "cleaningLocationLongitude": this.finalobj.cleaningLocationLongitude,
      "cleaningType": this.finalobj.cleaningType,
      "cleaningRequestedHours": this.requestedHour,
      "noOfcleanersRequested": this.numberofcleaner,
      "cleaningStartTime": this.finalobj.cleaningStartTime,
      "cleaningEndTime": this.finalobj.cleaningEndTime,
      "cleaningRequestedFromDate": this.finalobj.cleaningRequestedFromDate,
      "cleaningRequestedToDate": this.finalobj.cleaningRequestedToDate,
      "selectedCleaners": ['60f669791040ed504c76e537'],
      "packageType": this.finalobj.packageType,
      "optionalAddOn": this.finalobj.optionalAddOn,
    };
    this.getAvailableCleaners();
  }

  getAvailableCleaners() {
    console.log(this.cleaningSummaryCleaner)
    this.service
      .getAvailableCleaners(this.cleaningSummaryCleaner)
      .subscribe((res) => {
        console.log(res);
        this.cleaners = res['data'];
      });
  }

  createBooking() {
    this.finalcleaningSummary = {
      cleaningLocationAddress: this.finalobj.cleaningLocationAddress,
      cleaningLocationLattitude: this.finalobj.cleaningLocationLattitude,
      cleaningLocationLongitude: this.finalobj.cleaningLocationLongitude,
      cleaningType: this.finalobj.cleaningType,
      cleaningRequestedHours: this.requestedHour,
      noOfcleanersRequested: this.numberofcleaner,
      cleaningStartTime: this.finalobj.cleaningStartTime,
      cleaningEndTime: this.finalobj.cleaningEndTime,
      cleaningRequestedFromDate: this.finalobj.cleaningRequestedFromDate,
      cleaningRequestedToDate: this.finalobj.cleaningRequestedToDate,
      selectedCleaners: ['60f669791040ed504c76e537'],
      packageType: this.finalobj.packageType,
      optionalAddOn: this.finalobj.optionalAddOn,
    };

    console.log(this.finalcleaningSummary);
    /*  this.service.createBooking(this.finalcleaningSummary).subscribe(res=>{
      console.log(res)
    }) */
  }

  addOnSupply() {
    this.optionalAddOn = !this.optionalAddOn;
  }

  getrequesthours() {
    let start = new Date(  this.finalobj.cleaningStartTime ).getHours();
    let end = new Date(  this.finalobj.cleaningEndTime).getHours();
    this.requestedHour = Math.abs(end - start);
    console.log(this.requestedHour);
  }

  gettotalCosting() {
    if ( this.finalobj.packageType == 'luxurious') {
      this.totalcost=30*this.finalselectedCleanerscount*this.requestedHour;
      this.tax = this.totalcost*0.05;
      this.totalcost = this.totalcost + this.tax;
      if (  this.finalobj.optionalAddOn) {
        this.totalcost = this.totalcost + 15;
      }
      console.log(this.totalcost, 'lux');
    } else if (  this.finalobj.packageType == 'basic') {
      this.totalcost =
        25 * this.finalselectedCleanerscount * this.requestedHour;
      this.tax = this.totalcost * 0.05;
      this.totalcost = this.totalcost + this.tax;
      if (  this.finalobj.optionalAddOn) {
        this.totalcost = this.totalcost + 15;
      }
      console.log(this.totalcost, 'basic');
    }
  }
}
