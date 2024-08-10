import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginComponent } from './modules/user-auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';
import { TaskserviceService } from './shared/services/task-service/taskservice.service';

@Component({
  selector: 'app-root',
  standalone: true,
  providers:[TaskserviceService],
  imports: [CommonModule, RouterOutlet,ButtonModule,HeaderComponent,LoginComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'taskmanagementUi';

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
