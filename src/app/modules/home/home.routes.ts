import { Routes } from '@angular/router';
import { adminGuard } from '@core/guards/admin.guard';
import { currentUser } from '@core/utils/currentUser';

export const homeRoutes: Routes = [
  {
    path: 'tracks',
    resolve: {
      currentUser,
    },
    loadChildren: () =>
      import('@modules/tracks/tracks.routing').then((m) => m.tracksRoutes),
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('@modules/favorites/favorites.routes').then(
        (m) => m.favoriteRoutes
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('@modules/history/history.routes').then((m) => m.historyRoutes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@modules/admin/admin.routes').then((m) => m.adminRoutes),
    canActivate: [adminGuard],
  },
  {
    path: '**',
    redirectTo: '/tracks',
  },
];
