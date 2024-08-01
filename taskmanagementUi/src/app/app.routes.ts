import { Routes } from '@angular/router';
import { LoginComponent } from './modules/user-auth/login/login.component';
import { RegisterComponent } from './modules/user-auth/register/register.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
