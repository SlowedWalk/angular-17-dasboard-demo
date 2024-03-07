import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';
import { NgIcon } from '@ng-icons/core';
import { heroDocumentDuplicate, heroHome, heroUserGroup } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [NgClass,NgIcon, RouterLink],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  public links: any[] = [];
  pathname!: string;

  constructor(private _router: Router) {
    _router.events.forEach((event) => {
      this.pathname = _router.url
    });
  }

  ngOnInit(): void {
    this.links = [
      {
        name: 'Home',
        icon: heroHome,
        href: '/dashboard'
      },
      {
        name: 'Invoices',
        icon: heroDocumentDuplicate,
        href: '/dashboard/invoices'
      },
      {
        name: 'Customers',
        icon: heroUserGroup,
        href: '/dashboard/customers'
      }
    ];
  }
}
