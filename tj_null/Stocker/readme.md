nmap 10.129.94.29 
Starting Nmap 7.92 ( https://nmap.org ) at 2023-04-08 11:23 EDT
Nmap scan report for 10.129.94.29
Host is up (0.084s latency).
Not shown: 998 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

addint ot /etc/hosts

`gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u stocker.htb -t 50 --append-domain `
