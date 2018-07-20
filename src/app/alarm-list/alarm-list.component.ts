import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  providers: [],
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  public active = false;

  chatContent = '';
  chats: Observable<any[]>;

  isActive() {
    this.active = true;
  }

  constructor(db: AngularFireDatabase) {
    this.chats = db.list('messages').valueChanges();
  }

  ngOnInit() {
  }

}
