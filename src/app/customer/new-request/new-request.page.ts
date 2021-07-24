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
    console.log(this.dates);
    let FromDate= new Date(this.dates.from._d)
    console.log(FromDate.toISOString())
    this.cleaningRequestedFromDate =FromDate.toISOString()
    let ToDate= new Date(this.dates.to._d)
    this.cleaningRequestedToDate = ToDate.toISOString();
  }


  ngOnInit() {}

  ionViewDidEnter() {}

  navigate() {
    (this.cleaningRequestedFromDate = new Date(
      this.dates.from._i
    ).toISOString()),
      this.router.navigate(['/customer/choose-package'], {
        queryParams: {
          cleaningType: this.cleaningType,
          cleaningLocationAddress: this.cleaningaddress.address,
          cleaningLocationLattitude: this.cleaningaddress.lat,
          cleaningLocationLongitude: this.cleaningaddress.long,
          cleaningStartTime: this.startTime.toISOString(),
          cleaningEndTime: this.endTime.toISOString(),
          cleaningRequestedFromDate: this.cleaningRequestedFromDate,
          cleaningRequestedToDate: this.cleaningRequestedToDate,
        },
      });
  }

  starttimechanged($event) {
    let time = new Date($event.detail.value);
    let start = time.getHours();
    this.startTime = new Date(this.dates.from._i);
    this.startTime.setHours(start);
    this.startTime.setMinutes(0);
    this.startTime.setSeconds(0);
    console.log(this.startTime.toISOString());
  }

  endtimechanged($event) {
    let time = new Date($event.detail.value);
    let end = time.getHours();
    this.endTime = new Date(this.dates.from._i);
    this.endTime.setHours(end);
    this.endTime.setMinutes(0);
    this.endTime.setSeconds(0);
    console.log(this.endTime.toISOString());
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
