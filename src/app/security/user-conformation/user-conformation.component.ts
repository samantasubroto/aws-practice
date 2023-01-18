import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-user-conformation',
  template: `<ion-content>
  <form [formGroup]="confromationForm" (ngSubmit)="onSubmit()">
    <ion-item lines="full">
      <ion-label position="floating">OTP</ion-label>
      <ion-input type="number" formControlName="OTP"></ion-input>
    </ion-item>
  
    <ion-row>
      <ion-col>
        <ion-button type="submit" color="danger" expand="block">Conform</ion-button>
      </ion-col>
      <ion-col>
        <ion-button (click)="resend()" color="danger" expand="block">resend</ion-button>
      </ion-col>
    </ion-row>
    
  </form>
</ion-content>`
,
})
export class UserConformationComponent implements OnInit {
  public confromationForm: FormGroup;
  public username: string;
  constructor(private activatedRoute: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.params['username'];
    this.confromationForm = new FormGroup({
      OTP: new FormControl('', Validators.required),
    });
  }

  async onSubmit() {
    if (this.confromationForm.valid) {
      try {
        await Auth.confirmSignUp(
          this.username,
          JSON.stringify(this.confromationForm.value.OTP)
        ).then((user) => {
          this.router.navigateByUrl('/login');
        });
      } catch (error) {
        console.log('error confirming sign up', error);
      }
    }
  }

  async resend() {
    try {
      await Auth.resendSignUp(this.username);
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }
}
