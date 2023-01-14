import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ScrollingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
