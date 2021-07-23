import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-choose-package',
  templateUrl: './choose-package.page.html',
  styleUrls: ['./choose-package.page.scss'],
})
export class ChoosePackagePage implements OnInit {
mode='luxurious'
packageType=this.mode

  constructor(public router: Router,public service:CustomerService) { }

  ngOnInit() {
  }


  segmentChanged(ev: any) {
    this.mode=ev.detail.value;
    this.packageType=this.mode;
    console.log('Segment changed', this.packageType);
  }

  addOnSupply() {
    this.service.addOn=!this.service.addOn
    console.log(this.service.addOn)
  }

  continue() {
    this.service.packageType=this.packageType
    console.log(this.service.packageType)
    this.router.navigateByUrl('/customer/select-cleaner')
  }


/*   navigate() {
    this.router.navigate(['/customer/choose-package'], {
      queryParams: {
        cleaningType: this.cleaningType,
        cleaningLocationAddress: this.cleaningaddress.address,
        cleaningLocationLattitude: this.cleaningaddress.lat,
        cleaningLocationLongitude:this.cleaningaddress.long
      },
    });
  } */

}
