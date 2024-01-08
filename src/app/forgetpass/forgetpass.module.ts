import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpassComponent } from './forgetpass.component';
import {RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { IonicModule } from '@ionic/angular';

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
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ForgetpassModule { }
