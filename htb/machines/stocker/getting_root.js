const fs = require('fs');
fs.readFile('/root/root.txt', 'utf8', (err, data) => {
 if (err) throw err;
 console.log(data);
})