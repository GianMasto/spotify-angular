import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  sendCredential(email: string, password: string): Observable<any> {
    return this.http
      .post(`${this.URL}/auth/login`, {
        email,
        password,
      })
      .pipe(
        tap((res: any) =>
          this.cookie.set('token_service', res.tokenSession, 4, '/')
        )
      );
  }
}
