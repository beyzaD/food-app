import { forwardRef, Inject, Injectable } from '@angular/core';
import {
  MsalInterceptorConfiguration,
  MsalGuardConfiguration,
} from '@azure/msal-angular';
import {
  BrowserCacheLocation,
  InteractionType,
  IPublicClientApplication,
  LogLevel,
  PublicClientApplication,
} from '@azure/msal-browser';
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

  //app module statics
  getMSALFactory(): IPublicClientApplication {
    let config = {
      auth: {
        clientId: 'fb9e23e2-7727-40a3-9515-7f53d90c6cab',
        authority:
          'https://login.microsoftonline.com/d92b247e-90e0-4469-a129-6a32866c0d0a',
        redirectUri: 'http://localhost:4200/',
      },
      cache: {
        cacheLocation: BrowserCacheLocation.LocalStorage,
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
      system: {
        loggerOptions: {
          loggerCallback,
          logLevel: LogLevel.Info,
          piiLoggingEnabled: false,
        },
      },
    };
    return new PublicClientApplication(config);
  }
}

//msal utils
export const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

export const loggerCallback = (logLevel: LogLevel, message: string) => {
  console.log(message);
};

export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', [
    'user.read',
  ]);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap,
  };
}

export function MSALGuardConfigFactory(): MsalGuardConfiguration {
  return {
    interactionType: InteractionType.Redirect,
    authRequest: {
      scopes: ['user.read'],
    },
  };
}
