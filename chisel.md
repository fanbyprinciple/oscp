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



