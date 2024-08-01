import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

const primeNgComponents = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  CardModule,
  InputTextModule,
  AvatarModule,
  ToolbarModule,
  DropdownModule,
  MenubarModule,ButtonModule
];

@NgModule({
  declarations: [],
  imports: [primeNgComponents],
  exports: [primeNgComponents],
})
export class PrimengComponentsModule {}
