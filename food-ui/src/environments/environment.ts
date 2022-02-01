declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: false,
  authEnabled: window['env'].authEnabled,
  apiUrl: window['env'].apiUrl,
  azure: {
    applicationInsights: window['env'].azure.applicationInsights,
    signalREndpoint: window['env'].azure.signalREndpoint,
    appReg: {
      clientId: window['env'].appReg.clientId,
      authority: window['env'].appReg.authority,
      redirectUri: window['env'].appReg.redirectUri,
      scopes: window['env'].appReg.scopes,
    },
  },
};
