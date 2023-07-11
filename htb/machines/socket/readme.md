 10.10.11.206 

 nmap showed 22 80 and there is one more higher port

 python3 vuln_detect.py -1 -n -u 10.10.11.206:5789


 python3 vuln_detect.py -1 -n -u 10.10.11.206:5789
   Testing ws://10.10.11.206:5789
>>>Note: ws://10.10.11.206:5789 allowed http or https for origin
>>>Note: ws://10.10.11.206:5789 allowed null origin
>>>Note: ws://10.10.11.206:5789 allowed unusual char (possible parse error)
>>>VANILLA CSWSH DETECTED: ws://10.10.11.206:5789 likely vulnerable to vanilla CSWSH (any origin)
====Full list of vulnerable URLs===
['ws://10.10.11.206:5789']
['>>>VANILLA CSWSH DETECTED: ws://10.10.11.206:5789 likely vulnerable to vanilla CSWSH (any origin)']
