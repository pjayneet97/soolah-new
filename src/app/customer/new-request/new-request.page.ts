import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  @ViewChild('placesRef') placesRef: GooglePlaceDirective;
  public handleAddressChange(address: Address) {
    this.cleaningaddress.address = address.formatted_address;
    this.cleaningaddress.lat = address.geometry.location.lat() + '';
    this.cleaningaddress.long = address.geometry.location.lng() + '';
    console.log(this.cleaningaddress);
  }

  constructor(public router: Router) {}

  ngOnInit() {}

  navigate() {
    this.router.navigate(['/customer/choose-package'], {
      queryParams: {
        cleaningType: this.cleaningType,
        cleaningLocationAddress: this.cleaningaddress.address,
        cleaningLocationLattitude: this.cleaningaddress.lat,
        cleaningLocationLongitude:this.cleaningaddress.long
      },
    });
  }
}
