import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public user: any = {
    username: '',
    password: '',
  };
  constructor(
    public router: Router,
    public loadingController: LoadingController,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required),
    });
  }

  
  onSubmit(){
    if(this.loginForm.valid){
      this.user.username = this.loginForm.value.email;
      this.user.password = this.loginForm.value.password;
      console.log(this.user);
      //console.log(this.loginForm.value.email);
      this.presentLoading().then(async () => {
        Auth.signIn(this.user).then((user) => {
          console.log(user);
          this.loadingController.dismiss().catch(() => {});
          Auth.currentAuthenticatedUser({
            bypassCache: false, // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
          }).then((data) => {
            // data.cu
            Auth.currentCredentials()
              .then((d) => console.log('data: ', d))
              .catch((e) => console.log('error: ', e));
            console.log(data);
            console.log(data.attributes);
  
            localStorage.setItem('currentUser', JSON.stringify(data.attributes));
            this.router.navigateByUrl('/tabs/tab1')
          });
        }).catch(() => {
          this.presentLoading("user not found!!!").then(() => {
            this.loadingController.dismiss().catch(() => {});
            this.router.navigateByUrl('/register');
          });
        });
      });
    }
  }

async presentLoading(message = 'please wait...'){
     const loading = await this.loadingController.create({
      message: message,
     }); 
     await loading.present();
  }
}
