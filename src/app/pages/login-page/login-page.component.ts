import { Component } from '@angular/core';
import { AcmeLogoComponent } from '../../components/acme-logo/acme-logo.component';
import { LoginFormComponent } from '../../components/login-page/login-form/login-form.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [AcmeLogoComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

}
