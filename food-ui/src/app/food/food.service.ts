import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodItem } from './food.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../core/config/config.service';
import { AppConfig } from '../core/config/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private api: string = '';

  constructor(private httpClient: HttpClient, private cs: ConfigService) {
    this.cs.getConfig().subscribe((cfg: AppConfig) => {
      this.api = cfg.apiUrl;
    });
  }

  getFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(`${this.api}food`);
  }

  deleteFood(id: number): Observable<any> {
    return this.httpClient.delete<FoodItem>(`${this.api}food/${id}`);
  }

  addFood(food: FoodItem): Observable<FoodItem> {
    return this.httpClient.post<FoodItem>(`${this.api}food`, food);
  }

  updateFood(food: FoodItem): Observable<FoodItem> {
    return this.httpClient.put<FoodItem>(`${this.api}food/${food.id}`, food);
  }
}
