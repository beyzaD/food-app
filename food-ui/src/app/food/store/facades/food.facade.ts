import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FoodState } from '../reducers/food.reducer';
import { getAllFood, getSelected } from '../selectors/food.selectors';
import { tap } from 'rxjs/operators';
import { FoodItem } from '../../food.model';
import { AppInsightsService } from '../../../core/app-insights/app-insights.service';
import { addNewFood } from '../actions/food.actions';
import {
  loadFood,
  selectFood,
  deleteFood,
  addFood,
  updateFood,
} from '../actions/food.actions';

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
    return this.store
      .select(getAllFood)
      .pipe(tap((data) => console.log('data received from store', data)));
  }

  getSelected() {
    return this.store.select(getSelected);
  }

  selectFood(food: FoodItem) {
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
