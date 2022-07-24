# mouinster

The challenge was to dump the tweets and theyll spell out a coordinate on the map, when actually placed on map theyll form letters

and spell out

407180f14EBB5D998E0083034ED9A21B

md5 hash for covertop

# secure startup

secure-startup.com

using dig command

secure-startup.comdig TXT secure-startup.com

```
; <<>> DiG 9.16.15-Debian <<>> TXT secure-startup.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 63600
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; MBZ: 0x0005, udp: 1280
;; QUESTION SECTION:
;secure-startup.com.            IN      TXT

;; ANSWER SECTION:
secure-startup.com.     5       IN      TXT     "v=spf1 a mx ?all - HTB{RIP_SPF_Always_2nd"

;; AUTHORITY SECTION:
secure-startup.com.     5       IN      NS      ns69.domaincontrol.com.
secure-startup.com.     5       IN      NS      ns70.domaincontrol.com.

;; Query time: 128 msec
;; SERVER: 192.168.203.2#53(192.168.203.2)
;; WHEN: Wed Jun 15 01:13:10 EDT 2022
;; MSG SIZE  rcvd: 153
```

```
─$ dig TXT _dmarc.secure-startup.com

; <<>> DiG 9.16.15-Debian <<>> TXT _dmarc.secure-startup.com
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 18949
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 2, ADDITIONAL: 1

;; OPT PSEUDOSECTION:
; EDNS: version: 0, flags:; MBZ: 0x0005, udp: 1280
;; QUESTION SECTION:
;_dmarc.secure-startup.com.     IN      TXT

;; ANSWER SECTION:
_dmarc.secure-startup.com. 5    IN      TXT     "v=DMARC1;p=none;_F1ddl3_2_DMARC}"

;; AUTHORITY SECTION:
secure-startup.com.     5       IN      NS      ns69.domaincontrol.com.
secure-startup.com.     5       IN      NS      ns70.domaincontrol.com.

;; Query time: 347 msec
;; SERVER: 192.168.203.2#53(192.168.203.2)
;; WHEN: Wed Jun 15 01:18:04 EDT 2022
;; MSG SIZE  rcvd: 151


```

combining both

HTB{RIP_SPF_Always_2nd_F1ddl3_2_DMARC}

# EVIl corp LLC

looking at instagram page 

# Missing in action

looking at his digital comments at one of the foursquare site

