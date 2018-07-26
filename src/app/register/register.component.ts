import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fullName = '';
  email = '';
  username = '';
  password = '';
  confirmPassword = '';
  error = '';

  itemList: AngularFireList<any>;

  constructor(public db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) {
    this.itemList = db.list('users');
  }

  ngOnInit() {
  }

  // register() {
  //   if (this.password === this.confirmPassword) {
  //   this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
  //   .then(user => {
  //     console.log(this.email, this.password);
  //     localStorage.setItem('isLoggedIn', 'true');
  //     localStorage.setItem('email', this.afAuth.auth.currentUser.email);

  //     this.afAuth.authState.subscribe(auth => {
  //       if (auth) {
  //         localStorage.setItem('uid', auth.uid);
  //         this.itemList.push({
  //           emai: this.email,
  //           uid: auth.uid,
  //           fullName: this.fullName,
  //           username: this.username
  //         });
  //       }
  //     });
  //     this.router.navigate(['/alarms']);
  //   }).catch(error => {
  //     console.error(error);
  //   });
  //   } else {
  //     this.error = 'Please input data in all field and also make sure password and confirm password matches!';
  //     console.log(this.error);
  //   }
  // }

  myRegister() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
    .then(user => {
      console.log(this.email, this.password);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('email', this.afAuth.auth.currentUser.email );

      this.afAuth.authState.subscribe(auth => {
        if (auth) {
          localStorage.setItem('uid', auth.uid);
  this.itemList.push({
    email: this.email ,
    uid : auth.uid
  });

        }
      });

      this.router.navigate(['alarms']);
    }).catch(error => {
      console.error(error);
    });
  }

}
