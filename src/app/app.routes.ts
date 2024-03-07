import { Routes } from '@angular/router';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { LatestInvoicesComponent } from './components/dashboard/latest-invoices/latest-invoices.component';
import { CustomersTableComponent } from './components/customer/customers-table/customers-table.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  {
    path: '',
    component: RootLayoutComponent,
    children: [
      {
        path: 'dashboard',
        title: 'Dashboard',
        loadComponent: () => import('./components/dashboard/overview/overview.component').then(m => m.OverviewComponent)
      },
      {
        path: 'dashboard/invoices',
        title: 'Invoices',
        loadComponent: () => import('./components/dashboard/latest-invoices/latest-invoices.component').then(m => m.LatestInvoicesComponent)
      },
      {
        path: 'dashboard/customers',
        title: 'Customers',
        loadComponent: () => import('./components/customer/customers-table/customers-table.component').then(m => m.CustomersTableComponent)
      },
    ],
  },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
];
