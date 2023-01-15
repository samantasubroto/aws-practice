import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ZenObservable } from 'zen-observable-ts';

import { APIService, Restaurant } from '../API.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  public createForm: FormGroup;
  public restaurant_types = ["veg", "non-veg"];

  public restaurants: Array<Restaurant> = [];

  private subscription: ZenObservable.Subscription | null = null;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required],
      isVeg: [''],
      rate: [''],
    });
  }
  ngOnInit(): void {
    this.api.ListRestaurants().then((event) => {
      this.restaurants = event.items as Restaurant[];
    }).catch((e) => {
      console.log('error loading data... ', e);
    });

    this.subscription = this.api.OnCreateRestaurantListener().subscribe(
      (event: any) => {
        const newRestaurant = event.value.data.onCreateRestaurant;
        this.restaurants = [newRestaurant, ...this.restaurants];
      }
    );
  }

  public onCreate(restaurant: Restaurant) {
    //console.log(restaurant);
    this.api
      .CreateRestaurant(restaurant)
      .then(() => {
        console.log('item created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating restaurant...', e);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }
}
