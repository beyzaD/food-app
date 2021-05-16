# FoodApp Sample

A food tracking app implemented as Cloud Native App with Azure DevOps deployment and step by step [Installation Scripts](/az-cli/)

- Base Infrastructure: KeyVault, App Configuration Service, Application Insights.

  Import and execute `create-base.yml`

- FoodApi: .NET Core Api with Microsoft Graph integration

  Import and execute [ms-provision-build-test-deploy.yml](/az-pielines/ms-provision-build-test-deploy.yml)

- FoodUI: Angular UI

- FoodListSPFx: Simple SharePoint Framework WebPart displaying Data from Api using Persmissions from App Registration

This app is used and will be extended in the following classes: ngDev, ngAdv, AZ-400, AZ-204 and MS-600
