import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-hour',
  templateUrl: './show-hour.component.html',
  styleUrls: ['./show-hour.component.scss']
})
export class ShowHourComponent implements OnInit {

  time : Date = new Date()

  constructor() { }

  ngOnInit(): void {
  }

  

}
