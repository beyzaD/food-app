import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { FoodItem } from '../../food.model';
import {
  updateFoodFailure,
  updateFoodSuccess,
  addFoodFailure,
  addFoodSuccess,
  addNewFood,
  deleteFoodSuccess,
  deleteFoodFailure,
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
  on(selectFood, (state, action) => {
    return { ...state, selected: action.food };
  }),
  on(addNewFood, (state, action) => {
    return {
      ...state,
      selected: {
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
  on(addFoodSuccess, (state, action) => {
    return foodAdapter.addOne(action.food, {
      ...state,
      loading: false,
    });
  }),
  on(addFoodFailure, (state, action) => {
    return { ...state, loading: false };
  }),
  on(updateFoodSuccess, (state, action) => {
    //Remove hack
    return foodAdapter.updateOne(
      { id: action.food.id ?? 0, changes: action.food },
      {
        ...state,
        loading: false,
      }
    );
  }),
  on(updateFoodFailure, (state, action) => {
    return { ...state, loading: false };
  }),
  on(deleteFoodSuccess, (state, action) => {
    return foodAdapter.removeOne(action.food.id as number, {
      ...state,
      loading: false,
    });
  }),
  on(deleteFoodFailure, (state, action) => {
    return { ...state, loading: false };
  })
);
