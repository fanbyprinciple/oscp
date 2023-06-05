website opensfirst up

nmap -sV -sC 10.129.166.248

host seems down error

Not shown: 968 closed tcp ports (conn-refused), 27 filtered tcp ports (no-response)
PORT    STATE SERVICE VERSION
22/tcp  open  ssh     OpenSSH 7.4p1 Debian 10+deb9u1 (protocol 2.0)
| ssh-hostkey: 
|_  2048 770084f578b9c7d354cf712e0d526d8b (RSA)
25/tcp  open  smtp?
|_smtp-commands: Couldn't establish connection on port 25
80/tcp  open  http    Apache httpd 2.4.25 ((Debian))
|_http-title: Home - Solid State Security
110/tcp open  pop3?
119/tcp open  nntp?
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 2107.62 seconds

website opens at 10.129.166.248

gobuster dir -u 10.129.166.248 -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt 

nmap -p- -T5 nmap/allports 
nmap -p 110 -sC -sV --script vuln 

nc solidstate.htb 4555

and you van do a  lot


