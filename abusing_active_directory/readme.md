# Abusing Active directory

Centralized management to your computers in your environment.•Hierarchical structure that stores info about objects in your environment.

Active Directory Centralized database for everything in domain

Find domain controller
     User accounts > security principals
    



FInd domain admin accounts

Find domain admin hashes

Compromise domain

Compromise target servers

Acieve persistence

## Bonus mission

```
PS C:\Users\pwnd.user\Desktop\AD-Tools> Get-NetGPO | select displayname

displayname
-----------
Default Domain Policy
Default Domain Controllers Policy
DisableSecurity
DisableDeviceGuard
DisableFW
DisablePS
DisableUAC
ScreenSaverTimeOut
EnableWinRM1
```

GUID is a way to represent ACE

### Questions on AD

1. from which pc did we start enumeration?

2. difference between group and OU

3. how to enumerate group memberships  of all user? or pwned

# On Cloud Azure AD

Cloud based identity services which need not use the traditional kerberos and adds

### Azure Active directory domain services

Not an extension of the active directory

### Azure concepts

subscription would be have a resource group which will have multiple resources

### initial access

on prem pivoting
compromise ad vms
password spraying/guessing
Blobs
Phishing
App consent - user creates an app which tricks the user into gvining the credentials

### Azure AD connect

Tool for hybrid identity
Password hash synchronization using AD connect
It creates a user on prem and one user in cloud

Sync acounts
and Service account

both of them have generic all access

## DEV 1084

adding local user and elevating the local admin modus operandi

### AAD Internals

## Attack path on AD

### Enumerate
User enumeration

### Initial Access using password spay
### Defence bypass


conditional access policy

based on the location or user group membership the accessmight be challenge.

default security 

Multi factor authentication for admin
blocking legacy authentication

password spray

C:\Users\hacker\Desktop\Az-Tools> Invoke-MSOLSpray -UserList users.txt -Password "BH@Asia2023"
[*] There are 8 total users to spray.
[*] Now spraying Microsoft Online.
[*] Current date and time: 05/10/2023 03:08:38
[*] WARNING! The user administrator@alto.tel doesn't exist.
[*] WARNING! The user pwd.spray99@alto.tel doesn't exist.
[*] Got an error we haven't seen yet for user mobi.con@alto.tel
{"error":"interaction_required","error_description":"AADSTS53003: Access has been blocked by Conditional Access
policies. The access policy does not allow token issuance.\r\nTrace ID:
a2206c95-41f8-480a-88ce-912f73597b00\r\nCorrelation ID: e0847f70-2ab5-48bf-8e2b-ffb3287bb00b\r\nTimestamp:
2023-05-10 03:08:40Z","error_codes":[53003],"timestamp":"2023-05-10 03:08:40Z","trace_id":"a2206c95-41f8-480a-88ce-9
12f73597b00","correlation_id":"e0847f70-2ab5-48bf-8e2b-ffb3287bb00b","error_uri":"https://login.microsoft.com/error?
code=53003","suberror":"message_only"}
[*] SUCCESS! pwd.spray@alto.tel : BH@Asia2023
[*] SUCCESS! mfa.enabled@alto.tel : BH@Asia2023 - NOTE: The response indicates MFA (Microsoft) is in use.
PS C:\Users\hacker\Desktop\Az-Tools>

Azure AD roles

control access to azure AD resources such as users groups applicaitons using microoft GRAPH api

security principle
role defintion
scope

Every UPN will havea  security principal

Groups

security group
microsoft 365

HOw to assign a group

assigned 
dynamic user
dynamic device

Roles
Collection of permissions
manage access to azure AD resourcess

eg Golabal admin, golabal reader etc

scope directory

persistance

Any user can add a guest user.

all resources cna be access

azue resources roles - to manage access to the resources

owner, contributor, Reader

azure ad roles vs azure rback roles

azure management access to resources

security principal is different from service principla

service principal is use for creatnig an application the id created is service principal. API key.

Owner of the resource ->

service principal

login as service principla

# problem with az

you need to install module az

managed identities

privilege escalation

search VMs for keys, environment variables etc
apps
app functions
containers
dynamic memberships
azure resource manager
general misconfiguration


automation accounts - this is done by automation account using managed identity

Runbooks
task scheduler 

invoke web admin

runhooks are basically script that can be run on the vm

what are the access tokens

Identity can be assigned by system or user assigned

system assigned is tied to one resouces

user assigned can be used with multiple resources.

Azure nstance metadat service 
using this oyu can enumerate all the process

the vm can get access to all the manged identites on the vm

Access Policies : Determines what actions a Security Principal can do

not recommended by Microsoft

App service - HTTP based

if we get access to a web site we can query the http service and get a token

Container Lifecycle

docker image pull

anonymously
reader user
admin access

we will use the docker image
download the ocker image
and then find the credentials inside the docker then investigate the docker image and inspect he dockerfile which will contain a container secret.

docker comes as unauthorised

in image we will find the seret and then we can try and access the service principal

## What we did in Azure:
we invited ourselves from one of the account
valid usernames
password spraying
couple of users
one of the user protected
using msosweep we used andoid agent
then we are part of the dynamic group
automation accounts
inject our code and expose keyvault token
we token for managemetn and the key vault token

using key vault token we found that we have vm admin token

using the vm admin we have access to container image

we inspect the image and then we get the token using which we get the global admin account

Azure storage

container and Blobs
collection of blobs 
unstructured storage

Invoke-EnumerateAzureBlocks

Storage explorer

using sas the storage can be accessed

storage account




























