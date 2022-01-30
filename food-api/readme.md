# .NET 6 FoodApi

[Configuration in ASP.NET Core - environment variables](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/configuration/?view=aspnetcore-6.0#environment-variables)

## Demo

### API configuration

`appsettings.json`:

```json
{
    "Azure": {
        "TenantId": "d92b247e-...",
        "ClientId": "b509d389-...",
        "Instance": "https://login.microsoftonline.com/",
        "cacheLocation": "localStorage",
        "ApplicationInsights": "da2aaf3f-...",
        "AppConfiguration": "",
        "KeyVault": ""
    },
    "App": {
        "AuthEnabled": false,
        "UseSQLite": true,
        "UseAppConfig": false,
        "ConnectionStrings": {
            "SQLiteDBConnection": "Data Source=./food.db",
            "SQLServerConnection": "Data Source=...;Initial Catalog=...;Persist Security Info=True;
                                    User ID=sa;Password='...'"}
    },
    "Logging": {
        "LogLevel": {
            "Default": "Information",
            "Microsoft": "Warning",
            "Microsoft.Hosting.Lifetime": "Information"
        }
    }    
}
```

Set local environment variables using `./az-util/set-env.azcli`:

### Debug on local Docker






### Deploy to Azure Container Instances

To Deploy to Azure Container Instances execute `./az-util/create-aci.azcli`:

```bash
env=dev
grp=food-app-$env
loc=westeurope
app=food-app-$env
img="arambazamba/foodapi-env"

az group create -n $grp -l $loc

az container create -g $grp -l $loc -n $app --image $img --cpu 1 --memory 1 --dns-name-label $app --port 80 --environment-variables 'FOODAPP_USE_ENV'='true' 
```