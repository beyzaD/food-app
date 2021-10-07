import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-msal-login",
  templateUrl: "./msal-login.component.html",
  styleUrls: ["./msal-login.component.scss"],
})
export class MsalLoginComponent implements OnInit {
  entryPic = "/assets/images/burger.png";

  constructor() {}

  ngOnInit(): void {}
}
