import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  sessionError = false;

  constructor(
    private _authService: AuthService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.minLength(6),
        Validators.maxLength(12),
      ]),
    });
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredential(email, password).subscribe((res) => {
      if (res.statusCode === 400) return (this.sessionError = true);

      this.sessionError = false;
      this.cookie.set('token', res.tokenSession, 1, '/');

      return this.router.navigate(['/', 'tracks']);
    });
  }
}
