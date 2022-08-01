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


