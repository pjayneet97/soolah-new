import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-select-cleaner',
  templateUrl: './select-cleaner.page.html',
  styleUrls: ['./select-cleaner.page.scss'],
})
export class SelectCleanerPage implements OnInit {
  cleaningSummaryCleaner: {
    cleaningStartTime: string;
    cleaningEndTime: string;
    cleaningRequestedFromDate: string;
    cleaningRequestedToDate: string;
    packageType: string;
  };


  finalcleaningSummary: {
    "cleaningLocationAddress": string
    "cleaningLocationLattitude": any
    "cleaningLocationLongitude": any
    "cleaningType": string,
    "cleaningRequestedHours" : number,
    "noOfcleanersRequested": number,
    "cleaningStartTime": string,
    "cleaningEndTime": string,
    "cleaningRequestedFromDate": string,
    "cleaningRequestedToDate": string,
    "selectedCleaners":string[],
    "packageType": string
  };

  cleaners:any

  constructor(public service: CustomerService) {}

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.getAvailableCleaners()
    this.cleaningSummaryCleaner={
      cleaningStartTime: "2021-07-27T11:00:00+05:30",
      cleaningEndTime: "2021-07-27T12:00:00+05:30",
      cleaningRequestedFromDate: "2021-07-27T11:24:52+05:30",
      cleaningRequestedToDate: "2021-07-27T11:24:52+05:30",
      packageType: "luxurious"
    }

  this.finalcleaningSummary={
    cleaningLocationAddress: "2021-07-27T11:00:00+05:30",
    cleaningLocationLattitude: 0.0,
    cleaningLocationLongitude: 0.0,
    cleaningType: "Residential",
    cleaningRequestedHours : 4,
    noOfcleanersRequested: 1,
    cleaningStartTime: "2021-07-27T11:00:00+05:30",
    cleaningEndTime: "2021-07-27T12:00:00+05:30",
     cleaningRequestedFromDate: "2021-07-27T11:24:52+05:30",
    cleaningRequestedToDate: "2021-07-27T11:24:52+05:30",
    selectedCleaners:["60f669791040ed504c76e537"],
    packageType: "luxurious"
  };
  }

  addOnSupply() {
    this.service.addOn = !this.service.addOn;
  }

  getAvailableCleaners() {
    this.service.getAvailableCleaners(this.cleaningSummaryCleaner).subscribe(res=>{
      console.log(res)
      this.cleaners=res["data"]
    })
  }


  createBooking() {
    this.service.createBooking(this.finalcleaningSummary).subscribe(res=>{
      console.log(res)
    })
  }


}
