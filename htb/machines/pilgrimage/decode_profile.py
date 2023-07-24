import subprocess

output = subprocess.check_output("convert downloaded_image.png result.png", shell=True)
output = subprocess.check_output("identify -verbose result.png", shell=True)

output_str = output.decode('utf-8')
print(output_str)
try:
    profile = output_str.split("Raw profile type: \n\n    ")[1].split('Date:create:')[0]
    print(bytes.fromhex(profile).decode("utf-8"))
except Exception as e:
    print(output_str) 
    print("\n")
    print(e)
    print("Decoding function failed. try manually extracting the profile from output.\n")



