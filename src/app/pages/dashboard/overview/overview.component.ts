import { Component } from '@angular/core';
import { LatestInvoicesComponent } from '../latest-invoices/latest-invoices.component';
import { CardWrapperComponent } from '../../../components/dashboard/card-wrapper/card-wrapper.component';
import { RevenueChartComponent } from '../../../components/dashboard/revenue-chart/revenue-chart.component';
import { CardSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton } from '../../../components/skeleton-def/skeletons';
import { RootLayoutComponent } from '../../../shared/layout/root-layout/root-layout.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CardWrapperComponent, RevenueChartComponent, LatestInvoicesComponent,RouterOutlet],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  cardSkeleton = CardSkeleton;
  revenueChartSkeleton = RevenueChartSkeleton;
  latestInvoicesSkeleton = LatestInvoicesSkeleton;
}
