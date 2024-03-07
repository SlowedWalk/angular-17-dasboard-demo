import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { heroArrowRight } from '@ng-icons/heroicons/outline';
import { AcmeLogoComponent } from '../acme-logo/acme-logo.component';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgIcon, AcmeLogoComponent, NgOptimizedImage, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
  arrowRightIcon = heroArrowRight;
}
