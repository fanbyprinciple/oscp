# behind the scenes

simple looking at the file helped

# partially encrypted

tried to decrypt but not happening unable to find the string nope at x64 dbg

# bypass

https://shakuganz.com/2021/06/25/hackthebox-bypass-write-up/

using ilspy and dnspy to look at .net binaries

# impossible password
```
~/Downloads ⌚ 9:06:11
$ file impossible_password.bin
impossible_password.bin: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.32, BuildID[sha1]=ba116ba1912a8c3779ddeb579404e2fdf34b1568, stripped
```
secret key on strings

SuperSeKretKey

```
~/Downloads ⌚ 9:14:10
$ ./impossible_password.bin
* %x
[%x]
```

# Debug me

you need to use something like https://github.com/x64dbg/ScyllaHide

this is anti anti debugging

# Hackybird

https://shakuganz.com/2021/06/27/hackthebox-hackybird-write-up/

it gets detected as a virus

# 