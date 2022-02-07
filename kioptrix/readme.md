# Kioptrix Level 1 (#1)

https://www.vulnhub.com/entry/kioptrix-level-1-1,22/

Before anything try to identify the machine ip, start with netdiscover

`netdiscover`

Tried to connect it in the same network. 

```
kali@kali:~$ nmap -sn 172.16.25.129/24
Starting Nmap 7.80 ( https://nmap.org ) at 2022-01-31 23:02 EST
Nmap scan report for 172.16.25.1
Host is up (0.0013s latency).
Nmap scan report for 172.16.25.2
Host is up (0.00097s latency).
Nmap scan report for 172.16.25.129
Host is up (0.00031s latency).
Nmap done: 256 IP addresses (3 hosts up) scanned in 2.54 seconds

```

Now it could be `172.16.25.2` or `172.16.25.1` or `172.16.25.129`

We need further enumeration.
Lets try nmap scan. 

### Learning about nmap
https://www.varonis.com/blog/nmap-commands - outdated?

ping scan
```
kali@kali:~$ nmap -sp 172.16.25.129/24
Starting Nmap 7.80 ( https://nmap.org ) at 2022-01-31 23:38 EST
Could not parse as a prefix nor find as a vendor substring the given --spoof-mac argument: 172.16.25.129/24.  If you are giving hex digits, there must be an even number of them.
QUITTING!
```

https://hackertarget.com/nmap-tutorial/

identifying service and scanning (this will take a looong time)
`nmap -sV -p 1-65535 192.168.1.1/24`

zenmap for gui

<h1>IMPORTANT DICUSSION ABOUT HANDSHAKES</h1>

<h3>Filtered ports or when the Firewall drops a packet</h3>
The job of a firewall is to protect a system from unwanted packets that could harm the system. In this simple example, the port scan is conducted against port 81, as there is no service running on this port, using a firewall to block access to it is best practice.

![](https://hackertarget.com/wireshark-nmap-filtered-port.png)

A filtered port result from Nmap indicates that the port has not responded at all. The SYN packet has simply been dropped by the firewall. See the following Wireshark packet capture that shows the initial packet with no response.

<h3>Closed ports or when the Firewall fails</h3>
In this case, closed ports most commonly indicate there is no service running on the port, but the firewall has allowed the connection to go through to the server. It can also mean no firewall is present at all.

Note that while we are discussing the most common scenarios, it is possible to configure a firewall to reject packets rather than drop. This would mean packets hitting the firewall would be seen as closed (the firewall is responding with RST ACK).

![](https://hackertarget.com/wireshark-nmap-closed-port.png)

Pictured above is a case where a firewall rule allows the packet on port 81 through even though there is no service listening on the port. This is most likely because the firewall is poorly configured.
anook2


<h3>An Open Port (service) is found </h3>
Open Ports are usually what you are looking for when kicking off Nmap scans. The open service could be a publicly accessible service that is, by its nature, supposed to be accessible. It may be a back-end service that does not need to be publicly accessible, and therefore should be blocked by a firewall.

![](https://hackertarget.com/wireshark-nmap-open-port.png)

An interesting thing to notice in the wireshark capture is the RST packet sent after accepting the SYN ACK from the web server. The RST is sent by Nmap as the state of the port (open) has been determined by the SYN ACK if we were looking for further information such as the HTTP service version or to get the page, the RST would not be sent. A full connection would be established.



https://www.sciencedirect.com/topics/computer-science/version-detection#:~:text=Version%20detection%20uses%20a%20variety,services%2C%20applications%2C%20and%20versions.

### Service scan

```
kali@kali:~$ nmap -sV 172.16.25.2
Starting Nmap 7.80 ( https://nmap.org ) at 2022-02-01 00:23 EST
Nmap scan report for 172.16.25.2
Host is up (0.00049s latency).
All 1000 scanned ports on 172.16.25.2 are closed

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 0.57 seconds
kali@kali:~$ nmap -sV 172.16.25.1
Starting Nmap 7.80 ( https://nmap.org ) at 2022-02-01 00:24 EST
Nmap scan report for 172.16.25.1
Host is up (0.00063s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE         VERSION
22/tcp   open  ssh             OpenSSH 8.4p1 Debian 5 (protocol 2.0)
902/tcp  open  ssl/vmware-auth VMware Authentication Daemon 1.10 (Uses VNC, SOAP)
8089/tcp open  ssl/http        Splunkd httpd
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
```

172.16.25.1 - is up. 

### version intensity scan
```
kali@kali:~$ nmap -sV 172.16.25.1 --version-all
Starting Nmap 7.80 ( https://nmap.org ) at 2022-02-01 00:36 EST
Nmap scan report for 172.16.25.1
Host is up (0.00059s latency).
Not shown: 997 closed ports
PORT     STATE SERVICE         VERSION
22/tcp   open  ssh             OpenSSH 8.4p1 Debian 5 (protocol 2.0)
902/tcp  open  ssl/vmware-auth VMware Authentication Daemon 1.10 (Uses VNC, SOAP)
8089/tcp open  ssl/http        Splunkd httpd
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 37.71 seconds
```

since we saw that http is open lets try and access the http page.

### checking for default gateway

```
traceroute to 8.8.8.8 (8.8.8.8), 30 hops max, 60 byte packets
 1  172.16.25.2 (172.16.25.2)  0.533 ms  0.273 ms  0.423 ms
 2  10.10.10.1 (10.10.10.1)  1.188 ms  1.026 ms  0.900 ms
 3  * * *
 4  121.240.2.133.static-delhi.net.in (121.240.2.133)  25.004 ms  24.887 ms  24.732 ms
 5  14.140.113.238.static-Delhi-vsnl.net.in (14.140.113.238)  24.606 ms  24.476 ms  24.352 ms
 6  108.170.251.113 (108.170.251.113)  26.657 ms 74.125.243.97 (74.125.243.97)  26.347 ms  26.050 ms
 7  142.251.76.169 (142.251.76.169)  25.821 ms 172.253.67.91 (172.253.67.91)  26.037 ms 142.251.54.63 (142.251.54.63)  24.636 ms
 8  dns.google (8.8.8.8)  24.421 ms  24.147 ms  24.560 ms
kali@kali:~$ ip route | grep default
default via 172.16.25.2 dev eth0 proto dhcp metric 100
```

Nothing at 172.16.25.1:8089

### result of detailed scan

```
oot@kali:/home/kali# nmap -p- -sV -sS -T4 -A -oX Kioptrixlvl1.xml 172.16.25.1
Starting Nmap 7.80 ( https://nmap.org ) at 2022-02-01 01:12 EST
Nmap scan report for 172.16.25.1
Host is up (0.00032s latency).
Not shown: 65532 closed ports
PORT     STATE SERVICE         VERSION
22/tcp   open  ssh             OpenSSH 8.4p1 Debian 5 (protocol 2.0)
902/tcp  open  ssl/vmware-auth VMware Authentication Daemon 1.10 (Uses VNC, SOAP)
8089/tcp open  ssl/http        Splunkd httpd
| http-robots.txt: 1 disallowed entry 
|_/
|_http-server-header: Splunkd
|_http-title: splunkd
| ssl-cert: Subject: commonName=SplunkServerDefaultCert/organizationName=SplunkUser
| Not valid before: 2020-07-13T05:25:36
|_Not valid after:  2023-07-13T05:25:36
MAC Address: 00:50:56:C0:00:08 (VMware)
No exact OS matches for host (If you know what OS is running on it, see https://nmap.org/submit/ ).
TCP/IP fingerprint:
OS:SCAN(V=7.80%E=4%D=2/1%OT=22%CT=1%CU=32141%PV=Y%DS=1%DC=D%G=Y%M=005056%TM
OS:=61F8CFDA%P=x86_64-pc-linux-gnu)SEQ(SP=107%GCD=1%ISR=10C%TI=Z%CI=Z%II=I%
OS:TS=A)OPS(O1=M5B4ST11NW7%O2=M5B4ST11NW7%O3=M5B4NNT11NW7%O4=M5B4ST11NW7%O5
OS:=M5B4ST11NW7%O6=M5B4ST11)WIN(W1=FE88%W2=FE88%W3=FE88%W4=FE88%W5=FE88%W6=
OS:FE88)ECN(R=Y%DF=Y%T=40%W=FAF0%O=M5B4NNSNW7%CC=Y%Q=)T1(R=Y%DF=Y%T=40%S=O%
OS:A=S+%F=AS%RD=0%Q=)T2(R=N)T3(R=N)T4(R=Y%DF=Y%T=40%W=0%S=A%A=Z%F=R%O=%RD=0
OS:%Q=)T5(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)T6(R=Y%DF=Y%T=40%W=0%S
OS:=A%A=Z%F=R%O=%RD=0%Q=)T7(R=Y%DF=Y%T=40%W=0%S=Z%A=S+%F=AR%O=%RD=0%Q=)U1(R
OS:=Y%DF=N%T=40%IPL=164%UN=0%RIPL=G%RID=G%RIPCK=G%RUCK=G%RUD=G)IE(R=Y%DFI=N
OS:%T=40%CD=S)

Network Distance: 1 hop
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel

TRACEROUTE
HOP RTT     ADDRESS
1   0.32 ms 172.16.25.1

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 112.28 seconds
```

### ssh is not working

```
kali@kali:~$ ssh 172.16.25.1
The authenticity of host '172.16.25.1 (172.16.25.1)' can't be established.
ECDSA key fingerprint is SHA256:S0FnVfkksusu+F71zzwQCY9ZoXv1/MB5ddwqN0ZawwE.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '172.16.25.1' (ECDSA) to the list of known hosts.
kali@172.16.25.1's password: 
Permission denied, please try again.
kali@172.16.25.1's password: 
Permission denied, please try again.
kali@172.16.25.1's password: 
```

### Trying dirbuster

`Unable to use dirbuster`

### NBT SCAN
```
kali@kali:~$ nbtscan 172.16.25.1
Doing NBT name scan for addresses from 172.16.25.1

IP address       NetBIOS Name     Server    User             MAC address      
------------------------------------------------------------------------------
```

### RCP CLient login

I tried to login using rpcclient and discovered that I can login using null session.

```
kali@kali:~$ rpcclient -U "" 172.16.25.1
Enter WORKGROUP\'s password: 
Cannot connect to server.  Error was NT_STATUS_CONNECTION_REFUSED
```

### trying enum4linux

```
kali@kali:~$ enum4linux 172.16.25.1
Starting enum4linux v0.8.9 ( http://labs.portcullis.co.uk/application/enum4linux/ ) on Tue Feb  1 01:24:54 2022

 ========================== 
|    Target Information    |
 ========================== 
Target ........... 172.16.25.1
RID Range ........ 500-550,1000-1050
Username ......... ''
Password ......... ''
Known Usernames .. administrator, guest, krbtgt, domain admins, root, bin, none


 =================================================== 
|    Enumerating Workgroup/Domain on 172.16.25.1    |
 =================================================== 
[E] Can't find workgroup/domain


 =========================================== 
|    Nbtstat Information for 172.16.25.1    |
 =========================================== 
Looking up status of 172.16.25.1
No reply from 172.16.25.1

 ==================================== 
|    Session Check on 172.16.25.1    |
 ==================================== 
Use of uninitialized value $global_workgroup in concatenation (.) or string at ./enum4linux.pl line 437.
[E] Server doesn't allow session using username '', password ''.  Aborting remainder of tests.

```
# trying to exploit splunk httpd

NOt able to.


