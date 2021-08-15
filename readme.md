# FoodApp Sample

A food tracking app implemented as Cloud Native App deployed to Azure using Azure DevOps. [Installation Scripts](/az-cli/) and [yaml-pipelines](/az-pipelines/) are provided.

- Base Infrastructure: KeyVault, App Configuration Service, Application Insights

  Execute `create-base.azcli` using Azure CLI

- FoodApi: .NET Core Api with Microsoft Graph integration

  To Deploy to Azure AppService execute `ms-api-provision-build-test-deploy.yml`

- FoodUI: Simple Angular UI using NgRx.

  To Deploy to Azure Static Web App execute `ng-build-deploy-sw.yml`

  To Deploy to Azure Blob Storage with CDN execute `ng-build-deploy-blob.yml`

  To Deploy to App Service execute `ng-build-deploy-app-service.yml`

- FoodListSPFx: Simple SharePoint Framework WebPart displaying Data from Api using Persmissions from App Registration

  To Deploy to a M365 tenant using M365 CLI execute `ms-spfx-build-deploy`

This app is used as an integrations showcase for the classes ngDev, ngAdv, AZ-400, AZ-204 and MS-600. It contains several demos and will be updated to current patterns whenever my time permits

## Required Cloud Ressources

- [Github User Account](https://github.com/)
- [Azure Trial Subscription](https://azure.microsoft.com/en-us/free/)
- [Azure DevOps Account](https://dev.azure.com/)
- [Microsoft 365 Developer Tenant](https://developer.microsoft.com/en-us/microsoft-365/dev-program)

## Contributing

Feel free to contribute. Take a look at the [issues](https://github.com/arambazamba/FoodApp/issues) to know where to start. When contribute implement your changes / additions on a feature branch in your fork and issue a pull request after completion. An introduction video into forks and pull requests can be found here
