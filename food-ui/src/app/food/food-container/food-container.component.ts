import { Component, OnInit } from '@angular/core';
import { FoodFacade } from '../store/facades/food.facade';
import { Observable } from 'rxjs';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  food = this.ff.getFood();

  constructor(public ff: FoodFacade) {}

  ngOnInit(): void {}
}
