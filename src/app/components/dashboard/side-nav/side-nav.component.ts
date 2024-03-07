import { Component } from '@angular/core';
import { heroPower } from '@ng-icons/heroicons/outline';
import { AcmeLogoComponent } from '../../acme-logo/acme-logo.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { NgIcon } from '@ng-icons/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [NgIcon, AcmeLogoComponent, NavLinksComponent, RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  powerIcon = heroPower;
}
