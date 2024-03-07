import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { heroGlobeAlt } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-acme-logo',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './acme-logo.component.html',
  styleUrl: './acme-logo.component.css'
})
export class AcmeLogoComponent {
  globeAltIcon = heroGlobeAlt;
}
