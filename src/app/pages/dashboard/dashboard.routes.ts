import { Routes } from "@angular/router";
import { CustomersTableComponent } from "../../components/customer/customers-table/customers-table.component";
import { LatestInvoicesComponent } from "./latest-invoices/latest-invoices.component";
import { OverviewComponent } from "./overview/overview.component";

export const DASHBOARD_ROUTES: Routes = [
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
]