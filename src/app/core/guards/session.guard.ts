import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const sessionGuard = (): boolean => {
  const cookieService = inject(CookieService);
  const router = inject(Router);
  const token: boolean = cookieService.check('token');

  try {
    if (!token) {
      router.navigate(['/', 'auth']);
      return false;
    }
    return token;
  } catch (error) {
    return false;
  }
};
