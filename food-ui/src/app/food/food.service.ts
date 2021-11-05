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
    this.cs.config$.subscribe((cfg: AppConfig) => {
      this.api = cfg.apiUrl;
    });
  }

  getFood(): Observable<FoodItem[]> {
    return this.httpClient.get<FoodItem[]>(`${this.api}food`);
  }

  mailFood(item: FoodItem) {
    return this.httpClient.post<FoodItem>(`${this.api}mail`, item);
  }

  deleteFood(item: FoodItem) {
    return this.httpClient.delete<FoodItem>(`${this.api}food/${item.id}`);
  }

  saveFood(item: FoodItem): Observable<FoodItem> {
    return this.httpClient.post<FoodItem>(`${this.api}food`, item);
  }
}
