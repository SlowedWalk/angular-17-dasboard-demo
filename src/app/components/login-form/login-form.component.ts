import { Component } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { heroAtSymbol, heroExclamationCircle, heroKey } from '@ng-icons/heroicons/outline';
import { LoginButtonComponent } from '../login-button/login-button.component';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [NgIcon, LoginButtonComponent],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  atSymbolIcon = heroAtSymbol;
  keyIcon = heroKey;
  exclamationCircleIcon = heroExclamationCircle;

  errorMessage: string | undefined = '';
  pending: boolean = false;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _router: Router
  ) { }

  loginForm = this._formBuilder.group({
    email: ['', Validators.required, Validators.email],
    password: ['',
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(20),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')]
  });

}
