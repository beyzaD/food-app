export class AppConfig {
  apiUrl: string;
  applicationInsights: string;
  azure: AzureAppReg;
}

export class AzureAppReg {
  clientId: string;
  authority: string;
  validateAuthority: boolean;
  redirectUri: string;
  postLogoutRedirectUri: string;
  navigateToLoginRequestUrl: boolean;
}
