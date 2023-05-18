### upgrading shells

https://sushant747.gitbooks.io/total-oscp-guide/content/spawning_shells.html

```
python -c 'import pty; pty.spawn("/bin/sh")'
python3 -c 'import pty; pty.spawn("/bin/sh")'

/bin/sh -i
```
