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

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.isSignedInStream = this.afAuth.authState
      .pipe(map<firebase.User, boolean>((user: firebase.User) => {
        return user != null;
      }));
  }

  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  register(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  loginWiithEmailAndPassword(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
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
