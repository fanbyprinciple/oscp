# racecar
```
$ file racecar
racecar: ELF 32-bit LSB pie executable, Intel 80386, version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux.so.2, for GNU/Linux 3.2.0, BuildID[sha1]=c5631a370f7704c44312f6692e1da56c25c1863c, not stripped
```

```
$ ldd racecar

        linux-gate.so.1 (0xf7eee000)

                libc.so.6 => /lib32/libc.so.6 (0xf7cd9000)

                        /lib/ld-linux.so.2 (0xf7ef0000)
```

```
$ readelf -h racecar
ELF Header:
  Magic:   7f 45 4c 46 01 01 01 00 00 00 00 00 00 00 00 00 
  Class:                             ELF32
  Data:                              2's complement, little endian
  Version:                           1 (current)
  OS/ABI:                            UNIX - System V
  ABI Version:                       0
  Type:                              DYN (Position-Independent Executable file)
  Machine:                           Intel 80386
  Version:                           0x1
  Entry point address:               0x790
  Start of program headers:          52 (bytes into file)
  Start of section headers:          15108 (bytes into file)
  Flags:                             0x0
  Size of this header:               52 (bytes)
  Size of program headers:           32 (bytes)
  Number of program headers:         9
  Size of section headers:           40 (bytes)
  Number of section headers:         29
  Section header string table index: 28

```
```
$ nm racecar
         U alarm@@GLIBC_2.0
         U atoi@@GLIBC_2.0
00000929 T banner
00004010 B __bss_start
000011d2 T car_info
00000c91 T car_menu
0000400c D check
00004008 D coins
00004010 b completed.7283
         w __cxa_finalize@@GLIBC_2.1.3
00004000 D __data_start
00004000 W data_start
000007e0 t deregister_tm_clones
00000870 t __do_global_dtors_aux
00003e90 d __do_global_dtors_aux_fini_array_entry
00004004 D __dso_handle
00003e94 d _DYNAMIC
00004010 D _edata
00004014 B _end
         U exit@@GLIBC_2.0
         U fgets@@GLIBC_2.0
00001514 T _fini
         U fopen@@GLIBC_2.1
00001528 R _fp_hw
000008c0 t frame_dummy
00003e8c d __frame_dummy_init_array_entry
00002018 r __FRAME_END__
00003f8c d _GLOBAL_OFFSET_TABLE_
         w __gmon_start__
00001d7c r __GNU_EH_FRAME_HDR
00001082 T info
00000618 T _init
00003e90 d __init_array_end
00003e8c d __init_array_start
0000152c R _IO_stdin_used
         w _ITM_deregisterTMCloneTable
         w _ITM_registerTMCloneTable
000014f0 T __libc_csu_fini
00001490 T __libc_csu_init
         U __libc_start_main@@GLIBC_2.0
000013e1 T main
         U malloc@@GLIBC_2.0
00001352 T menu
         U printf@@GLIBC_2.0
         U putchar@@GLIBC_2.0
         U puts@@GLIBC_2.0
00000c02 T race_type
         U rand@@GLIBC_2.0
         U read@@GLIBC_2.0
000008cd T read_int
00000820 t register_tm_clones
00000b93 T setup
         U setvbuf@@GLIBC_2.0
         U sleep@@GLIBC_2.0
         U srand@@GLIBC_2.0
         U __stack_chk_fail@@GLIBC_2.4
00001500 T __stack_chk_fail_local
00000790 T _start
         U stdin@@GLIBC_2.0
         U stdout@@GLIBC_2.0
         U strcmp@@GLIBC_2.0
         U strlen@@GLIBC_2.0
         U time@@GLIBC_2.0
00004010 D __TMC_END__
000007d0 T __x86.get_pc_thunk.bx
000008c9 T __x86.get_pc_thunk.dx

```

with ltrace 

```
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(32, 0x5657cf8c, 1, 0x56579dfa )                                 = 32                                                                                                                                                                 
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(116, 0x5657cf8c, 1, 0x56579dfat)                                = 116                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(111, 0x5657cf8c, 1, 0x56579dfao)                                = 111                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(32, 0x5657cf8c, 1, 0x56579dfa )                                 = 32                                                                                                                                                                 
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(102, 0x5657cf8c, 1, 0x56579dfaf)                                = 102                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(105, 0x5657cf8c, 1, 0x56579dfai)                                = 105                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(110, 0x5657cf8c, 1, 0x56579dfan)                                = 110                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(105, 0x5657cf8c, 1, 0x56579dfai)                                = 105                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(115, 0x5657cf8c, 1, 0x56579dfas)                                = 115                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(104, 0x5657cf8c, 1, 0x56579dfah)                                = 104                                                                                                                                                                
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(46, 0x5657cf8c, 1, 0x56579dfa.)                                 = 46                                                                                                                                                                 
sleep(0)                                                               = 0                                                                                                                                                                   
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(46, 0x5657cf8c, 1, 0x56579dfa.)                                 = 46                                                                                                                                                                 
sleep(0)                                                               = 0                                                                                                                                                                   
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
putchar(46, 0x5657cf8c, 1, 0x56579dfa.)                                 = 46                                                                                                                                                                 
sleep(0)                                                               = 0                                                                                                                                                                   
strlen("\n[*] Waiting for the race to fin"...)                         = 38                                                                                                                                                                  
printf("%s\n\n[+] You won the race!! You g"..., "\033[1;32m"                                                                                                                                                                                 
                                                                                                                                                                                                                                             
[+] You won the race!! You get 100 coins!                                                                                                                                                                                                    
)          = 51                                                                                                                                                                                                                              
printf("[+] Current coins: [%d]%s\n", 169, "\033[1;36m"[+] Current coins: [169]                                                                                                                                                              
)               = 32                                                                                                                                                                                                                         
printf("\n[!] Do you have anything to say"..., "\033[0m"                                                                                                                                                                                     
[!] Do you have anything to say to the press after your big victory?                                                                                                                                                                         
> )              = 76                                                                                                                                                                                                                        
malloc(369)                                                            = 0x56fb1200
fopen("flag.txt", "r")                                                 = 0
printf("%s[-] Could not open flag.txt. P"..., "\033[1;31m"[-] Could not open flag.txt. Please contact the creator.
)            = 64                                                                                                                                                                                                                            
exit(105 <no return ...>           
```
    