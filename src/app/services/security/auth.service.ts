import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isSignedInStream: Observable<boolean>;

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.isSignedInStream = this.afAuth.authState
      .pipe(map<firebase.User, boolean>((user: firebase.User) => {
        return user != null;
      }));

      this.user = afAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
          } else {
            this.userDetails = null;
          }
        }
      );
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
        return false;
      } else {
        return true;
      }
  }

  signInRegular(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
     return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginWiithEmailAndPassword(email: string, password: string): void {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  loginWithGoogle(): void {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then((data) => {
      this.router.navigate(['/alarms']);
    });
  }

  logOut(): Promise<any> {
    return this.afAuth.auth.signOut();
  }
}
