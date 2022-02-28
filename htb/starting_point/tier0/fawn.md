result of quick scan
10.129.206.117

A typical misconfiguration for running FTP services allows an anonymous account to access the service like
any other authenticated user. The anonymous username can be input when the prompt appears, followed
by any password whatsoever since the service will disregard the password for this specific account.

1. file transfer protocol
2. client-server model
3. filezilla
4. 21 tcp
5. sftp
6. ping
7. vsftpd 3.0.3
8. unix

```
Starting Nmap 7.92 ( https://nmap.org ) at 2022-02-28 15:46 India Standard Time

NSE: Loaded 155 scripts for scanning.

NSE: Script Pre-scanning.

Initiating NSE at 15:46

Completed NSE at 15:46, 0.00s elapsed

Initiating NSE at 15:46

Completed NSE at 15:46, 0.00s elapsed

Initiating NSE at 15:46

Completed NSE at 15:46, 0.00s elapsed

Initiating Ping Scan at 15:46

Scanning 10.129.206.117 [4 ports]

Completed Ping Scan at 15:46, 0.38s elapsed (1 total hosts)

Initiating Parallel DNS resolution of 1 host. at 15:46

Completed Parallel DNS resolution of 1 host. at 15:46, 0.00s elapsed

Initiating SYN Stealth Scan at 15:46

Scanning 10.129.206.117 [1 port]

Discovered open port 21/tcp on 10.129.206.117

Completed SYN Stealth Scan at 15:46, 0.24s elapsed (1 total ports)

Initiating Service scan at 15:46

Scanning 1 service on 10.129.206.117

Completed Service scan at 15:46, 0.48s elapsed (1 service on 1 host)

Initiating OS detection (try #1) against 10.129.206.117

Retrying OS detection (try #2) against 10.129.206.117

Initiating Traceroute at 15:47

Completed Traceroute at 15:47, 0.24s elapsed

Initiating Parallel DNS resolution of 2 hosts. at 15:47

Completed Parallel DNS resolution of 2 hosts. at 15:47, 0.01s elapsed

NSE: Script scanning 10.129.206.117.

Initiating NSE at 15:47

NSE: [ftp-bounce] PORT response: 500 Illegal PORT command.

Completed NSE at 15:47, 1.92s elapsed

Initiating NSE at 15:47

Completed NSE at 15:47, 3.02s elapsed

Initiating NSE at 15:47

Completed NSE at 15:47, 0.34s elapsed

Nmap scan report for 10.129.206.117

Host is up (0.19s latency).



PORT   STATE SERVICE VERSION

21/tcp open  ftp     vsftpd 3.0.3

| ftp-syst: 

|   STAT: 

| FTP server status:

|      Connected to ::ffff:10.10.14.236

|      Logged in as ftp

|      TYPE: ASCII

|      No session bandwidth limit

|      Session timeout in seconds is 300

|      Control connection is plain text

|      Data connections will be plain text

|      At session startup, client count was 4

|      vsFTPd 3.0.3 - secure, fast, stable

|_End of status

| ftp-anon: Anonymous FTP login allowed (FTP code 230)

|_-rw-r--r--    1 0        0              32 Jun 04  2021 flag.txt

Warning: OSScan results may be unreliable because we could not find at least 1 open and 1 closed port

Aggressive OS guesses: Linux 4.15 - 5.6 (95%), Linux 5.0 - 5.3 (95%), Linux 3.1 (95%), Linux 3.2 (95%), Linux 5.3 - 5.4 (95%), AXIS 210A or 211 Network Camera (Linux 2.6.17) (94%), Linux 2.6.32 (94%), ASUS RT-N56U WAP (Linux 3.4) (93%), Linux 3.16 (93%), Linux 3.2 - 4.9 (92%)

No exact OS matches for host (test conditions non-ideal).

Uptime guess: 38.330 days (since Fri Jan 21 07:52:12 2022)

Network Distance: 2 hops

TCP Sequence Prediction: Difficulty=245 (Good luck!)

IP ID Sequence Generation: All zeros

Service Info: OS: Unix



TRACEROUTE (using port 21/tcp)

HOP RTT       ADDRESS

1   234.00 ms 10.10.14.1

2   234.00 ms 10.129.206.117



NSE: Script Post-scanning.

Initiating NSE at 15:47

Completed NSE at 15:47, 0.11s elapsed

Initiating NSE at 15:47

Completed NSE at 15:47, 0.00s elapsed

Initiating NSE at 15:47

Completed NSE at 15:47, 0.00s elapsed

Read data files from: C:\Program Files (x86)\Nmap

OS and Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .

Nmap done: 1 IP address (1 host up) scanned in 19.17 seconds

           Raw packets sent: 62 (4.348KB) | Rcvd: 78 (5.196KB)
```

9. unable to get ls on ftp

username for anonymous logins onto ftp is anonymous

```
ftp> ls
200 PORT command successful. Consider using PASV.
425 Failed to establish connection.
```


