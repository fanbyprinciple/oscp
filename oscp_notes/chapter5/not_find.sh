user=ddd
grep $user /etc/passwd || echo "$user not found"