https://fuzzysecurity.com/tutorials/16.html

looking at systeminfo

C:\Users\chinauser\Downloads>net users
net users

User accounts for \\WIN-6AF35VFT4E8

-------------------------------------------------------------------------------
Administrator            chinauser                Guest                    
root                     
The command completed successfully.


```
C:\Users\chinauser\Downloads>ipconfig /all
ipconfig /all

Windows IP Configuration

   Host Name . . . . . . . . . . . . : WIN-6AF35VFT4E8
   Primary Dns Suffix  . . . . . . . : 
   Node Type . . . . . . . . . . . . : Hybrid
   IP Routing Enabled. . . . . . . . : No
   WINS Proxy Enabled. . . . . . . . : No

Ethernet adapter Local Area Connection:

   Connection-specific DNS Suffix  . : 
   Description . . . . . . . . . . . : Intel(R) PRO/1000 MT Network Connection
   Physical Address. . . . . . . . . : 00-0C-29-EB-B5-E2
   DHCP Enabled. . . . . . . . . . . : No
   Autoconfiguration Enabled . . . . : Yes
   IPv4 Address. . . . . . . . . . . : 10.10.136.222(Preferred) 
   Subnet Mask . . . . . . . . . . . : 255.255.0.0
   Default Gateway . . . . . . . . . : 10.10.10.10
   DNS Servers . . . . . . . . . . . : 8.8.8.8
                                       4.4.4.4
   NetBIOS over Tcpip. . . . . . . . : Enabled

Tunnel adapter isatap.{6191045C-D56A-4E21-AD3F-D64E7C5E5B1F}:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . : 
   Description . . . . . . . . . . . : Microsoft ISATAP Adapter
   Physical Address. . . . . . . . . : 00-00-00-00-00-00-00-E0
   DHCP Enabled. . . . . . . . . . . : No
   Autoconfiguration Enabled . . . . : Yes

C:\Users\chinauser\Downloads>route print
route print
===========================================================================
Interface List
 11...00 0c 29 eb b5 e2 ......Intel(R) PRO/1000 MT Network Connection
  1...........................Software Loopback Interface 1
 12...00 00 00 00 00 00 00 e0 Microsoft ISATAP Adapter
===========================================================================

IPv4 Route Table
===========================================================================
Active Routes:
Network Destination        Netmask          Gateway       Interface  Metric
          0.0.0.0          0.0.0.0      10.10.10.10    10.10.136.222    266
        10.10.0.0      255.255.0.0         On-link     10.10.136.222    266
    10.10.136.222  255.255.255.255         On-link     10.10.136.222    266
    10.10.255.255  255.255.255.255         On-link     10.10.136.222    266
        127.0.0.0        255.0.0.0         On-link         127.0.0.1    306
        127.0.0.1  255.255.255.255         On-link         127.0.0.1    306
  127.255.255.255  255.255.255.255         On-link         127.0.0.1    306
        224.0.0.0        240.0.0.0         On-link         127.0.0.1    306
        224.0.0.0        240.0.0.0         On-link     10.10.136.222    266
  255.255.255.255  255.255.255.255         On-link         127.0.0.1    306
  255.255.255.255  255.255.255.255         On-link     10.10.136.222    266
===========================================================================
Persistent Routes:
  Network Address          Netmask  Gateway Address  Metric
          0.0.0.0          0.0.0.0      10.10.10.10  Default 
===========================================================================

IPv6 Route Table
===========================================================================
Active Routes:
 If Metric Network Destination      Gateway
  1    306 ::1/128                  On-link
  1    306 ff00::/8                 On-link
===========================================================================
Persistent Routes:
  None

C:\Users\chinauser\Downloads>arp -A
arp -A

Interface: 10.10.136.222 --- 0xb
  Internet Address      Physical Address      Type
  10.10.8.124           00-0c-29-1c-48-76     dynamic   
  10.10.8.126           00-0c-29-07-59-98     dynamic   
  10.10.10.10           00-0c-29-10-21-bb     dynamic   
  10.10.11.23           00-0c-29-01-cd-2d     dynamic   
  10.10.27.56           00-0c-29-4b-8b-1d     dynamic   
  10.10.135.77          00-0c-29-e6-21-76     dynamic   
  10.10.136.231         00-0c-29-ca-b4-f2     dynamic   
  10.10.255.255         ff-ff-ff-ff-ff-ff     static    
  224.0.0.22            01-00-5e-00-00-16     static    
  224.0.0.251           01-00-5e-00-00-fb     static    
  224.0.0.252           01-00-5e-00-00-fc     static    
  239.255.255.250       01-00-5e-7f-ff-fa     static    

```

```
C:\Users\chinauser\Downloads>netstat -ano
netstat -ano

Active Connections

  Proto  Local Address          Foreign Address        State           PID
  TCP    0.0.0.0:80             0.0.0.0:0              LISTENING       4
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING       696
  TCP    0.0.0.0:445            0.0.0.0:0              LISTENING       4
  TCP    0.0.0.0:49152          0.0.0.0:0              LISTENING       384
  TCP    0.0.0.0:49153          0.0.0.0:0              LISTENING       776
  TCP    0.0.0.0:49154          0.0.0.0:0              LISTENING       884
  TCP    0.0.0.0:49155          0.0.0.0:0              LISTENING       504
  TCP    0.0.0.0:49156          0.0.0.0:0              LISTENING       488
  TCP    0.0.0.0:49158          0.0.0.0:0              LISTENING       1508
  TCP    10.10.136.222:139      0.0.0.0:0              LISTENING       4
  TCP    10.10.136.222:49264    10.10.136.231:8081     ESTABLISHED     3920
  TCP    [::]:80                [::]:0                 LISTENING       4
  TCP    [::]:135               [::]:0                 LISTENING       696
  TCP    [::]:445               [::]:0                 LISTENING       4
  TCP    [::]:49152             [::]:0                 LISTENING       384
  TCP    [::]:49153             [::]:0                 LISTENING       776
  TCP    [::]:49154             [::]:0                 LISTENING       884
  TCP    [::]:49155             [::]:0                 LISTENING       504
  TCP    [::]:49156             [::]:0                 LISTENING       488
  TCP    [::]:49158             [::]:0                 LISTENING       1508
  UDP    0.0.0.0:500            *:*                                    884
  UDP    0.0.0.0:4500           *:*                                    884
  UDP    0.0.0.0:5353           *:*                                    2036
  UDP    0.0.0.0:5355           *:*                                    880
  UDP    10.10.136.222:137      *:*                                    4
  UDP    10.10.136.222:138      *:*                                    4
  UDP    10.10.136.222:1900     *:*                                    3808
  UDP    10.10.136.222:54412    *:*                                    2036
  UDP    10.10.136.222:64843    *:*                                    3808
  UDP    127.0.0.1:1900         *:*                                    3808
  UDP    127.0.0.1:64844        *:*                                    3808
  UDP    [::]:500               *:*                                    884
  UDP    [::]:4500              *:*                                    884
  UDP    [::1]:1900             *:*                                    3808
  UDP    [::1]:64842            *:*                                    3808
```

```
C:\Users\chinauser\Downloads>netsh firewall show state
netsh firewall show state

Firewall status:
-------------------------------------------------------------------
Profile                           = Standard
Operational mode                  = Disable
Exception mode                    = Enable
Multicast/broadcast response mode = Enable
Notification mode                 = Enable
Group policy version              = Windows Firewall
Remote admin mode                 = Disable

Ports currently open on all network interfaces:
Port   Protocol  Version  Program
-------------------------------------------------------------------
No ports are currently open on all network interfaces.

IMPORTANT: Command executed successfully.
However, "netsh firewall" is deprecated;
use "netsh advfirewall firewall" instead.
For more information on using "netsh advfirewall firewall" commands
instead of "netsh firewall", see KB article 947709
at http://go.microsoft.com/fwlink/?linkid=121488 .

```

```
C:\Users\chinauser\Downloads>netsh firewall show config
netsh firewall show config

Domain profile configuration:
-------------------------------------------------------------------
Operational mode                  = Enable
Exception mode                    = Enable
Multicast/broadcast response mode = Enable
Notification mode                 = Enable

Allowed programs configuration for Domain profile:
Mode     Traffic direction    Name / Program
-------------------------------------------------------------------

Port configuration for Domain profile:
Port   Protocol  Mode    Traffic direction     Name
-------------------------------------------------------------------

ICMP configuration for Domain profile:
Mode     Type  Description
-------------------------------------------------------------------
Enable   2     Allow outbound packet too big

Standard profile configuration (current):
-------------------------------------------------------------------
Operational mode                  = Disable
Exception mode                    = Enable
Multicast/broadcast response mode = Enable
Notification mode                 = Enable

Service configuration for Standard profile:
Mode     Customized  Name
-------------------------------------------------------------------
Enable   No          Network Discovery

Allowed programs configuration for Standard profile:
Mode     Traffic direction    Name / Program
-------------------------------------------------------------------

Port configuration for Standard profile:
Port   Protocol  Mode    Traffic direction     Name
-------------------------------------------------------------------
schtasks /query /fo LIST /v


ICMP configuration for Standard profile:
Mode     Type  Description
-------------------------------------------------------------------
Enable   2     Allow outbound packet too big

Log configuration:
-------------------------------------------------------------------
File location   = C:\Windows\system32\LogFiles\Firewall\pfirewall.log
Max file size   = 4096 KB
Dropped packets = Disable
Connections     = Disable

IMPORTANT: Command executed successfully.
However, "netsh firewall" is deprecated;
use "netsh advfirewall firewall" instead.
For more information on using "netsh advfirewall firewall" commands
instead of "netsh firewall", see KB article 947709
at http://go.microsoft.com/fwlink/?linkid=121488 .

```

`schtasks /query /fo LIST /v`

`tasklist /SVC`

`net start`

`DRIVERQUERY`

## using WMIC

`wmic /?`

looking at the hotfixes

`wmic qfe get Caption,Description,HotFixID,InstalledOn`

