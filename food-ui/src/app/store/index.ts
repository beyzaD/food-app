import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface State {
  // food: FoodState; -> from lazy loaded module
}

export const reducers: ActionReducerMap<State> = {
  // food: foodReducer; -> from lazy loaded module
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
