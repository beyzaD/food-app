import { forwardRef, Inject, Injectable, OnDestroy } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { ConfigService } from '../config/config.service';
import { AppConfig } from '../config/app-config.model';

@Injectable({
  providedIn: 'root',
})
export class AppInsightsService implements OnDestroy {
  private routerSubscription!: Subscription;
  private appInsights!: ApplicationInsights;

  constructor(
    private router: Router,
    @Inject(forwardRef(() => ConfigService)) cs: ConfigService
  ) {
    cs.getConfig().subscribe((cfg: AppConfig) => {
      if (cfg != null) {
        console.log('setting ai key:' + cfg.applicationInsights);
        this.appInsights = new ApplicationInsights({
          config: {
            instrumentationKey: cfg.applicationInsights,
            enableAutoRouteTracking: true, // option to log all route changes
          },
        });

        this.appInsights.loadAppInsights();
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  setUserId(userId: string) {
    this.appInsights.setAuthenticatedUserContext(userId);
  }

  clearUserId() {
    this.appInsights.clearAuthenticatedUserContext();
  }

  logPageView(name?: string, uri?: string) {
    this.appInsights.trackPageView({ name, uri });
  }

  logEvent(name: string, properties?: { [key: string]: any }) {
    this.appInsights.trackEvent({ name: name }, properties);
  }

  logMetric(
    name: string,
    average: number,
    properties?: { [key: string]: any }
  ) {
    this.appInsights.trackMetric({ name: name, average: average }, properties);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({
      exception: exception,
      severityLevel: severityLevel,
    });
  }

  logTrace(message: string, properties?: { [key: string]: any }) {
    this.appInsights.trackTrace({ message: message }, properties);
  }

  //routing

  private getActivatedComponent(snapshot: ActivatedRouteSnapshot): any {
    if (snapshot.firstChild) {
      return this.getActivatedComponent(snapshot.firstChild);
    }
    return snapshot.component;
  }

  private getRouteTemplate(snapshot: ActivatedRouteSnapshot): string {
    let path = '';
    if (snapshot.routeConfig) {
      path += snapshot.routeConfig.path;
    }
    if (snapshot.firstChild) {
      return path + this.getRouteTemplate(snapshot.firstChild);
    }
    return path;
  }
}
