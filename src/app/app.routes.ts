import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/search/search-page').then(m => m.SearchPage)
  },
  {
    path: 'history',
    loadComponent: () => import('./features/history/history-page').then(m => m.HistoryPage)
  },
  {
    path: 'alerts',
    loadComponent: () => import('./features/alerts/alerts-page').then(m => m.AlertsPage)
  },
  {
    path: 'favorites',
    loadComponent: () => import('./features/favorites/favorites-page').then(m => m.FavoritesPage)
  },
  {
    path: 'reports',
    loadComponent: () => import('./features/reports/reports-page').then(m => m.ReportsPage)
  }
];
