import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConformationComponent } from './user-conformation.component';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserConformationComponent],
  imports: [
    CommonModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class UserConformationModule { }
