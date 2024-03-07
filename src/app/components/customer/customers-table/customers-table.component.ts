import { Component, Input } from '@angular/core';
import { Customer, FormattedCustomersTable } from '../../../models/models';
import { SearchComponent } from '../../../shared/search/search.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [SearchComponent, NgOptimizedImage],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent {
  customer: Customer[] = [];

  constructor() { }

  // @Input()
  customers: FormattedCustomersTable[] = [];
}
