import { createAction, props } from "@ngrx/store";
import { FoodItem } from "../../food.model";

export const loadFood = createAction("[Food] load food");

export const loadFoodSuccess = createAction(
  "[Food] load food success",
  props<{ food: FoodItem[] }>()
);

export const loadFoodFailure = createAction(
  "[Food] load food failure",
  props<{ err: Error }>()
);

export const selectFood = createAction(
  "[Food] select food",
  props<{ food: FoodItem }>()
);

export const mailFood = createAction(
  "[Food] mail food",
  props<{ food: FoodItem }>()
);

export const logActivity = createAction(
  "[Food] log activity",
  props<{ data: any }>()
);
