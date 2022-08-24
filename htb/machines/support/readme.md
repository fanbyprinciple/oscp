# nmap 

└─# nmap 10.129.67.167 
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-23 20:14 EDT
Nmap scan report for 10.129.67.167
Host is up (0.28s latency).
Not shown: 989 filtered tcp ports (no-response)
PORT     STATE SERVICE
53/tcp   open  domain
88/tcp   open  kerberos-sec
135/tcp  open  msrpc
139/tcp  open  netbios-ssn
389/tcp  open  ldap
445/tcp  open  microsoft-ds
464/tcp  open  kpasswd5
593/tcp  open  http-rpc-epmap
636/tcp  open  ldapssl
3268/tcp open  globalcatLDAP
3269/tcp open  globalcatLDAPssl

nmap -p 53,88,135,139,389,445,464,593,636,3268,3269 -sV -sC 10.129.67.167

┌──(root㉿kali)-[/home/kali/Downloads]
└─# nmap -p 53,88,135,139,389,445,464,593,636,3268,3269 -sV -sC 10.129.67.167
Starting Nmap 7.92 ( https://nmap.org ) at 2022-08-23 20:17 EDT
Nmap scan report for 10.129.67.167
Host is up (0.28s latency).

PORT     STATE SERVICE       VERSION
53/tcp   open  domain        Simple DNS Plus
88/tcp   open  kerberos-sec  Microsoft Windows Kerberos (server time: 2022-08-24 00:17:36Z)
135/tcp  open  msrpc         Microsoft Windows RPC
139/tcp  open  netbios-ssn   Microsoft Windows netbios-ssn
389/tcp  open  ldap          Microsoft Windows Active Directory LDAP (Domain: support.htb0., Site: Default-First-Site-Name)
445/tcp  open  microsoft-ds?
464/tcp  open  kpasswd5?
593/tcp  open  ncacn_http    Microsoft Windows RPC over HTTP 1.0
636/tcp  open  tcpwrapped
3268/tcp open  ldap          Microsoft Windows Active Directory LDAP (Domain: support.htb0., Site: Default-First-Site-Name)
3269/tcp open  tcpwrapped
Service Info: Host: DC; OS: Windows; CPE: cpe:/o:microsoft:windows

Host script results:
|_clock-skew: -1s
| smb2-time: 
|   date: 2022-08-24T00:17:52
|_  start_date: N/A
| smb2-security-mode: 
|   3.1.1: 
|_    Message signing enabled and required

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 71.46 seconds

# smb and rpc enumeration

┌──(root㉿kali)-[/home/kali/Downloads]
└─# smbmap -H 10.129.67.167                                  
[+] IP: 10.129.67.167:445	Name: 10.129.67.167                                     
                                                                                                                      
┌──(root㉿kali)-[/home/kali/Downloads]
└─# rpcclient -U "" -N 10.129.67.167
rpcclient $> enumdomusers
result was NT_STATUS_ACCESS_DENIED
rpcclient $> dir
command not found: dir
rpcclient $> exit

This will create a tar archive allfiles.tar in the current directory the smbclient command is executed. Afterwards you can unpack the files again with tar xf allfiles.tar.                                                                                                 
┌──(root㉿kali)-[/home/kali/Downloads]
└─# smbclient -N -L //10.129.67.167                          

	Sharename       Type      Comment
	---------       ----      -------
	ADMIN$          Disk      Remote Admin
	C$              Disk      Default share
	IPC$            IPC       Remote IPC
	NETLOGON        Disk      Logon server share 
	support-tools   Disk      support staff tools
	SYSVOL          Disk      Logon server share 
Reconnecting with SMB1 for workgroup listing.
do_connect: Connection to 10.129.67.167 failed (Error NT_STATUS_RESOURCE_NAME_NOT_FOUND)
Unable to connect with SMB1 -- no workgroup available

└─# smbmap -H 10.129.67.167 -u 0xdf
[+] Guest session   	IP: 10.129.67.167:445	Name: 10.129.67.167                                     
        Disk                                                  	Permissions	Comment
	----                                                  	-----------	-------
	ADMIN$                                            	NO ACCESS	Remote Admin
	C$                                                	NO ACCESS	Default share
	IPC$                                              	READ ONLY	Remote IPC
	NETLOGON                                          	NO ACCESS	Logon server share 
	support-tools                                     	READ ONLY	support staff tools
	SYSVOL                                            	NO ACCESS	Logon server share 

# smbclient download

└─# smbclient //10.129.67.167/support-tools                                          
Enter WORKGROUP\root's password: 
Try "help" to get a list of possible commands.
smb: \> dir
  .                                   D        0  Wed Jul 20 13:01:06 2022
  ..                                  D        0  Sat May 28 07:18:25 2022
  7-ZipPortable_21.07.paf.exe         A  2880728  Sat May 28 07:19:19 2022
  npp.8.4.1.portable.x64.zip          A  5439245  Sat May 28 07:19:55 2022
  putty.exe                           A  1273576  Sat May 28 07:20:06 2022
  SysinternalsSuite.zip               A 48102161  Sat May 28 07:19:31 2022
  UserInfo.exe.zip                    A   277499  Wed Jul 20 13:01:07 2022
  windirstat1_1_2_setup.exe           A    79171  Sat May 28 07:20:17 2022
  WiresharkPortable64_3.6.5.paf.exe      A 44398000  Sat May 28 07:19:43 2022

		4026367 blocks of size 4096. 970317 blocks available
smb: \> mask ""
smb: \> recurse ON
smb: \> prompt OFF
smb: \> lcf '.'
lcf: command not found
smb: \> lcd '.'
chdir to '.' failed (No such file or directory)
smb: \> lcd '~'
chdir to '~' failed (No such file or directory)
smb: \> mget *
getting file \7-ZipPortable_21.07.paf.exe of size 2880728 as 7-ZipPortable_21.07.paf.exe (604.3 KiloBytes/sec) (average 604.3 KiloBytes/sec)
getting file \npp.8.4.1.portable.x64.zip of size 5439245 as npp.8.4.1.portable.x64.zip (967.4 KiloBytes/sec) (average 800.8 KiloBytes/sec)
getting file \putty.exe of size 1273576 as putty.exe (511.0 KiloBytes/sec) (average 744.7 KiloBytes/sec)
getting file \SysinternalsSuite.zip of size 48102161 as SysinternalsSuite.zip (1053.9 KiloBytes/sec) (average 985.8 KiloBytes/sec)
getting file \UserInfo.exe.zip of size 277499 as UserInfo.exe.zip (110.9 KiloBytes/sec) (average 950.0 KiloBytes/sec)
getting file \windirstat1_1_2_setup.exe of size 79171 as windirstat1_1_2_setup.exe (65.6 KiloBytes/sec) (average 932.8 KiloBytes/sec)

getting file \WiresharkPortable64_3.6.5.paf.exe of size 44398000 as WiresharkPortable64_3.6.5.paf.exe (1192.4 KiloBytes/sec) (average 1030.0 KiloBytes/sec)
smb: \> 
smb: \> exit

Downloaded a file called userinfo.dll do we have to reverse it?

when running it

```

C:\Users\WIN10RED\Downloads>.\UserInfo.exe user
Unable to parse command 'user' reason: Required option '-username' not found!



Usage: UserInfo.exe [options] [commands]

Options:
  -v|--verbose        Verbose output

Commands:
  find                Find a user
  user                Get information about a user


C:\Users\WIN10RED\Downloads>.\UserInfo.exe user -username 0xdf
[-] Exception: The server is not operational.
```
trying to list IPC

```
└─# smbclient  //10.129.67.167/IPC$ 
Enter WORKGROUP\root's password: 
Try "help" to get a list of possible commands.
smb: \> whoami
whoami: command not found
smb: \> dir
NT_STATUS_INVALID_INFO_CLASS listing \*
smb: \>
```

maybe we have to do something about the various dlls
can we reverse engineer the exe

