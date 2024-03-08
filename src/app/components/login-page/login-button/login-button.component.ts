import { Component, Input } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { heroArrowRight } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-login-button',
  standalone: true,
  imports: [NgIcon,ButtonComponent],
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {
  arrowRightIcon = heroArrowRight;

  @Input()
  pending: boolean = false;

  constructor() { }
}
