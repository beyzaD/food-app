import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(private client: HttpClient) {}

  getConfig() {
    return this.client.get<AppConfig>('assets/app-config.json');
  }
}
