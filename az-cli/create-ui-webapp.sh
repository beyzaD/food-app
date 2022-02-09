env=$1
grp=foodapp-$env
loc=westeurope
appPlan=foodplan-$env
app=foodui-$env

az group create -n $grp -l $loc

az appservice plan create -n $appPlan -g $grp --sku FREE

az webapp create -n $app -g $grp --plan $appPlan --runtime "aspnet|V4.8"

echo "Web Url: http://$app.azurewebsites.net"
