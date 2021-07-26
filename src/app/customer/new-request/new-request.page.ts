import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.page.html',
  styleUrls: ['./new-request.page.scss'],
})
export class NewRequestPage implements OnInit {
  cleaningType: any;
  cleaningaddress: any = {};
  dates: any;
  startTime: any = null;
  endTime: any = null;
  cleaningRequestedFromDate: any = null;
  cleaningRequestedToDate: any = null;
  today: any;
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsRange: CalendarComponentOptions = {
    pickMode: 'range',
  };

  @ViewChild('placesRef') placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    this.cleaningaddress.address = address.formatted_address;
    this.cleaningaddress.lat = address.geometry.location.lat() + '';
    this.cleaningaddress.long = address.geometry.location.lng() + '';
    console.log(this.cleaningaddress);
  }

  constructor(public router: Router) {}

  onDateChange($event) {
    /*  console.log(new Date($event[0]._i)); */

    let FromDate= new Date(this.dates.from._d)
    FromDate.setHours(5)
    FromDate.setMinutes(30)
    FromDate.setSeconds(0)
    this.cleaningRequestedFromDate =FromDate.toISOString().replace('Z', '+05:30')
    console.log(this.cleaningRequestedFromDate)
    let ToDate= new Date(this.dates.to._d)
    ToDate.setHours(5)
    ToDate.setMinutes(30)
    ToDate.setSeconds(0)
    this.cleaningRequestedToDate = ToDate.toISOString().replace('Z', '+05:30');
    console.log(this.cleaningRequestedToDate)
  }


  ngOnInit() {  this.startTime=null
    this.endTime=null
    this.cleaningRequestedFromDate=null
    this.cleaningRequestedToDate=null}

  ionViewDidEnter() {

  }

  navigate() {
      this.router.navigate(['/customer/home/choose-package'], {
        queryParams: {
          cleaningType: this.cleaningType,
          cleaningLocationAddress: this.cleaningaddress.address,
          cleaningLocationLattitude: this.cleaningaddress.lat,
          cleaningLocationLongitude: this.cleaningaddress.long,
          cleaningStartTime: this.startTime.toISOString().replace('Z', '+05:30'),
          cleaningEndTime: this.endTime.toISOString().replace('Z', '+05:30'),
          cleaningRequestedFromDate: this.cleaningRequestedFromDate,
          cleaningRequestedToDate: this.cleaningRequestedToDate,
        },
      });
  }

  starttimechanged($event) {
    let time = new Date($event.detail.value);
    let start = time.getHours();
    this.startTime = new Date(this.cleaningRequestedFromDate);
    this.startTime.setHours(start);
    this.startTime.setMinutes(0);
    this.startTime.setSeconds(0);

  }

  endtimechanged($event) {
    let time = new Date($event.detail.value);
    let end = time.getHours();
    this.endTime = new Date(this.cleaningRequestedFromDate);
    this.endTime.setHours(end);
    this.endTime.setMinutes(0);
    this.endTime.setSeconds(0);
  }

  isValid() {
    if (
      this.cleaningRequestedToDate &&
      this.cleaningRequestedFromDate &&
      this.startTime &&
      this.endTime &&
      this.cleaningType &&
      this.cleaningaddress
    ) {
      return true;
    } else {
      return false;
    }
  }
}
