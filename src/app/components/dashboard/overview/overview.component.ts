import { Component } from '@angular/core';
import { CardSkeleton, RevenueChartSkeleton, LatestInvoicesSkeleton } from '../../skeleton-def/skeletons';
import { CardComponent } from '../card/card.component';
import { RevenueChartComponent } from '../revenue-chart/revenue-chart.component';
import { LatestInvoicesComponent } from '../latest-invoices/latest-invoices.component';
import { CardWrapperComponent } from '../card-wrapper/card-wrapper.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CardWrapperComponent, RevenueChartComponent, LatestInvoicesComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  cardSkeleton = CardSkeleton;
  revenueChartSkeleton = RevenueChartSkeleton;
  latestInvoicesSkeleton = LatestInvoicesSkeleton;
}
