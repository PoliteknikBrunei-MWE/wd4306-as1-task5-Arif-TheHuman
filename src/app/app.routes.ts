import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { PlaceDetailPage } from './places/place-detail/place-detail.page';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'offers',
    loadComponent: () =>
      import('./offers/offers.page').then((m) => m.OffersPage),
    canLoad: [AuthGuard]
    },
  {
    path: 'places',
    redirectTo: '/tabs/places',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage,
    canLoad: [AuthGuard],
    children: [
      {
        path: 'places',
        loadComponent: () => import('./places/places.page').then( m => m.PlacesPage),
      },
      {
        path: 'offers',
        loadComponent: () => import('./offers/offers.page').then( m => m.OffersPage)
      },
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'place-detail',
    loadComponent: () => import('./places/place-detail/place-detail.page').then( m => m.PlaceDetailPage),
    canLoad: [AuthGuard],
  },
  {
    path: 'place-detail/:place', 
    component: PlaceDetailPage,
    canLoad: [AuthGuard],
  },
  {
    path: 'place-detail',
    loadComponent: () =>
      import('./places/place-detail/place-detail.page').then(
        (m) => m.PlaceDetailPage
      ),
  },
];
