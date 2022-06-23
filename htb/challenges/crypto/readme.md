# Babycorn


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

