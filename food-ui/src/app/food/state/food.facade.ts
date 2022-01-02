import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoodState } from './food.reducer';
import { getAllFood, getSelected, getInitialized } from './food.selectors';
import { tap } from 'rxjs/operators';
import { FoodItem } from '../food.model';
import { AppInsightsService } from '../../core/app-insights/app-insights.service';
import { addNewFood } from './food.actions';
import {
  loadFood,
  selectFood,
  deleteFood,
  addFood,
  updateFood,
} from './food.actions';

@Injectable({
  providedIn: 'root',
})
export class FoodFacade {
  constructor(
    private store: Store<FoodState>,
    private ai: AppInsightsService
  ) {}

  initFood() {
    this.store.dispatch(loadFood());
  }

  getFood() {
    return this.store.select(getAllFood);
  }

  getSelected() {
    return this.store.select(getSelected);
  }

  selectFood(food: FoodItem | null) {
    this.store.dispatch(selectFood({ food }));
  }

  deleteFood(food: FoodItem) {
    this.ai.logEvent('Deleting', food);
    this.store.dispatch(deleteFood({ food }));
  }

  addFood(food: FoodItem) {
    this.ai.logEvent('Saving', food);
    this.store.dispatch(addFood({ food }));
  }

  updateFood(food: FoodItem) {
    this.ai.logEvent('Saving', food);
    this.store.dispatch(updateFood({ food }));
  }

  addNewFood() {
    this.store.dispatch(addNewFood());
  }
}