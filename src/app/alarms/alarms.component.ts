import { Component, OnInit } from '@angular/core';

@Component({
  providers: [],
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css']
})
export class AlarmsComponent implements OnInit {

  public visibility = 'visible';

  constructor() { }

  ngOnInit() {
  }

}
