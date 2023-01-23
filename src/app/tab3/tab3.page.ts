import { Component } from '@angular/core';
import { StatusBarInfo } from '@capacitor/status-bar';
import { Auth } from 'aws-amplify';
import { APIService, Restaurant } from '../API.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  menuitems = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 111, 1111, 11111, 111111, 1111111, 12345,
  ];
  items: any[] = [];
  rotateImg = 0;
  notification : Restaurant;
  //ds : Status;

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + this.images[this.rotateImg],
        imgSrc: this.getImgSrc(),
        avatarSrc: this.getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: this.lorem.substring(
          0,
          Math.random() * (this.lorem.length - 100) + 100
        ),
      });

      this.rotateImg++;
      if (this.rotateImg === this.images.length) {
        this.rotateImg = 0;
      }
    }
  }

  lorem =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  images = [
    'bandit',
    'batmobile',
    'blues-brothers',
    'bueller',
    'delorean',
    'eleanor',
    'general-lee',
    'ghostbusters',
    'knight-rider',
    'mirth-mobile',
  ];

  getImgSrc() {
    const src =
      'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
    this.rotateImg++;
    if (this.rotateImg === this.images.length) {
      this.rotateImg = 0;
    }
    return src;
  }

  async logout() {
    try {
      await Auth.signOut()
        .then(() => {
          localStorage.removeItem('currentUser');
          location.reload();
          console.log('user logout successfully...');
        })
        .catch(() => {
          console.log('user logout error...');
        });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }
}
