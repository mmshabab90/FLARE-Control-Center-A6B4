import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AuthService } from '../services/security/auth.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {

  currentUser: firebase.User = null;
  displayName: string = null;

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getAuthState().subscribe(user => {
      if (user) {
        this.currentUser = user;
        this.displayName = user.displayName ? user.displayName : user.email ? user.email : user.uid;
        if (this.currentUser.isAnonymous) {
          this.displayName = 'Anonymous';
        }
      } else {
        this.currentUser = null;
        this.displayName = null;
      }
    });
  }

  isAuthenticated(): boolean {
    return this.currentUser !== null;
  }

  isAuthenticatedAsAdmin(): boolean {
    return this.currentUser && this.currentUser.displayName === 'admin';
  }

  loginWithEmailAndPassword(email: string, password: string): void {
    this.authService.loginWiithEmailAndPassword(email, password);
  }

  logOut(): void {
    if (window.confirm('Are you sure?')) {
      this.authService.logOut().then(res => {
        this.currentUser = null;
        this.displayName = null;
      });
      this.router.navigateByUrl('/login');
    }
  }

}
