import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { PrimengComponentsModule } from '../../../shared/components/primeng-components/primeng-components.module';
import { UserAuthService } from '../authservice/user-auth.service';

@Component({
  selector: 'login-component',
  standalone: true,
  imports: [PrimengComponentsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[MessageService,UserAuthService]
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: UserAuthService,
    private router: Router,
    private msgService: MessageService
  ) {}

  get email() {
    return this.loginForm.controls['email'];
  }
  get password() {
    return this.loginForm.controls['password'];
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const userLogin = {...this.loginForm.value};
     // Make a POST request to the login endpoint with the user's credentials
      this.authService.login(userLogin).subscribe(
        response => {
          console.log(response);
          this.msgService.add({ severity: 'success', summary: 'Success', detail: 'LoggedIn successfully' });
          this.router.navigate(['dashboard']);
        },
        error => {
          this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Authentication failed' });
        }
      );
  }
}
