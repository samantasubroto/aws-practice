import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
  ],
})
export class RegisterModule {}
