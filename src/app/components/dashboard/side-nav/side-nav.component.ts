import { Component } from '@angular/core';
import { power } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  powerIcon = power;
}
