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

it was about random seeds

```
~ ⌚ 5:38:14
$ telnet 46.101.47.107 30304
Trying 46.101.47.107...
Connected to 46.101.47.107.
Escape character is '^]'.
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
[+] EXTRACTION: 69 19 75 46 63 
[?] Guess the next extraction!!!
[?] Put here the next 5 numbers: 14 49 10 84 86
Good Job!
HTB{n3v3r_u53_pr3d1c74bl3_533d5_1n_p53ud0-r4nd0m_numb3r_63n3r470r}
Connection closed by foreign host.

```

program used : https://gist.github.com/fanbyprinciple/30acd6b1d28a5e40becea4be82e4c699

```
# from https://medium.com/@wiiz4rd/hackthebox-rlotto-challenge-68f4b01006ba
# connect to rlotto using nc or telnet
# get the first sequence of numbers 
# input into this program

import time
import random

seed = int(input("Enter the timestamp (enter 0 if not aware) :"))

if seed == 0:
    seed = int(time.time()) - 2_500_500 #2_500_500 10 sec
if seed == 1:
    seed = int(time.time()) - 15_000_000

winning_numbers = list(int(x) for x in input("Enter extracted numbers from the rlotto program: ").split(" "))

print("starred seed: ", seed)

while True:
    random.seed(seed)
    extracted = []
    for item in winning_numbers:
        r = random.randint(1,90)
        if item != r:
            seed +=1 
            break
        else:
            extracted.append(r)
    if len(extracted) == 5:
        break

print("Found seed: ", seed)

solution = ""
next_five = []

while(len(next_five)<5):
    r = random.randint(1,90)
    if (r not in next_five):
        next_five.append(r)
        solution += str(r) + " "
solution = solution.strip()
print("\nsolution: " , solution)
```
# how the columns have turned 

we need to use inverse of function 
https://an00brektn.github.io/htb-cyber-apocalypse-crypto-short-and-sweet/#how-the-columns-have-turned

dont knwo how to derive key

# xorxorxor

use xor function to find flag very interesting. The first four letter of answe would be {HTB

# quantum safe

a sage file and enoded text is given how to run?

# baby quick maffs

Wikipedia says "the Rabin cryptosystem has been mathematically proven to be computationally secure against a chosen-plaintext attack as long as the attacker cannot efficiently factor integers", so I created my own cool implementation.

# Lost modulus againn

```
from sage.all import isqrt
import binascii

e = 1048583
d = 20899585599499852848600179189763086698516108548228367107221738096450499101070075492197700491683249172909869748620431162381087017866603003080844372390109407618883775889949113518883655204495367156356586733638609604914325927159037673858380872827051492954190012228501796895529660404878822550757780926433386946425164501187561418082866346427628551763297010068329425460680225523270632454412376673863754258135691783420342075219153761633410012733450586771838248239221434791288928709490210661095249658730871114233033907339401132548352479119599592161475582267434069666373923164546185334225821332964035123667137917080001159691927
iqmp = 22886390627173202444468626406642274959028635116543626995297684671305848436910064602418012808595951325519844918478912090039470530649857775854959462500919029371215000179065185673136642143061689849338228110909931445119687113803523924040922470616407096745128917352037282612768345609735657018628096338779732460743
ipmq = 138356012157150927033117814862941924437637775040379746970778376921933744927520585574595823734209547857047013402623714044512594300691782086053475259157899010363944831564630625623351267412232071416191142966170634950729938561841853176635423819365023039470901382901261884795304947251115006930995163847675576699331
ct = int('32074de818f2feeb788e36d7d3ee09f0000381584a72b2fba0dcc9a2ebe5fd79cf2d6fd40c4dbfea27d3489704f2c1a30b17a783baa67229d02043c5bc9bdb995ae984d80a96bd79370ea2c356f39f85a12d16983598c1fb772f9183441fea5dfeb5b26455df75de18ce70a6a9e9dbc0a4ca434ba94cf4d1e5347395cf7aafa756c8a5bd6fd166bc30245a4bded28f5baac38d024042a166369f7515e8b0c479a1965b5988b350064648738f6585c0a0d1463bd536d11a105bb926b44236593b5c6c71ef5b132cd9c211e8ad9131aa53ffde88f5b0df18e7c45bcdb6244edcaa8d386196d25297c259fca3be37f0f2015f40cb5423a918c51383390dfd5a8703', 16)

for c in range(1, 2*e):
    s = (1 - d*e - c*ipmq + c*iqmp)*(1 - d*e - c*ipmq + c*iqmp) - 4*(-c + c*ipmq)*(c - iqmp - c*iqmp + d*e*iqmp)
    if s < 0:
        continue
    sq = isqrt(s)
    if sq*sq != s:
        continue
    a = -1 + d*e + c*ipmq - c*iqmp
    den = 2*(-c + c*ipmq)
    for nom in (a+sq, a-sq):
        if nom%den == 0:
            p = nom//den
            assert (p*ipmq-1)%(p-iqmp) == 0
            q = (p*ipmq-1)//(p-iqmp)
            flag = pow(int(ct), int(d), int(p*q))
            print(binascii.unhexlify('%x'%flag))
```

need to install sag ein python to run

# baby crypto encryption

in RSA N is th emodulus

attacks RSA is vulnerable to

https://www.members.tripod.com/irish_ronan/rsa/attacks.html

here we see that exponent e is very small.

can we try 
https://github.com/RsaCtfTool/RsaCtfTool.git

"""
{"time_capsule": "79FD1B020608458B6D3F75DF3019885CDCEE999E3349FE66AE6C9ECE2565C25BDD4A55F8B98D98DE2764E19E48948C7D0DC75E9CD1BE0C41DBA8B600A5489B3F2B882A80989FA0A6313154A1A4211E2E9F8B3ECA8AD1299E95EED66A10C0564636D947A22179F7746419C79C76F27C77D75E6EA3D1389B292C4C3562D3696B8B", "pubkey": ["90B9C695F498DE92A39F8B59C09B17763DEDE9C30099D7F357520CDEF566096C7C0E6FEE242DFD9EAED81565556FFBFE7A63E2FB3CF0010D918AEDA2AAE0F6940C876F67FCC1610369CB2999EA4C60D7BAE752380E0BB21EDA2591AE5C0AB5D7E800A92E6C85856D72F9F85CE772DB53E6A2F665358C110423ED152364DBDF51", "5"]}

python RsaCtfTool.py --publickey "79FD1B020608458B6D3F75DF3019885CDCEE999E3349FE66AE6C9ECE2565C25BDD4A55F8B98D98DE2764E19E48948C7D0DC75E9CD1BE0C41DBA8B600A5489B3F2B882A80989FA0A6313154A1A4211E2E9F8B3ECA8AD1299E95EED66A10C0564636D947A22179F7746419C79C76F27C77D75E6EA3D1389B292C4C3562D3696B8B" -n "90B9C695F498DE92A39F8B59C09B17763DEDE9C30099D7F357520CDEF566096C7C0E6FEE242DFD9EAED81565556FFBFE7A63E2FB3CF0010D918AEDA2AAE0F6940C876F67FCC1610369CB2999EA4C60D7BAE752380E0BB21EDA2591AE5C0AB5D7E800A92E6C85856D72F9F85CE772DB53E6A2F665358C110423ED152364DBDF51" -e "5"
"""

error when running rsactftool

```sh
┌──(kali㉿kali)-[~/Downloads/baby_time_capsule/RsaCtfTool]
└─$ python3 ./RsaCtfTool.py --publickey "79FD1B020608458B6D3F75DF3019885CDCEE999E3349FE66AE6C9ECE2565C25BDD4A55F8B98D98DE2764E19E48948C7D0DC75E9CD1BE0C41DBA8B600A5489B3F2B882A80989FA0A6313154A1A4211E2E9F8B3ECA8AD1299E95EED66A10C0564636D947A22179F7746419C79C76F27C77D75E6EA3D1389B292C4C3562D3696B8B" -n "90B9C695F498DE92A39F8B59C09B17763DEDE9C30099D7F357520CDEF566096C7C0E6FEE242DFD9EAED81565556FFBFE7A63E2FB3CF0010D918AEDA2AAE0F6940C876F67FCC1610369CB2999EA4C60D7BAE752380E0BB21EDA2591AE5C0AB5D7E800A92E6C85856D72F9F85CE772DB53E6A2F665358C110423ED152364DBDF51" -e "5" 
private argument is not set, the private key will not be displayed, even if recovered.
Traceback (most recent call last):
  File "/home/kali/Downloads/baby_time_capsule/RsaCtfTool/./RsaCtfTool.py", line 217, in <module>
    args.n = get_numeric_value(args.n)
  File "/home/kali/Downloads/baby_time_capsule/RsaCtfTool/lib/utils.py", line 27, in get_numeric_value
    return int(value)
ValueError: invalid literal for int() with base 10: '90B9C695F498DE92A39F8B59C09B17763DEDE9C30099D7F357520CDEF566096C7C0E6FEE242DFD9EAED81565556FFBFE7A63E2FB3CF0010D918AEDA2AAE0F6940C876F67FCC1610369CB2999EA4C60D7BAE752380E0BB21EDA2591AE5C0AB5D7E800A92
                                 
```

# lost modulus

```python
# ead challenge.py, for RSA encryption and decryption related code, get e=3 from the code, a typical low encryption index (e) decomposition attack, it is likely that m 3 is smaller than n, that is, m 3 =c, then pass gmpy2.iroot (c,3) solve
# ————————————————
# 版权声明：本文为CSDN博主「galaxy3000」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
# 原文链接：https://blog.csdn.net/galaxy3000/article/details/122265747

# also refer to weak RSA htb
# https://blog.csdn.net/galaxy3000/article/details/122265747

c = 0x05c61636499a82088bf4388203a93e67bf046f8c49f62857681ec9aaaa40b4772933e0abc83e938c84ff8e67e5ad85bd6eca167585b0cc03eb1333b1b1462d9d7c25f44e53bcb568f0f05219c0147f7dc3cbad45dec2f34f03bcadcbba866dd0c566035c8122d68255ada7d18954ad604965

import gmpy2

print(gmpy2.iroot(c,3))

from Crypto.Util.number import long_to_bytes

print(long_to_bytes(gmpy2.iroot(c,3)[0]))

```

# Old is g0ld

HTB{R1PSAMU3LM0RS3}

# weak RSA

RSACtftool

