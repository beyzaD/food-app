import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import { environment } from "../../environments/environment";
import { FoodState, FoodReducer } from "../food/store/reducers/food.reducer";
import { AuthState, AuthReducer } from "../auth/store/reducers/auth.reducer";

export interface State {
  food: FoodState;
  auth: AuthState;
}

export const reducers: ActionReducerMap<State> = {
  food: FoodReducer,
  auth: AuthReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
