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

# Lesson learnt
1. always look for enumeration of users
