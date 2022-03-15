user=`whoami`
grep $user /etc/passwd && echo "$user found!"