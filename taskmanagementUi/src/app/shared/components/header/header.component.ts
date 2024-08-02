import { PrimengComponentsModule } from '../primeng-components/primeng-components.module';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PrimengComponentsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  userOptions = [
    { label: 'Profile', value: 'profile' },
    { label: 'Settings', value: 'settings' },
    { label: 'Sign out', value: 'signout' }
  ];
  selectedOption: any;

  constructor() { }

}
