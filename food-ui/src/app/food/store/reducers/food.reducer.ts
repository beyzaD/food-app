import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { FoodItem } from '../../food.model';
import { addNewFood, deleteFood } from '../actions/food.actions';
import {
  loadFood,
  loadFoodFailure,
  loadFoodSuccess,
  selectFood,
} from '../actions/food.actions';
export const foodFeatureKey = 'food';

export interface FoodState extends EntityState<FoodItem> {
  selected: FoodItem | null;
  loading: boolean;
}

export const foodAdapter: EntityAdapter<FoodItem> =
  createEntityAdapter<FoodItem>();

export const defaultFoodState: FoodState = {
  loading: false,
  ids: [],
  entities: {},
  selected: null,
};

export const initialState = foodAdapter.getInitialState(defaultFoodState);

export const foodReducer = createReducer(
  initialState,
  on(loadFood, (state, action) => {
    return { ...state };
  }),
  on(addNewFood, (state, action) => {
    return {
      ...state,
      selectFood: {
        id: 0,
        name: '',
        amount: 1,
        code: '',
        date: new Date(),
        pictureUrl: '',
      },
    };
  }),
  on(loadFoodSuccess, (state, action) => {
    return foodAdapter.setAll(action.food, {
      ...state,
      loading: false,
    });
  }),
  on(loadFoodFailure, (state, action) => {
    return { ...state, loading: false };
  }),
  on(deleteFood, (state, action) => {
    return foodAdapter.removeOne(action.food.id as number, {
      ...state,
      loading: false,
    });
  }),
  on(selectFood, (state, action) => {
    return { ...state, selected: action.food };
  })
);
