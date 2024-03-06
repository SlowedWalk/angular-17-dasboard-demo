import { Component } from '@angular/core';
import { documentDuplicate, home, userGroup } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css'
})
export class NavLinksComponent {
  public links: any[] = [] ;

  constructor() { }

  ngOnInit(): void {
    this.links = [
      {
        name: 'Home',
        icon: home,
        route: '/home'
      },
      {
        name: 'Users',
        icon: userGroup,
        route: '/users'
      },
      {
        name: 'Documents',
        icon: documentDuplicate,
        route: '/documents'
      }
    ];
   }

}
