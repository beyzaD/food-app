import { forwardRef, Inject, Injectable, OnDestroy } from '@angular/core';
import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { Subscription } from 'rxjs';
import { AppConfig } from '../config/app-config.model';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root',
})
export class AppInsightsService implements OnDestroy {
  private routerSubscription!: Subscription;
  private appInsights!: ApplicationInsights;

  constructor(@Inject(forwardRef(() => ConfigService)) cs: ConfigService) {
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
}
