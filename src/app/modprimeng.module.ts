import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { SidebarModule } from 'primeng/sidebar';

const misModulos = [
  ButtonModule,
  CardModule,
  InputTextModule,
  SidebarModule,
  ToastModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    misModulos
  ],
  exports: [
    misModulos
  ]
})
export class ModprimengModule { }
