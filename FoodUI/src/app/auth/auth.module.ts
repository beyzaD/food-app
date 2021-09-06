import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { MaterialModule } from "../material.module";
import { LogoutComponent } from "./components/logout/logout.component";
import { LoginSplashComponent } from "./components/login-splash/login-splash.component";
import { FlexLayoutModule } from "@angular/flex-layout";

const comps = [
  LoginComponent,
  RegisterComponent,
  LogoutComponent,
  LoginSplashComponent,
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class AuthModule {}
