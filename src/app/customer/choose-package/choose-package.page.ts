import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-package',
  templateUrl: './choose-package.page.html',
  styleUrls: ['./choose-package.page.scss'],
})
export class ChoosePackagePage implements OnInit {
mode='luxurious'

  constructor() { }

  ngOnInit() {
  }


  segmentChanged(ev: any) {
    this.mode=ev.detail.value;

    console.log('Segment changed', this.mode);
  }


}
