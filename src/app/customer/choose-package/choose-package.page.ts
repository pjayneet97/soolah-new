import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-choose-package',
  templateUrl: './choose-package.page.html',
  styleUrls: ['./choose-package.page.scss'],
})
export class ChoosePackagePage implements OnInit {
  mode = 'luxurious';
  optionalAddOn: boolean = false;
  newobj: any;
  oldobj:any={}

  constructor(
    public router: Router,
    public service: CustomerService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.oldobj = this.route.snapshot.queryParams;
    console.log( this.oldobj);

  }

  segmentChanged(ev: any) {
    this.mode = ev.detail.value;
    console.log('Segment changed', this.mode);
  }

  addOnSupply() {
    this.optionalAddOn = !this.optionalAddOn;
    console.log(this.optionalAddOn);
  }

  navigate() {
    this.newobj = {...this.oldobj,...{ optionalAddOn: this.optionalAddOn,packageType: this.mode  }};
    this.router.navigate(['/customer/select-cleaner'], {
      queryParams: this.newobj,
    });
  }
}
