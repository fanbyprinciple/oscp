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
