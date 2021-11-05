import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    FoodComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule
  ]
})
export class FoodModule { }
