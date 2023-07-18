import requests
from http.server import SimpleHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse, parse_qs
import random

class RequestHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        if 'url' in query_params:
            print(query_params['url'][0])

        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)

        filename = 'temp' + str(random.randint(0, 9999))
        with open(filename, 'wb') as f:
            f.write(post_data)
        print("Non-ASCII characters detected!! Content written to ./{} file instead.".format(filename))

        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'POST request received')

    def do_GET(self):
        parsed_url = urlparse(self.path)
        query_params = parse_qs(parsed_url.query)
        if 'url' in query_params:
            print(query_params['url'][0])

        SimpleHTTPRequestHandler.do_GET(self)

def run_server():
    server_address = ('', 8000)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Server running on http://localhost:8000')

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()
        print('Server stopped')

def fetch_url_to_server(url):
    response = requests.get(url)
    post_data = response.content

    server_url = "http://localhost:8000/?url=" + url
    requests.post(server_url, data=post_data)

if __name__ == '__main__':
    
    run_server()