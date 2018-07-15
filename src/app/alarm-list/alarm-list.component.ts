import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  public active = false;

  isActive() {
    return this.active = true;
  }
  constructor(db: AngularFireDatabase) {
  }

  ngOnInit() {
  }

}
