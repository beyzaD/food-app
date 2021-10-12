import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { foodReducer, FoodState } from "../food/store/reducers/food.reducer";

export interface State {
  food: FoodState;
}

export const reducers: ActionReducerMap<State> = {
  food: foodReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
