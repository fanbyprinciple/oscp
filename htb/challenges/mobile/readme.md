## cat 

we get an ab file in order to decompress the ab file we use
`( printf "\x1f\x8b\x08\x00\x00\x00\x00\x00" ; tail -c +25 backup.ab ) |  tar xfvz -`

and in one of the pictures we found 
HTB{ThisBackupIsUnprotected}

## cryptohorrific

convert plist to xml first
plutil -convert xml1 some_file.plist

plutil -convert xml1 some_file.plist