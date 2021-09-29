rnd=$1
grp=foodapp-$rnd
loc=westeurope
aks=foodcluster-$rnd
ns=staging
ui=az-manifests/foodui.yaml
app=foodui

# Install kubectl command line client locally:
# az aks install-cli

# Create resource group:

az group create -n $grp -l $loc

# Create AKS cluster:

az aks create -g $grp -n $aks --node-count 1 --generate-ssh-keys 

# Get credentials for the Kubernets cluster:

az aks get-credentials -g $grp -n $aks

# Get a list of cluster nodes:

kubectl get nodes

# Create a namespace

kubectl create namespace $ns

# Apply the yaml - Make sure you uploaded foodui.yaml to CloudShell

kubectl apply -f $ui --namespace $ns