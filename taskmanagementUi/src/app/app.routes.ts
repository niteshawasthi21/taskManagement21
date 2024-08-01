import { Routes } from '@angular/router';
import { LoginComponent } from './modules/user-auth/login/login.component';
import { RegisterComponent } from './modules/user-auth/register/register.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';

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
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
