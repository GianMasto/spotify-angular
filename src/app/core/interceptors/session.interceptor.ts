import { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const authInterceptor = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const cookies = inject(CookieService);
  try {
    const token = cookies.get('token');
    let newRequest = request.clone({
      setHeaders: {
        authorization: `Bearer ${token}`,
      },
    });

    return next(newRequest);
  } catch (error) {
    return next(request);
  }
};
