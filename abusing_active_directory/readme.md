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


### Questions

1. from which pc did we start enumeration?

2. difference between group and OU

3. how to enumerate group memberships  of all user? or pwned




