import { Component, OnInit } from '@angular/core';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  profile;
  constructor(public cleanerService: CleanerService) {}

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

  isProfileComplete() {
    if (this.profile?.firstName) {
      return true;
    } else {
      return false;
    }
  }
}
