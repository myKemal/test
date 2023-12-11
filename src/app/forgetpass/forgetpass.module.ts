import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpassComponent } from './forgetpass.component';
import {RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ForgetpassComponent,
  }
];

@NgModule({
  declarations: [ForgetpassComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgetpassModule { }
