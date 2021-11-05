import { Component } from "@angular/core";
import { of } from "rxjs";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor() {}

  title = "Passion for Food!";
  displayAuth$ = of(environment.authEnabled);
}
