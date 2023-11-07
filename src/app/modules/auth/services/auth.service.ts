import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  sendCredential(email: string, password: string): void {
    console.log('sendCredentials', email, password);
  }
}
