import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers, heroArrowPath, heroCalendar, heroArrowLeft } from '@ng-icons/heroicons/outline';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, CommonModule, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [provideIcons({ heroUsers, heroArrowPath, heroCalendar, heroArrowLeft})]
})
export class AppComponent {
  title = 'angular-17-dashboard';

  constructor() {}
}
