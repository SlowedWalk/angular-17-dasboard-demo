import { Component } from '@angular/core';
import { SideNavComponent } from '../../../components/dashboard/side-nav/side-nav.component';

@Component({
  selector: 'app-root-layout',
  standalone: true,
  imports: [SideNavComponent],
  templateUrl: './root-layout.component.html',
  styleUrl: './root-layout.component.css'
})
export class RootLayoutComponent {

}
