# Babyencryption


```
#!/usr/bin/env python3
# -*- coding: utf-8 -*-

def decryption(msg):
    pt = []
    for char in msg:
        char = char - 18
        char = 179 * char % 256
        pt.append(char)
        return bytes(pt)
    with open("msg.enc") as f:
        ct = bytes.fromhex(f.read())
        pt = decryption(ct)
        print(pt)
```

<<<<<<< HEAD
b'Th3 nucl34r w1ll 4rr1v3 0n fr1d4y.\nHTB{l00k_47_y0u_r3v3rs1ng_3qu4710n5_c0ngr475}'
=======
# RLotto

looking at the file we have python file and it seems we need to provide input to the progam through web. 

or through a sokcet server , either of which I am not able to do.

doing netcat we found

```
$ nc localhost 1337
__/\____/\____/\____/\____/\____/\____/\____/\__
\    /\    /\    /\    /\    /\    /\    /\    /
/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\
  \/    \/    \/    \/    \/    \/    \/    \/  
   __       _   _       ____   ___ ____   ___   
  / /  ___ | |_| |_ ___|___ \ / _ \___ \ / _ \  
 / /  / _ \| __| __/ _ \ __) | | | |__) | | | | 
/ /__| (_) | |_| || (_) / __/| |_| / __/| |_| | 
\____/\___/ \__|\__\___/_____|\___/_____|\___/  
                                                
__/\____/\____/\____/\____/\____/\____/\____/\__
\    /\    /\    /\    /\    /\    /\    /\    /
/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\/_  _\
  \/    \/    \/    \/    \/    \/    \/    \/  
------------------------------------------------
1    2    3    4    5    6    7    8    9    10
11   12   13   14   15   16   17   18   19   20
21   22   23   24   25   26   27   28   29   30
31   32   33   34   35   36   37   38   39   40
41   42   43   44   45   46   47   48   49   50
51   52   53   54   55   56   57   58   59   60
61   62   63   64   65   66   67   68   69   70
71   72   73   74   75   76   77   78   79   80
81   82   83   84   85   86   87   88   89   90
------------------------------------------------
[+] EXTRACTION: 12 46 31 60 86 
[?] Guess the next extraction!!!
[?] Put here the next 5 numbers: 34 76 56 48 68
Good Job!
HTB{f4k3_fl4g_f0r_t3st1ng}
```

# how the columns have turned 

we need to use inverse of function 
https://an00brektn.github.io/htb-cyber-apocalypse-crypto-short-and-sweet/#how-the-columns-have-turned

dont knwo how to derive key

# xorxorxor

use xor function to find flag very interesting
>>>>>>> 5fa0e9cd407faff0ac19ad0c337df4c84533162c

