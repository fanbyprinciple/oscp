```
└─$ nmap 10.10.11.213 
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-05 03:28 EDT
Nmap scan report for 10.10.11.213
Host is up (0.65s latency).
Not shown: 997 closed tcp ports (conn-refused)
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
3000/tcp open  ppp

```

└─$ dirb http://app.microblog.htb

-----------------
DIRB v2.22    
By The Dark Raver
-----------------

START_TIME: Wed Jul  5 03:31:06 2023
URL_BASE: http://app.microblog.htb/
WORDLIST_FILES: /usr/share/dirb/wordlists/common.txt

-----------------

GENERATED WORDS: 4612                                                          

---- Scanning URL: http://app.microblog.htb/ ----
==> DIRECTORY: http://app.microblog.htb/dashboard/                                                                
+ http://app.microblog.htb/index.php (CODE:200|SIZE:3976)                                                         
==> DIRECTORY: http://app.microblog.htb/login/                                                                    
==> DIRECTORY: http://app.microblog.htb/logout/                                                                   
==> DIRECTORY: http://app.microblog.htb/register/                                                                 
                                                                                                                  
---- Entering directory: http://app.microblog.htb/dashboard/ ----
+ http://app.microblog.htb/dashboard/index.php (CODE:302|SIZE:0)                                                  
                                                                                                                  
---- Entering directory: http://app.microblog.htb/login/ ----
+ http://app.microblog.htb/login/index.php (CODE:200|SIZE:2475)   

