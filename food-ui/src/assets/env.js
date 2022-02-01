(function (window) {
  window["env"] = window["env"] || {};
  window["env"].authEnabled = true;
  window["env"].apiUrl = "http://localhost:5001/food";
  window["env"].azure.applicationInsights = "eeb1065e-c49c-479a-94f5-9fcf77f106e4";
  window["env"].azure.signalREndpoint = "food-ep-dev.service.signalr.net";
  window["env"].appReg.clientId = "d23642f7-9ccf-4165-92e7-919f625a5acc";
  window["env"].appReg.authority = "https://login.microsoftonline.com/d92b247e-90e0-4469-a129-6a32866c0d0a/";
  window["env"].appReg.redirectUri = "http://localhost:4200/";
  window["env"].appReg.scopes = [
    ['https://graph.microsoft.com/v1.0/me', ['user.read']],
    [
      'https://localhost:5001/food',
      ['api://b509d389-361a-447b-afb2-97cc8131dad6/access_as_user'],
    ],
  ];
})(this);
