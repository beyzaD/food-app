import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppInsightsService } from "../app-insights/app-insights.service";

@Injectable({
  providedIn: "root",
})
export class ConfigService {
  constructor(private client: HttpClient, private ai: AppInsightsService) {}

  api: string = "https://localhost:5001/";

  init() {
    this.client
      .get("assets/app-config.json")
      .subscribe((val: { url: string }) => {
        this.api = val.url;
        this.ai.logEvent("FoodUI:API-URL", { url: val.url });
      });
  }
}
