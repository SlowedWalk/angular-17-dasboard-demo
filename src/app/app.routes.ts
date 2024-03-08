import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';
import { OverviewComponent } from './pages/dashboard/overview/overview.component';
import { LatestInvoicesComponent } from './pages/dashboard/latest-invoices/latest-invoices.component';
import { CustomersTableComponent } from './components/customer/customers-table/customers-table.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent },
  {
    path: 'dashboard',
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        component: OverviewComponent,
      },
      {
        path: 'invoices',
        component: LatestInvoicesComponent
      },
      {
        path: 'customers',
        component: CustomersTableComponent
      },
    ],
    // loadComponent: () => import('./shared/layout/root-layout/root-layout.component')
    //   .then(r => r.RootLayoutComponent),
  },
  { path: 'login', pathMatch: 'full', component: LoginPageComponent },
  { path: '**', pathMatch: 'full', component: LandingPageComponent },
];
