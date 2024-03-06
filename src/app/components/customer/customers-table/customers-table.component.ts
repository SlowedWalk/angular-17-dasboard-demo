import { Component } from '@angular/core';
import { FormattedCustomersTable } from '../../../models/models';

@Component({
  selector: 'app-customers-table',
  standalone: true,
  imports: [],
  templateUrl: './customers-table.component.html',
  styleUrl: './customers-table.component.css'
})
export class CustomersTableComponent {
  constructor() { }

  @Input()
  customers: FormattedCustomersTable[] = [];
}
