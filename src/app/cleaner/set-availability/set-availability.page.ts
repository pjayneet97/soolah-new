import { Component, OnInit } from '@angular/core';
import { CalendarComponentOptions } from 'ion2-calendar';


@Component({
  selector: 'app-set-availability',
  templateUrl: './set-availability.page.html',
  styleUrls: ['./set-availability.page.scss'],
})
export class SetAvailabilityPage implements OnInit {

  dates=[]
  availableSlots=[
    {title:"11:00 - 12:00",from :11 , to:12}
  ]
  selectedSlots=[]
  type: 'string'; // 'string' | 'js-date' | 'moment' | 'time' | 'object'
  optionsMulti: CalendarComponentOptions = {
    pickMode: 'multi'
  };
  constructor() { }
 
  onDateChange($event) {
    console.log(new Date($event[0]._i));
    console.log(this.dates)
  }



  ngOnInit() {
    let d= new Date()
    console.log(d)
    d.setHours(10)
    d.setMinutes(0)
    d.setSeconds(0)
    console.log(d)
  }


  save(){
    let payload =[]
    this.dates.forEach(selectedDate=>{
      this.selectedSlots.forEach(slot=>{
        let fromTime = (new Date(selectedDate))
        fromTime.setHours(slot.from)
        // code to reset minit and seconds
        let toTime = (new Date(selectedDate))
        // code to reset minite and seconds
        toTime.setHours(slot.to)
        let tempobj={
          fromDate:"2021-06-27T11:24:52+05:30",
          toDate:"2021-06-27T11:24:52+05:30",
          fromTime: "2021-06-27T11:00:00+05:30",
          toTime: "2021-06-27T12:10:00+05:30"
        }
        payload.push(tempobj)
      })
    })
    console.log(payload)
  }

}
