import { Component } from '@angular/core';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { GlobalService } from 'src/service/global/global.service';
import { ForgotPasswordComponent } from '../security/forgot-password/forgot-password.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public authenticator: AuthenticatorService,
    public globalService: GlobalService
  ) {}


  async searchLocation(){
    try{
      const option={
        component: ForgotPasswordComponent,
         cssClass: 'address-modal',
          swipeToClose:true, 
         initialBreakpoint: 0.5,
         breakpoints: [0, 0.3, 1] 
      }
      const location = await this.globalService.createModal(option);
   }catch(e){
     console.log(e);
   }
  }

}
