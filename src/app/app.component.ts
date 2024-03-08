import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgIconComponent } from '@ng-icons/core';
import { SideNavComponent } from './components/dashboard/side-nav/side-nav.component';
import { RootLayoutComponent } from './shared/layout/root-layout/root-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIconComponent, CommonModule, SideNavComponent, RootLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers: [provideIcons({ heroUsers, heroArrowPath, heroCalendar, heroArrowLeft})]
})
export class AppComponent {
  title = 'angular-17-dashboard';

  constructor() {}
}
