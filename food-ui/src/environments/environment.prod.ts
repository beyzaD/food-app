export const environment = {
  production: true,
  authEnabled: true,
  apiUrl: 'https://localhost:5001/',
  azure: {
    applicationInsights: 'a196d36f-1782-4da4-8f95-a80585361df7',
    appReg: {
      clientId: 'fb9e23e2-7727-40a3-9515-7f53d90c6cab',
      authority:
        'https://login.microsoftonline.com/d92b247e-90e0-4469-a129-6a32866c0d0a/',
      redirectUri: 'http://localhost:4200/',
    },
  },
};
