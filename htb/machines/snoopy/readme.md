sudo nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 10.129.150.83 -oG allPorts

nmap 10.10.11.212
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-14 02:29 EDT
Nmap scan report for 10.10.11.212
Host is up (0.80s latency).
Not shown: 997 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
53/tcp open  domain
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 69.73 seconds
                                                    
Attention: As we migrate DNS records to our new domain please be advised that our mailserver 'mail.snoopy.htb' is currently offline.

Error: Unable to load the "PHP Email Form" Library!

so php 
