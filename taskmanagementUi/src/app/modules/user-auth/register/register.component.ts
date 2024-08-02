import { Component } from '@angular/core';
import { PrimengComponentsModule } from '../../../shared/components/primeng-components/primeng-components.module';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordMatchValidator } from '../../../shared/directives/password-match.directive';
import { MessageService } from 'primeng/api';
import { UserAuthService } from '../authservice/user-auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [PrimengComponentsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService,UserAuthService]
})
export class RegisterComponent {

  registerForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {
    validators: passwordMatchValidator
  });

  constructor(
    private fb: FormBuilder,
    private authService: UserAuthService,
    private messageService: MessageService,
    private router: Router
  ) { }

  get fullName() {
    return this.registerForm.controls['fullName'];
  }

  get email() {
    return this.registerForm.controls['email'];
  }

  get password() {
    return this.registerForm.controls['password'];
  }

  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }

  submitDetails() {
    if (this.registerForm.invalid) {
      return;
    }

    const postData = { ...this.registerForm.value };
    this.authService.registerUser(postData).subscribe(
      response => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Registered successfully' });
        this.router.navigate(['login']);          
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error?.error.message });
      }
    );
  }
}
