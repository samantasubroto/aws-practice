import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    public router: Router,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (this.signupForm.valid) {
       await Auth.signUp({
        username: this.signupForm.value.email,
        password: this.signupForm.value.password,
        attributes: {
          phone_number: this.signupForm.value.phone, // optional - E.164 number convention
          // other custom attributes
        },
        autoSignIn: {
          // optional - enables auto sign in after user is confirmed
          enabled: false,
        },
      })
        .then(() => {
          //console.log(user);
          this.router.navigateByUrl('/user-conformation/'+this.signupForm.value.email);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
