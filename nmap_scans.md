intense scan

`nmap -T4 -A -v 10.129.158.219`

intense scan plus udp

`nmap -sS -sU -T4 -A -v 10.129.158.219`

intense scan all ports

`nmap -p 1-65535 -T4 -A -v 10.129.158.219`

intense scan, no ping

`nmap -T4 -A -v -Pn 10.129.158.219`

ping scan

`nmap -sn 10.129.158.219`

quick scan

`nmap -T4 -F 10.129.158.219`

quick scan plus

`nmap -sV -T4 -O -F --version-light 10.129.158.219`

quick traceroute

`nmap -sn --traceroute 10.129.158.219`

regular scan

`nmap 10.129.158.219`

slow comprehensive scan

`nmap -sS -sU -T4 -A -v -PE -PP -PS80,443 -PA3389 -PU40125 -PY -g 53 --script "default or (discovery and safe)" 10.129.158.219`


# ippsec style

nmap -sC -sV -oA nmap/valentine 10.129.186.207

nmap --script vuln -oA nmap/vulnscan 10.129.186.207

gobuster -u http://10.129.186.207 -w /usr/share/wordlists/dirbuster/directory-list-2/3-medium.txt -o fobuster.log -t 50
