Running all scans on 10.129.228.98

Host is likely running Linux
                                                                             
                                                                             
---------------------Starting Port Scan-----------------------               
                                                                             


PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http



---------------------Starting Script Scan-----------------------
                                                                             


PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.4p1 Debian 5+deb11u1 (protocol 2.0)
| ssh-hostkey: 
|   3072 845e13a8e31e20661d235550f63047d2 (RSA)
|   256 a2ef7b9665ce4161c467ee4e96c7c892 (ECDSA)
|_  256 33053dcd7ab798458239e7ae3c91a658 (ED25519)
80/tcp open  http    nginx 1.18.0
|_http-server-header: nginx/1.18.0
|_http-title: Did not follow redirect to http://precious.htb/
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel




---------------------Starting Full Scan------------------------
                                                                             


PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http


So we willl look at the port 80

tried inputing sitest on the net here but it did not work.

So finally ended up using the remote ip which did not work

