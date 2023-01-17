import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './login.component';
import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/guards';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    IonicModule,
    CommonModule,
    RouterModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
