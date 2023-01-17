import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicRatingModule } from 'ionic-rating';
import { LoginModule } from './security/login/login.module';
import { RegisterModule } from './security/register/register.module';
import { AuthGuard } from './guards';
import { UserConformationComponent } from './security/user-conformation/user-conformation.component';
import { UserConformationModule } from './security/user-conformation/user-conformation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AmplifyAuthenticatorModule,
    ReactiveFormsModule,
    IonicRatingModule, 
    AppRoutingModule,
    RouterModule,
    RegisterModule,
    UserConformationModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
