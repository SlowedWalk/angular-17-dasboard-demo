import { Component } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { Inject } from '@angular/core';
import { generateYAxis } from '../../../utils';
import { Revenue } from '../../../models/models';
import { calendar } from '@ng-icons/hero-icons/outline/';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.css'
})
export class RevenueChartComponent {
  CalendarIcon = calendar;
  constructor(@Inject() private appService: AppService) { }

  public chartHeight = 350;


  public revenue: Revenue = this.appService.fetchRevenue();

  // public { yAxisLabels, topLabel } = generateYAxis(revenue);

}
