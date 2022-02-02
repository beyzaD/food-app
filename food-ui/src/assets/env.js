(function (window) {
  window["env"] = window["env"] || {};
  window["env"].authEnabled = false;
  window["env"].apiUrl = "https://localhost:5001/";
  window["env"].applicationInsights = "0b9bbe9b-5402-4e1e-9419-750e82391293";
  window["env"].signalREndpoint = "food-ep-staging.service.signalr.net";
  window["env"].clientId = "d23642f7-9ccf-4165-92e7-919f625a5acc";
  window["env"].authority = "https://login.microsoftonline.com/d92b247e-90e0-4469-a129-6a32866c0d0a/";
  window["env"].redirectUri = "http://localhost:4200/";
  window["env"].scopes = [
    ['https://graph.microsoft.com/v1.0/me', ['user.read']],
    [
      'https://localhost:5001/food',
      ['api://b509d389-361a-447b-afb2-97cc8131dad6/access_as_user'],
    ],
  ];
  window["env"].reactive = false;
})(this);
