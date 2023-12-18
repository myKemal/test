import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab3Component } from './tab3.component';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: Tab3Component,
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab3Component]
})

export class Tab3PageModule {}
