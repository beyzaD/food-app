import { Component } from "@angular/core";
import { AppInsightsService } from "./shared/app-insights/app-insights.service";
import { of } from "rxjs";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private appInsights: AppInsightsService) {}

  title = "Passion for Food!";
  displayAuth$ = of(environment.authEnabled);
}
