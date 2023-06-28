https://www.youtube.com/watch?v=dIqoULXmhXg

pivoting from one machien to next without using ssh

we need to use the system as a proxy

https://github.com/jpillora/chisel

download from releases

in linux server
./chisel server -p 800 --reverse

in windows client
./chisel client ip:8000 R:socks

change
/etc/proxychains.conf
then we can use socks proxy

proxychains nmap <ip>

### using chisel for specific ports

./chisel client 10.10.16.24:8001 R:5985:172.16.22.1:5985

here 10.10.16.24 is my target machines and 172.16.22.1 is the next hop machine. the above lines must be entered in the pivot machine. (172.16.22.2)

./chisel server -p 8001 — reverse

we can also use it ot pivot multiple ports

.\chisel.exe client 10.10.16.24:9095 R:80localhost:80 R:443:localhost:443 R:8888:localhost:8888 R:9251:localhost:9251
./chisel server -p 9095 -reverse



