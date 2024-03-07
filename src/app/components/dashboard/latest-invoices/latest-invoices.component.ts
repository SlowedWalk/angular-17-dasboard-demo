import { Component } from '@angular/core';
import { heroArrowPath } from '@ng-icons/heroicons/outline';
import { LatestInvoice } from '../../../models/models';
import { NgClass } from '@angular/common';
import { NgIcon } from '@ng-icons/core';

@Component({
  selector: 'app-latest-invoices',
  standalone: true,
  imports: [NgClass, NgIcon],
  templateUrl: './latest-invoices.component.html',
  styleUrl: './latest-invoices.component.css'
})
export class LatestInvoicesComponent {
  ArrowPathIcon = heroArrowPath;

  latestInvoices: LatestInvoice[] = [];
}
