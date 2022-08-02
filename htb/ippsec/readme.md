# routerspace

sudo nmap -sC -sV -oA nmap/routerspace 10.10.11.148

# magic 

nmap - ssh and http

in the page saw error message and got to know that it was php website

in website view page source

dirbuster with wordlist an option -x for php

`gobuster dir -u http://10.10.10.185 -w /usr/share/wordlists/dirbuster... -x php > root.txt`


login.php

sql injection here

sql map

upload file  opyion

using linpea
msql dump complex suid in sysinfo

# optimum

uses an http 2.3 exploit 

we can view cached website from google itself

he used burpsuit to add null character and used nishang for a reverse shell

for priv es

looked at systeminfo

sherlock.ps1 - from empire

exploit suggester

# legacy

nmap scanning

nmap -sS -sV -A -p- -oN 10.129.227.181

https://medium.com/@simonsulyma/hack-the-box-legacy-penetration-testing-with-metasploit-ad6016757504

for smb cve

 nmap — script smb-vuln* -p 137,139,445 10.10.10.4

 we need kali machine for this.

 







