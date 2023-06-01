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

# for ctf players

https://www.youtube.com/watch?v=g_l_vKYyb5E

https://github.com/S1ckB0y1337/Active-Directory-Exploitation-Cheat-Sheet

https://medium.com/@hyphens443/attacking-domain-controllers-a45b9cb9651c

1) Roast — CyberSecLabs
2) Secret — CyberSecLabs
3) Active — Hack The Box
4) Monteverde — Hack The Box
5) Resolute — Hack The Box
6) Cascade — Hack The Box
7) Sauna — Hack The Box
8) Sizzle — Hack The Box

## atacking ports

Domain Controllers — common ports (TCP connections):

Port 53 — Domain Name System — DNS (which uses TCP connection for zone transfers, maintaining database on the server).
Port 88 — Kerberos. Its name relates to Greek Mythology and the hound of Hades — Cerberus. This multi-headed dog guarding the gate to the underworld is a good analogy when it comes to Kerberos. It is a default authentication service (and protocol) for Microsoft Windows domains, which bases on a secret key cryptography and utilizes the concept of tickets — which are used to prove the identity of an object.
Port 135 — Remote Procedure Call. Having that port open — technically - we are able to create a procedure, which will be executed on that computer remotely.
Ports 139, 445 — NetBIOS Session Service/Server Message Block. These are filesystem network protocols, which relate to network sharing of files, printers and other resources. Also known as CIFS — Common Internet File Sharing. SMB (as well as its free software implementation — Samba) has always been a good initial access point during security assessments, due to its open nature and multiple known vulnerabilities.
Port 389,636 — Lightweight Directory Access Protocol/LDAPS. It is an application protocol, which allows to interact with directory services. It stores information about objects — e.g. groups, users or applications.
Port 464 — Kerberos Password Change protocol.
Port 593 — HTTP Remote Procedure Call Endpoint Mapper.
Ports 3268, 3269 — LDAP Global Catalog. It allows to find objects in Active Directory domain tree.
Port 3389 — Remote Desktop Protocol. A protocol allowing to establish a remote, GUI session with a remote host.
Ports 5895,5896 — WinRM HTTP/WinRM HTTPS. These protocols are used to remotely manage a host, provided that we authenticate successfully (Kerberos is used for the authentication process). They allow us to use scripting objects, WinRM command line tool, or Windows Remote Shell CLI. WinRM can also use port 47001 if a listener is not created.
Port 9389 — Active Directory Web Services. This protocol relates to a set of rules regarding web service interface for AD Domains.
Additional Information about Ports that are used by Services utilizing UDP

Port 53 — DNS. UDP - connection-less protocol is mostly used by the DNS. The service uses UDP to serve responses to various queries of clients.
Port 69 — Trivial File Transfer Protocol — TFTP. This simple protocol uses UDP protocol to transfer files between a client and a server. TFTP does not provide authentication feature (due to the UDP’s nature).
Port 161 —Simple Network Management Protocol — SNMP. This protocol is used to manage nodes on the network. Windows Management Information Base is used in order to retrieve various information regarding the network’s entity. In such scenario, SNMPwalk tool can be used to query the system. It allows to gather names of user accounts, processes, running programs, TCP local ports, etc. To perform this enumeration, OIDs are required:

Software: 1.3.6.1.2.1.25.6.3.1.2
User Accounts: 1.3.6.1.4.1.77.1.2.25
TCP local ports: 1.3.6.1.2.1.6.13.1.3
System processes: 1.3.6.1.2.1.25.1.6.0
Running programs: 1.3.6.1.2.1.25.4.2.1.2
Storage Units: 1.3.6.1.2.1.25.2.3.1.4For example to enumerate TCP local ports:snmpwalk -c public -v1 [IP] 1.3.6.1.2.1.6.13.1.3

# Azure AD deployment

Introduction to Ms Azure: 

[url=https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiAp5vYs5z_AhVVSmwGHeBCDLAQFnoECAsQAQ&url=https%3A%2F%2Faddons.mozilla.org%2Fen-US%2Ffirefox%2Faddon%2Fabsolute-enable-right-click%2F&usg=AOvVaw1sSQTnSokDbDl0v3bOwQ6y]Absolute Enable Right Click & Copy - Firefox Browser Add-onsmozilla.orghttps://addons.mozilla.org › en-US › firefox › addon[/url]

links for login : 
https://labs.azure.com/virtualmachines
https://portal.azure.com/#home

hacker@123

In order to connect either we can start with Connect-AzAccount and then login with credentials 

```
PS C:\Users\hacker\Desktop\Az-Tools> Connect-AzureAD

Account                      Environment TenantId                             TenantDomain       AccountType
-------                      ----------- --------                             ------------       -----------
hacker525@hackersacademy.net AzureCloud  5b6c8028-c0c3-406c-9eac-f5446118784e hackersacademy.net User
```

```
PS C:\Users\hacker\Desktop\Az-Tools> Get-AzureADDirectoryRole

ObjectId                             DisplayName                                Description
--------                             -----------                                -----------
0975c30e-5b40-427b-9925-b7b07e0d607d Azure AD Joined Device Local Administrator Users assigned to this role are added to the local administrators group on Azure AD-joined devices.
3f633d2c-ae2d-409a-bd71-3dc9b297c54e Global Administrator                       Can manage all aspects of Azure AD and Microsoft services that use Azure AD identities.
6ece4747-c9eb-4a26-981d-8111262a3225 User Administrator                         Can manage all aspects of users and groups, including resetting passwords for limited admins.
99e37a42-1561-4677-92a5-57ad5818f805 Directory Readers                          Can read basic directory information. Commonly used to grant directory read access to applications and guests.

```

### subdomain enumeration 
usign AAD Internals

INvoke-EnumerateAzureSubDomains -Base altotel  -Verbose
IMport-Module '.\AzTools\MicroBurst-master\MicroBurst.psm1'

Invoke-enumerateAzureSubDomains -Basealtotel -Verbose

### user enumeration

On way is t use the endpoint api
login.miscrosoftonline.com/common/GetCredentialType

IfExists - 0 valid account otherwise invalid

### Initial access

Password spraying 

things to consider
using a single password against multiple accounts
Done against different API endpoints
workaround account lockout
Noisy!

API
https://login.microsoft.com/common/oauth2/token

Invoke-MSOLSpray -UserList users.txt -Password "BH@Asia2023"
 
```
PS C:\Users\hacker\Desktop\Az-Tools> invoke-MSOLSpray -User users.txt.txt -Password "BH@Asia2023"
[*] There are 7 total users to spray.
[*] Now spraying Microsoft Online.
[*] Current date and time: 06/01/2023 01:34:30
[*] Got an error we haven't seen yet for user login.user
{"error":"invalid_request","error_description":"AADSTS90019: No tenant-identifying information found in either the request or implied by any provided
credentials.\r\nTrace ID: 0d9575fa-8e32-44ea-a840-b5baa1e4fd00\r\nCorrelation ID: 7f6d012c-9a18-4921-b769-e95fc048fb5d\r\nTimestamp: 2023-06-01
01:34:30Z","error_codes":[90019],"timestamp":"2023-06-01 01:34:30Z","trace_id":"0d9575fa-8e32-44ea-a840-b5baa1e4fd00","correlation_id":"7f6d012c-9a18-4921-b7
69-e95fc048fb5d","error_uri":"https://login.microsoft.com/error?code=90019"}
[*] Got an error we haven't seen yet for user not.user
{"error":"invalid_request","error_description":"AADSTS90019: No tenant-identifying information found in either the request or implied by any provided
credentials.\r\nTrace ID: 6a70dbd3-ceef-4e6b-90c6-21888d02df00\r\nCorrelation ID: 4bf5eb70-040a-4bb0-b438-8272fd7aa365\r\nTimestamp: 2023-06-01
01:34:30Z","error_codes":[90019],"timestamp":"2023-06-01 01:34:30Z","trace_id":"6a70dbd3-ceef-4e6b-90c6-21888d02df00","correlation_id":"4bf5eb70-040a-4bb0-b4
38-8272fd7aa365","error_uri":"https://login.microsoft.com/error?code=90019"}
[*] Got an error we haven't seen yet for user admin
{"error":"invalid_request","error_description":"AADSTS90019: No tenant-identifying information found in either the request or implied by any provided
credentials.\r\nTrace ID: 07bd7c8c-9c58-4238-9a1d-1ad69300c500\r\nCorrelation ID: 36908805-ba21-46cb-a936-b151dbcdf2b3\r\nTimestamp: 2023-06-01
01:34:31Z","error_codes":[90019],"timestamp":"2023-06-01 01:34:31Z","trace_id":"07bd7c8c-9c58-4238-9a1d-1ad69300c500","correlation_id":"36908805-ba21-46cb-a9
36-b151dbcdf2b3","error_uri":"https://login.microsoft.com/error?code=90019"}
[*] Got an error we haven't seen yet for user pwd.spray
{"error":"invalid_request","error_description":"AADSTS90019: No tenant-identifying information found in either the request or implied by any provided
credentials.\r\nTrace ID: c23fc1bf-f03e-4ac6-8d15-f91f612efb00\r\nCorrelation ID: 42035489-25c0-4c63-8f2b-4e5de7717237\r\nTimestamp: 2023-06-01
01:34:31Z","error_codes":[90019],"timestamp":"2023-06-01 01:34:31Z","trace_id":"c23fc1bf-f03e-4ac6-8d15-f91f612efb00","correlation_id":"42035489-25c0-4c63-8f
2b-4e5de7717237","error_uri":"https://login.microsoft.com/error?code=90019"}
[*] Got an error we haven't seen yet for user pwd.spray@alto.tel
The response content cannot be parsed because the Internet Explorer engine is not available, or Internet Explorer's first-launch configuration is not
complete. Specify the UseBasicParsing parameter and try again.
[*] Got an error we haven't seen yet for user mfa.enabled
{"error":"invalid_request","error_description":"AADSTS90019: No tenant-identifying information found in either the request or implied by any provided
credentials.\r\nTrace ID: ef9599fd-c88c-4902-afb3-1ae83a9be000\r\nCorrelation ID: 5ee2836e-ed48-49cf-9c35-70f46378fe39\r\nTimestamp: 2023-06-01
01:34:33Z","error_codes":[90019],"timestamp":"2023-06-01 01:34:33Z","trace_id":"ef9599fd-c88c-4902-afb3-1ae83a9be000","correlation_id":"5ee2836e-ed48-49cf-9c
35-70f46378fe39","error_uri":"https://login.microsoft.com/error?code=90019"}
[*] SUCCESS! mfa.enabled@alto.tel : BH@Asia2023 - NOTE: The response indicates MFA (Microsoft) is in u
```

the userame should be of the format mfa.enabled@alto.tel

pwd.spray@alto.tel
mobi.alto.tel

how do you login




