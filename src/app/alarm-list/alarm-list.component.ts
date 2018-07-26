import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { AuthService } from '../services/security/auth.service';

@Component({
  providers: [],
  selector: 'app-alarm-list',
  templateUrl: './alarm-list.component.html',
  styleUrls: ['./alarm-list.component.css']
})
export class AlarmListComponent implements OnInit {

  public active = false;

  alarmContent = '';
  alarms: Observable<any[]>;
  chats: Observable<any[]>;
  currentUser: firebase.User = null;

  isActive() {
    this.active = true;
  }

  constructor(db: AngularFireDatabase, private authService: AuthService) {
    this.alarms = db.list('alarms').valueChanges();
    this.chats = db.list('chatsessions').valueChanges();
  }

  ngOnInit() {
    this.authService.getAuthState().subscribe(user => this.currentUser = user);
  }

}
