import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const authRoutes: Routes = [
  {
    path: '**',
    redirectTo: '/auth/login',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
];
