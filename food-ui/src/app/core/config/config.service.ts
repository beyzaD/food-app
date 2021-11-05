import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from './app-config.model';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  config$ = this.client.get<AppConfig>('assets/app-config.json');

  constructor(private client: HttpClient) {}
}
