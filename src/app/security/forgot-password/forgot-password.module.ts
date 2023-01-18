import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password.component';



@NgModule({
  declarations: [ForgotPasswordComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
  ]
})
export class ForgotPasswordModule { }
