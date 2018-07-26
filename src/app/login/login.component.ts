import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: '';
  password: '';
  confirmEmail: string;
  confirmPassword: string;

  error: string;

  constructor(public router: Router, public authService: AuthService ) { }

  ngOnInit() {
  }

  register(): void {
    if (this.email && this.password) {
      this.authService.register(this.email, this.password)
        .then(res => {
          this.router.navigate(['/alarms']);
          this.email = null;
          this.password = null;
        })
        .catch(err => {
          console.error(err);
          this.error = 'Unable to register! ' + err ;
        });
    } else {
      this.error = 'Please provide for all mandatory fields!';
    }
  }

  signInWithEmail() {
    this.authService.signInRegular(this.email, this.password)
       .then((res) => {
          this.router.navigate(['alarms']);
       })
       .catch((err) => console.log('error: ' + err));
  }

  // login(): void {
  //   if (this.email && this.password) {
  //     this.authService.loginWiithEmailAndPassword(this.email, this.password)
  //       .then(res => {
  //         this.router.navigateByUrl('/alarms');
  //       })
  //       .catch(err => {
  //         console.error(err);
  //         this.error = 'Unable to login! ' + err;
  //       });
  //   } else {
  //     this.error = 'Please provide all mandatory fields!';
  //   }
  // }

  login(): void {
    this.authService.loginWiithEmailAndPassword(this.email, this.password);
  }

  loginWithGoogle(): void {
    this.authService.loginWithGoogle();
  }

  toRegister() {
    this.router.navigateByUrl('/register');
  }

  registerClear(): void {
    this.email = null;
    this.password = null;
  }
}
