# illumination

looking inside bot.js file we can see that

`client.login(Buffer.from(config.token, 'base64').toString('ascii')) //Login with secret token`

so token should be taken from config.json howevere

```
{

	"token": "Replace me with token when in use! Security Risk!",
	"prefix": "~",
	"lightNum": "1337",
	"username": "UmVkIEhlcnJpbmcsIHJlYWQgdGhlIEpTIGNhcmVmdWxseQ==",
	"host": "127.0.0.1"

}
```

but we see that we have a hidden zip folder

and a file commit edits

`You are currently splitting a commit while rebasing branch 'master' on 'ddc606f'.
#0`

can we get the commit ddc606f ?

so we can use git checkout ddc606f

```

 Directory of C:\Users\vipla\Downloads\Illumination

10-07-2022  08:54    <DIR>          .
10-07-2022  08:54    <DIR>          ..
31-05-2019  03:10    <DIR>          Illumination.JS
               0 File(s)              0 bytes
               3 Dir(s)  136,622,346,240 bytes free

C:\Users\vipla\Downloads\Illumination>cd Illumination.JS

C:\Users\vipla\Downloads\Illumination\Illumination.JS>dir
 Volume in drive C is Windows
 Volume Serial Number is 0EDF-FD28

 Directory of C:\Users\vipla\Downloads\Illumination\Illumination.JS

31-05-2019  03:10    <DIR>          .
31-05-2019  03:10    <DIR>          ..
31-05-2019  03:10             2,635 bot.js
31-05-2019  03:10               199 config.json
               2 File(s)          2,834 bytes
               2 Dir(s)  136,622,346,240 bytes free

C:\Users\vipla\Downloads\Illumination\Illumination.JS>git checkout ddc606f
Note: switching to 'ddc606f'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by switching back to a branch.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at ddc606f Added some more comments for the lovely contributors! Thanks for helping out!

C:\Users\vipla\Downloads\Illumination\Illumination.JS>dir
 Volume in drive C is Windows
 Volume Serial Number is 0EDF-FD28

 Directory of C:\Users\vipla\Downloads\Illumination\Illumination.JS

10-07-2022  09:02    <DIR>          .
10-07-2022  09:02    <DIR>          ..
10-07-2022  09:02             2,616 bot.js
10-07-2022  09:02               194 config.json
               2 File(s)          2,810 bytes
               2 Dir(s)  136,622,075,904 bytes free

C:\Users\vipla\Downloads\Illumination\Illumination.JS>type config.json
{

        "token": "SFRCe3YzcnNpMG5fYzBudHIwbF9hbV9JX3JpZ2h0P30=",
        "prefix": "~",
        "lightNum": "1337",
        "username": "UmVkIEhlcnJpbmcsIHJlYWQgdGhlIEpTIGNhcmVmdWxseQ==",
        "host": "127.0.0.1"

```

looks like base64 encoded

and we get the flag

`HTB{v3rsi0n_c0ntr0l_am_I_right?}`

# Diagnostic

Our SOC has identified numerous phishing emails coming in claiming to have a document about an upcoming round of layoffs in the company. The emails all contain a link to diagnostic.htb/layoffs.doc. The DNS for that domain has since stopped resolving, but the server is still hosting the malicious document (your docker). Take a look and figure out what's going on.


