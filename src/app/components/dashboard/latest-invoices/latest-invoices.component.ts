import { Component } from '@angular/core';
import { arrowPath } from '@ng-icons/hero-icons/outline/';

@Component({
  selector: 'app-latest-invoices',
  standalone: true,
  imports: [],
  templateUrl: './latest-invoices.component.html',
  styleUrl: './latest-invoices.component.css'
})
export class LatestInvoicesComponent {
  ArrowPathIcon = arrowPath;
}
