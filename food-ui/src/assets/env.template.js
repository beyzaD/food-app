(function (window) {
  window["env"] = window["env"] || {};
  window["env"].authEnabled = "${authEnabled}";
  window["env"].apiUrl = "${apiUrl}";
  window["env"].azure.applicationInsights = "${applicationInsights}";
  window["env"].azure.signalREndpoint = "${signalREndpoint}";
  window["env"].appReg.clientId = "${clientId}";
  window["env"].appReg.authority = "${authority}";
  window["env"].appReg.redirectUri = "${redirectUri}";
  window["env"].appReg.scopes = "${scopes}";
})(this);
