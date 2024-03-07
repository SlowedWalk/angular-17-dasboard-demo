import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { generateYAxis } from '../../../utils';
import { heroCalendar } from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { NgIcon } from '@ng-icons/core';
import { Revenue } from '../../../models/models';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [CommonModule, NgIcon],
  templateUrl: './revenue-chart.component.html',
  styleUrl: './revenue-chart.component.css',
})
export class RevenueChartComponent implements OnInit {
  calendarIcon = heroCalendar;

  public revenue: Revenue[] = [];

  constructor(private _appService: AppService) {}

  public chartHeight = 350;

  public yAxisLabelsTopLabel = generateYAxis(this.revenue);

  ngOnInit(): void {
    this._appService.fetchRevenue().subscribe({
      next: (revenue) => {
        this.revenue.push(revenue);
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
