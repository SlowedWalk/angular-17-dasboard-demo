import { Component } from '@angular/core';
import { atSymbol, key } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  atSymbolIcon = atSymbol;
}
