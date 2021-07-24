import { Component, OnInit } from '@angular/core';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-set-availability-success',
  templateUrl: './set-availability-success.page.html',
  styleUrls: ['./set-availability-success.page.scss'],
})
export class SetAvailabilitySuccessPage implements OnInit {
  profile:any
  constructor(public cleanerService: CleanerService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.cleanerService.getProfile().subscribe(
      (res) => {
        this.profile = res['data'];
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
