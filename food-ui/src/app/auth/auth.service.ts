import { forwardRef, Inject, Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../core/config/config.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(
    @Inject(forwardRef(() => ConfigService)) private cs: ConfigService
  ) {
    this.isAuthenticated.next(this.getAuthState());
  }

  getAuthState() {
    return !environment.authEnabled;
  }

  isInitAndAuthenticated() {
    return combineLatest(
      [this.isAuthenticated, this.cs.cfgInit],
      (isAuth, isInit) => isAuth && isInit
    );
  }
}
