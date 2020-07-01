import { Component, OnInit } from "@angular/core";
import { AppInsightsService } from "../shared/app-insights/app-insights.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  constructor(private appInsights: AppInsightsService) {}

  ngOnInit() {}
}
