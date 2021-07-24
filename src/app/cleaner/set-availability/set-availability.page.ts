import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarComponentOptions } from 'ion2-calendar';
import { CleanerService } from '../cleaner.service';

@Component({
  selector: 'app-set-availability',
  templateUrl: './set-availability.page.html',
  styleUrls: ['./set-availability.page.scss'],
})
export class SetAvailabilityPage implements OnInit {
  dates = [];
  availableSlots: any = [];
  selectedSlots = [];
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi',
  };
  constructor(public service: CleanerService, public router: Router) {}

  onDateChange($event) {
    /*  console.log(new Date($event[0]._i)); */
    console.log(this.dates);
  }

  ngOnInit() {
    this.availableSlots = [
      { title: '12:00 AM - 01:00 AM', from: 0, to: 1, isselected: false },
      { title: '01:00 AM - 02:00 AM', from: 1, to: 2, isselected: false },
      { title: '02:00 AM - 03:00 AM', from: 2, to: 3, isselected: false },
      { title: '03:00 AM - 04:00 AM', from: 3, to: 4, isselected: false },
      { title: '04:00 AM - 05:00 AM', from: 4, to: 5, isselected: false },
      { title: '05:00 AM - 06:00 AM', from: 5, to: 6, isselected: false },
      { title: '06:00 AM - 07:00 AM', from: 6, to: 7, isselected: false },
      { title: '07:00 AM - 08:00 AM', from: 7, to: 8, isselected: false },
      { title: '08:00 AM - 09:00 AM', from: 8, to: 9, isselected: false },
      { title: '09:00 AM - 10:00 AM', from: 9, to: 10, isselected: false },
      { title: '10:00 AM - 11:00 AM', from: 10, to: 11, isselected: false },
      { title: '11:00 AM - 12:00 PM', from: 11, to: 12, isselected: false },
      { title: '12:00 PM - 01:00 PM', from: 12, to: 13, isselected: false },
      { title: '01:00 PM - 02:00 PM', from: 13, to: 14, isselected: false },
      { title: '02:00 PM - 03:00 PM', from: 14, to: 15, isselected: false },
      { title: '03:00 PM - 04:00 PM', from: 15, to: 16, isselected: false },
      { title: '04:00 PM - 05:00 PM', from: 16, to: 17, isselected: false },
      { title: '05:00 PM - 06:00 PM', from: 17, to: 18, isselected: false },
      { title: '06:00 PM - 07:00 PM', from: 18, to: 19, isselected: false },
      { title: '07:00 PM - 08:00 PM', from: 19, to: 20, isselected: false },
      { title: '08:00 PM - 09:00 PM', from: 20, to: 21, isselected: false },
      { title: '09:00 PM - 10:00 PM', from: 21, to: 22, isselected: false },
      { title: '10:00 PM - 11:00 PM', from: 22, to: 23, isselected: false },
      { title: '11:00 PM - 12:00 AM', from: 23, to: 0, isselected: false },
    ];
    this.selectedSlots = [];
    this.dates = [];
  }

  ionViewDidEnter() {
    this.availableSlots = [
      { title: '12:00 AM - 01:00 AM', from: 0, to: 1, isselected: false },
      { title: '01:00 AM - 02:00 AM', from: 1, to: 2, isselected: false },
      { title: '02:00 AM - 03:00 AM', from: 2, to: 3, isselected: false },
      { title: '03:00 AM - 04:00 AM', from: 3, to: 4, isselected: false },
      { title: '04:00 AM - 05:00 AM', from: 4, to: 5, isselected: false },
      { title: '05:00 AM - 06:00 AM', from: 5, to: 6, isselected: false },
      { title: '06:00 AM - 07:00 AM', from: 6, to: 7, isselected: false },
      { title: '07:00 AM - 08:00 AM', from: 7, to: 8, isselected: false },
      { title: '08:00 AM - 09:00 AM', from: 8, to: 9, isselected: false },
      { title: '09:00 AM - 10:00 AM', from: 9, to: 10, isselected: false },
      { title: '10:00 AM - 11:00 AM', from: 10, to: 11, isselected: false },
      { title: '11:00 AM - 12:00 PM', from: 11, to: 12, isselected: false },
      { title: '12:00 PM - 01:00 PM', from: 12, to: 13, isselected: false },
      { title: '01:00 PM - 02:00 PM', from: 13, to: 14, isselected: false },
      { title: '02:00 PM - 03:00 PM', from: 14, to: 15, isselected: false },
      { title: '03:00 PM - 04:00 PM', from: 15, to: 16, isselected: false },
      { title: '04:00 PM - 05:00 PM', from: 16, to: 17, isselected: false },
      { title: '05:00 PM - 06:00 PM', from: 17, to: 18, isselected: false },
      { title: '06:00 PM - 07:00 PM', from: 18, to: 19, isselected: false },
      { title: '07:00 PM - 08:00 PM', from: 19, to: 20, isselected: false },
      { title: '08:00 PM - 09:00 PM', from: 20, to: 21, isselected: false },
      { title: '09:00 PM - 10:00 PM', from: 21, to: 22, isselected: false },
      { title: '10:00 PM - 11:00 PM', from: 22, to: 23, isselected: false },
      { title: '11:00 PM - 12:00 AM', from: 23, to: 0, isselected: false },
    ];
    this.selectedSlots = [];
    this.dates = [];
  }

  selectSlots(slot) {
    slot.isselected = !slot.isselected;
  }

  FinalSelectedSlots() {
    this.availableSlots.forEach((element) => {
      if (element.isselected) {
        this.selectedSlots.push(element);
      }
    });
  }

  save() {
    this.FinalSelectedSlots();
    let payload = [];
    this.dates.forEach((selectedDate) => {
      this.selectedSlots.forEach((slot) => {
        let fromTime = new Date(selectedDate);
        fromTime.setHours(slot.from);
        fromTime.setMinutes(0);
        fromTime.setSeconds(0);
        let toTime = new Date(selectedDate);
        toTime.setHours(slot.to);
        toTime.setMinutes(0);
        toTime.setSeconds(0);
        let tempobj = {
          fromDate: new Date(selectedDate).toISOString(),
          toDate: new Date(selectedDate).toISOString(),
          fromTime: fromTime.toISOString(),
          toTime: toTime.toISOString(),
        };
        payload.push(tempobj);
      });
    });
    this.service.setAvailability(payload).subscribe((Res) => {
      this.router.navigateByUrl('/cleaner/set-availability-success');
    });
    console.log(payload);
  }
}
