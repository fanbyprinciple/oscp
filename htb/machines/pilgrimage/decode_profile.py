import subprocess

output = subprocess.check_output("convert downloaded_image.png result.png", shell=True)
output = subprocess.check_output("identify -verbose result.png", shell=True)

output_str = output.decode('utf-8')
profile = output_str.split("Raw profile type: \n\n    ")[1].split('Date:create:')[0]

print(bytes.fromhex(profile).decode("utf-8"))

