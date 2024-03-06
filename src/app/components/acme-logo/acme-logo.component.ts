import { Component } from '@angular/core';
import { globeAltIcon } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-acme-logo',
  standalone: true,
  imports: [],
  templateUrl: './acme-logo.component.html',
  styleUrl: './acme-logo.component.css'
})
export class AcmeLogoComponent {
  GlobeAltIcon = globeAltIcon;
}
