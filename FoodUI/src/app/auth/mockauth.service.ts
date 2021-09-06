import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { SetToken } from "./store/actions/auth.actions";
import { AuthState } from "./store/reducers/auth.reducer";
import { fakeToken } from "./store/reducers/fake-token";

@Injectable({
  providedIn: "root",
})
export class FBAuthService {
  constructor(private store: Store<AuthState>) {}

  async createUser(email: string, password: string): Promise<any> {
    return await true;
  }

  async logOn(user, password) {
    this.store.dispatch(new SetToken(fakeToken));
    return await true;
  }

  async logOff() {
    this.store.dispatch(new SetToken(""));
    return await true;
  }
}
