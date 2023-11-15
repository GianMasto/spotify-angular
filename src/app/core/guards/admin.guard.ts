import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const adminGuard = (): boolean => {
  const router = inject(Router);
  const cookie = inject(CookieService);
  const userRole = cookie.get('userRole');

  if (userRole !== 'admin') {
    router.navigate(['/']);
    return false;
  }
  return true;
};
