import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: string;

  constructor(private router: Router, public authService: AuthService ) { }

  ngOnInit() {
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

}
