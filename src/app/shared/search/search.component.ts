import { Component } from '@angular/core';
import { magnifyingGlass } from '@ng-icon/heroicons/outline';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  magnifyingGlassIcon = magnifyingGlass;
}
