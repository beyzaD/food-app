import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { FoodService } from "../../food.service";
import * as foodActions from "../actions/food.actions";

@Injectable()
export class FoodEffects {
  constructor(private actions$: Actions, private fs: FoodService) {}

  loadFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(foodActions.loadFood),
      mergeMap(() =>
        this.fs.getFood().pipe(
          map((food) => ({
            type: "[Food] load food success",
            food: food,
          })),
          catchError((err) => of(foodActions.loadFoodFailure({ err })))
        )
      )
    )
  );

  mailFood$ = createEffect(() =>
    this.actions$.pipe(
      ofType(foodActions.mailFood),
      mergeMap((action) =>
        this.fs.mailFood(action.food).pipe(
          map((food) => ({
            type: "[Food] log activity",
            data: food,
          })),
          catchError((err) => of(foodActions.loadFoodFailure({ err })))
        )
      )
    )
  );
}
