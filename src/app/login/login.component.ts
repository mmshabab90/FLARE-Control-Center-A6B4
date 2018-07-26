import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string | null;
  password: string | null;
  confirmEmail: string;
  confirmPassword: string;

  error: string;

  constructor(public router: Router, public authService: AuthService ) { }

  ngOnInit() {
    this.email = null;
    this.password = null;
  }

  register(): void {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password)
        .then(res => {
          this.email = null;
          this.password = null;
          this.router.navigate(['/alarms']);
        })
        .catch(err => {
          console.error(err);
          this.error = 'Unable to register! User Already Exists.';
        });
    } else {
      this.error = 'Please provide for all mandatory fields!';
    }
  }

  login(): void {
    if (this.email && this.password) {
      this.authService.loginWiithEmailAndPassword(this.email, this.password)
        .then(res => {
          this.router.navigateByUrl('/alarms');
        })
        .catch(err => {
          console.error(err);
          this.error = 'Unable to login!';
        });
    } else {
      this.error = 'Please provide all mandatory fields!';
    }
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  registerClear(): void {
    this.email = null;
    this.password = null;
  }
}
