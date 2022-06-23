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

b'Th3 nucl34r w1ll 4rr1v3 0n fr1d4y.\nHTB{l00k_47_y0u_r3v3rs1ng_3qu4710n5_c0ngr475}'
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

# twoforone

```
~/Downloads/TwoForOne ⌚ 14:20:14
$ openssl rsautl -decrypt -in d_message1.bin -out decrypted_message1_key1.txt -inkey key1.pem
unable to load Private Key
140600317699456:error:0909006C:PEM routines:get_name:no start line:../crypto/pem/pem_lib.c:745:Expecting: ANY PRIVATE KEY

```

use base 64 decoding but problem is we need private key but the key provided are public.

```
'\xc5jxU\xa7,\t\x9dI\x84\x99)\x00Z\xaa\xe5+|\x8c\xbfs\xf4;\xff\xf4_\xab\xd7\xb8I\x9dI\xaa*\x95\x85\xb4\xa6:E#\xfe\xfa*A\x94\x9f%\xee>\x07\x9c\xefG\x82Vkl\x871/\xc4\x06+\x82\x94N\xf1\x15\xa8]}S\xee\x81\xaa\xea\x97\x85\x9e\xef\xdfE1\nC)\xaaY\x1d\x14k\x8d\x08\x99<\xe1(\x0c\x06\x8fHkP\xa2n\x8b\xe9\x14\x93L\xb3\xe0\xd0 \x83c\xe6\x89d\xdbw^p\x94\x9f\xa6\x00_\x9ck]yx>\xf4\x03\xecp\x0e\xa63\x05\xaaVD\x9f\xd5\xdc\xa5qh\x1f3\xc5RDz\x84\xe0\xaa\xec\xccR\xe1S\x96\x8e\x7f\xaf\xe4c\xa5\xcc\xff;XI\x8e\xd1\xf3\x88V\xd2f\x06& \xe1l\x80N\x83\xb6\xa9\xef-\x04Bxr\x85\xa4\n%A\x9c\xe9\xea\xc2\x8aW\xcb\x8f\x88\x9aQ\x7f[.\x0c\xd8\xfb\xf6=\xd9\x06\xc9\xfar,\\\xba\x16\x98\x89\xa1~\xe3\x86\x9b\x13\xcc\x9d\xba:\x15\x80\xffbJ\xae\xdd\x87\x96\x10'
```

not geting correct answer

```
from base64 import b64decode, b64encode
from libnum import xgcd, invmod, n2s

"""
Algo RSA
Format X.509
 ASN1 Dump
RSA Public Key [a8:50:bd:91:69:2a:d6:c1:76:15:11:4a:0e:d8:62:7e:1d:28:93:8c]
            modulus: c6acb8df486e6671d4a5564803e1c3214a8e274de0ac0043ec28c8589f377c7e8d308bc3e302850384344ba7988885620a418e6ad955578284fc04f289f126b38a01816251cef9a14fd4c249d96b69087fa91b2e1adbdc80cb96ff0ccb6129d8f6737da850c451f2ed3f6cb61c36891dc924d0ab28f26adf0ed357ce848d02ffe00912714ccf6372c1f41080e86747a0303eb5cdf6ce912f1144fd4f55743c796875a14fdff8f8b662150c56be58b09239771dc44d969079c4ad8fd993bc630b7855d2e02e8be16824dcd5ab3813231c1731110a8bd028d7a1dfab892e75294557bafc71aeaf5e48db0267a6db63d350f995068ee1cad6d32df11a49bd24ba97
    public exponent: 10001
"""

"""
Algo RSA
Format X.509
 ASN1 Dump
RSA Public Key [ee:3d:fe:e7:ab:cd:14:a7:f4:1a:29:d3:d6:a8:8b:05:35:95:c2:23]
            modulus: c6acb8df486e6671d4a5564803e1c3214a8e274de0ac0043ec28c8589f377c7e8d308bc3e302850384344ba7988885620a418e6ad955578284fc04f289f126b38a01816251cef9a14fd4c249d96b69087fa91b2e1adbdc80cb96ff0ccb6129d8f6737da850c451f2ed3f6cb61c36891dc924d0ab28f26adf0ed357ce848d02ffe00912714ccf6372c1f41080e86747a0303eb5cdf6ce912f1144fd4f55743c796875a14fdff8f8b662150c56be58b09239771dc44d969079c4ad8fd993bc630b7855d2e02e8be16824dcd5ab3813231c1731110a8bd028d7a1dfab892e75294557bafc71aeaf5e48db0267a6db63d350f995068ee1cad6d32df11a49bd24ba97
    public exponent: 53cb7

"""

# using pem parser - https://8gwifi.org/PemParserFunctions.jsp

e1 = int('10001', 16)
e2 = int('53cb7', 16)
N = int('c6acb8df486e6671d4a5564803e1c3214a8e274de0ac0043ec28c8589f377c7e8d308bc3e302850384344ba7988885620a418e6ad955578284fc04f289f126b38a01816251cef9a14fd4c249d96b69087fa91b2e1adbdc80cb96ff0ccb6129d8f6737da850c451f2ed3f6cb61c36891dc924d0ab28f26adf0ed357ce848d02ffe00912714ccf6372c1f41080e86747a0303eb5cdf6ce912f1144fd4f55743c796875a14fdff8f8b662150c56be58b09239771dc44d969079c4ad8fd993bc630b7855d2e02e8be16824dcd5ab3813231c1731110a8bd028d7a1dfab892e75294557bafc71aeaf5e48db0267a6db63d350f995068ee1cad6d32df11a49bd24ba97', 16)
c1 = '[a8:50:bd:91:69:2a:d6:c1:76:15:11:4a:0e:d8:62:7e:1d:28:93:8c]'
c2 = '[ee:3d:fe:e7:ab:cd:14:a7:f4:1a:29:d3:d6:a8:8b:05:35:95:c2:23]'

c1 = int.from_bytes(b64decode(c1), 'big')
c2 = int.from_bytes(b64decode(c2), 'big')

print(c1, c2)

def common_modulus(e1, e2, c1, c2, N):
    # Extended Euclidean algorithm
    a, b, d = xgcd(e1,e2)

    # Invert negative factor
    if b < 0:
        c2 = invmod(c2, N)
        b = -b
    if a < 0:
        c1 = invmod(c1, N)
        a = -a

    # Get the message (c1^a * c2^b) % N
    m = (pow(c1,a,N) * pow(c2,b,N)) % N
    return [m, a, b, d]

m, _, _, _ = common_modulus(e1,e2,c1,c2,N)

print(m)

flag = n2s(m)
print(flag)


```

