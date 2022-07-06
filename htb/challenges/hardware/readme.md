# Debugging interfaces

https://shakuganz.com/2021/05/29/hackthebox-debugging-interface-write-up/

# the needle

found out that we we have a firmware image

admin is a user

```
~ ⌚ 13:23:55
$ nc 46.101.60.47 31887
��������
hwtheneedle-497220-f6fd94df7-sbzmt login: admin
admin
Password: admin

Login incorrect
hwtheneedle-497220-f6fd94df7-sbzmt login: root  
root
Login incorrect
hwtheneedle-497220-f6fd94df7-sbzmt login: admin
admin
Password: admin@123

Login incorrect

```

from here we need to use binwalk

https://forum.hackthebox.com/t/official-the-needle-discussion/4007/2

`binwalk -e firmware.bin`

in squashfs-root/usr/libexec we find

```
#!/bin/sh

[ "$(uci get system.@system[0].ttylogin)" == 1 ] || exec /bin/ash --login

exec /bin/login
                                                 
```

found this

```
SQUASHFS USERS:
After firstboot has been run, / will be jffs2 and /rom will be squashfs
(* except when in failsafe)
```

firstboot file

```
#!/bin/sh

/sbin/jffs2reset $@
~                     
```

/etc/passwd

```
root:x:0:0:root:/root:/bin/ash
daemon:*:1:1:daemon:/var:/bin/false
ftp:*:55:55:ftp:/home/ftp:/bin/false
network:*:101:101:network:/var:/bin/false
nobody:*:65534:65534:nobody:/var:/bin/false
dnsmasq:x:453:453:dnsmasq:/var/run/dnsmasq:/bin/false

```

found the telnet used to communicate

```
#!/bin/sh
sign=`cat /etc/config/sign`
TELNETD=`rgdb
TELNETD=`rgdb -g /sys/telnetd`
if [ "$TELNETD" = "true" ]; then
        echo "Start telnetd ..." > /dev/console
        if [ -f "/usr/sbin/login" ]; then
                lf=`rgbd -i -g /runtime/layout/lanif`
                telnetd -l "/usr/sbin/login" -u Device_Admin:$sign      -i $lf &
        else
                telnetd &
        fi
fi
~                                                                               
~                   
```

we need to find the $sign

since all environment variables are stored in some /proc/environ

```
$ find | grep proc   
./procd
./processes.lua
./procd.list
./procd.sh
./procd.control
./squashfs-root/usr/lib/opkg/info/procd.list
./squashfs-root/usr/lib/opkg/info/procd.control
./squashfs-root/usr/lib/lua/luci/model/cbi/admin_status/processes.lua
./squashfs-root/lib/functions/procd.sh
./squashfs-root/sbin/procd
./squashfs-root/proc

```


we find the cred at config files

```
qS6-X/n]u>fVfAt!

```

got the flag!

```
~/Downloads/_firmware.bin.extracted ⌚ 14:26:21
$ telnet 46.101.60.47 31887
Trying 46.101.60.47...
Connected to 46.101.60.47.
Escape character is '^]'.

hwtheneedle-497220-f6fd94df7-sbzmt login: Device_Admin
Password: 
hwtheneedle-497220-f6fd94df7-sbzmt:~$ ls
flag.txt
hwtheneedle-497220-f6fd94df7-sbzmt:~$ cat flag.txt 
HTB{4_hug3_blund3r_d289a1_!!}

```