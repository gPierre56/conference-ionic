import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DetailsPresentateursPage } from './details-presentateurs.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsPresentateursPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DetailsPresentateursPage]
})
export class DetailsPresentateursPageModule {}
