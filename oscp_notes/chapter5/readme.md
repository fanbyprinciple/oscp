# bash scripting

Bash scripts have an optional extension of
.sh (for ease of identification), begin with #!/bin/bash

-x debug shebang

In this example, first note that we changed the shebang, adding in the -x flag. This instructed Bash
to print additional debug output, so we could more easily see the commands that were executed
and their results. As we view this output, notice that commands preceded with a single “+” character
were executed in the current shell and commands preceded with a double “++” were executed in a
subshell.

```
/home/ash/codeplay/oscp/oscp_notes/chapter5 on  master! ⌚ 13:50:22
$ ./additional_debug.sh  
+ var1=value1
+ echo value1
value1
+ var2=value2
+ echo value2
value2
++ var1=newvar1
+ echo value1
value1
++ var2=newvar2
+ echo value2
value2

```

$1 and $2 for arguments

```
/home/ash/codeplay/oscp/oscp_notes/chapter5 on  master! ⌚ 13:53:59
$ ./args.sh hello there
the arguments are hello and there

```

```
Variable Name Description
$0 The name of the Bash script
$1 - $9 The first 9 arguments to the Bash script
$# Number of arguments passed to the Bash script
$@ All arguments passed to the Bash script
$? The exit status of the most recently run process
$$ The process ID of the current script
$USER The username of the user running the script
$HOSTNAME The hostname of the machine
$RANDOM A random number
$LINENO The current line number in the scrip
```

input prompt

-p and -sp , prompt and secret prompt

## if , elseif and else statements


If and else statements

comparison statments

```
!EXPRESSION The EXPRESSION is false.
-n STRING STRING length is greater than zero
-z STRING The length of STRING is zero (empty)
STRING1 != STRING2 STRING1 is not equal to STRING2
STRING1 = STRING2 STRING1 is equal to STRING2
INTEGER1 -eq INTEGER2 INTEGER1 is equal to INTEGER2
INTEGER1 -ne INTEGER2 INTEGER1 is not equal to INTEGER2
INTEGER1 -gt INTEGER2 INTEGER1 is greater than INTEGER2
INTEGER1 -lt INTEGER2 INTEGER1 is less than INTEGER2
INTEGER1 -ge INTEGER2 INTEGER1 is greater than or equal to INTEGER 2
INTEGER1 -le INTEGER2 INTEGER1 is less than or equal to INTEGER 2
-d FILE FILE exists and is a directory
-e FILE FILE exists
-r FILE FILE exists and has read permission
-s FILE FILE exists and it is not empty
-w FILE FILE exists and has write permission
-x FILE FILE exists and has execute permission
```

```
/home/ash/codeplay/oscp/oscp_notes/chapter5 on  master! ⌚ 14:08:31
$ ./ifage.sh
 whats your age? 12
I cant have a drink with you.

```

### boolean logic operators

Boolean logical operators,118 like AND (&&) and OR (||) are somewhat mysterious because Bash
uses them in a variety of ways.
One common use is in command lists, which are chains of commands whose flow is controlled by
operators. The “|” (pipe) symbol is a commonly-used operator in a command list and passes the
output of one command to the input of another. Similarly, boolean logical operators execute
commands based on whether a previous command succeeded (or returned True or 0) or failed
(returned False or non-zero).
Let’s take a look at the AND (&&) boolean operator first, which executes a command only if the
previous command succeeds (or returns True or 0):

```
user=`whoami`
grep $user /etc/passwd && echo "$user found!"
```

Or executes only if previous command failed.

```
user=ddd
grep $user /etc/passwd || echo "$user not found"
```