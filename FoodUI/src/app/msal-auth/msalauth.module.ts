import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from "../../environments/environment";
import { CommonModule } from "@angular/common";
import { MsalLoginComponent } from "./msal-login/msal-login.component";

const comps = [MsalLoginComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
})
export class MSALAuthModule {}
