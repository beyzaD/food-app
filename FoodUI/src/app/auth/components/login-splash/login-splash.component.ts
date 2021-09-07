import { Component, OnInit } from "@angular/core";
import { AuthFacade } from "../../store/facades/auth.facade";

@Component({
  selector: "app-login-splash",
  templateUrl: "./login-splash.component.html",
  styleUrls: ["./login-splash.component.scss"],
})
export class LoginSplashComponent implements OnInit {
  constructor(private af: AuthFacade) {}

  entryPic = "/assets/images/burger.png";
  view = "entry";

  ngOnInit(): void {}

  logIn() {
    let lm = {
      email: "alexander.pajer@integrations.at",
      password: "abc",
      passwordRepeat: "abc",
      displayName: "Alexander Pajer",
    };
    this.af.logIn(lm);
  }
}
