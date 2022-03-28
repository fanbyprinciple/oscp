## configuring a firewall

`sudo ufw enable`

Then you need to enable ufw to forward and nat the traffic

https://gist.github.com/kimus/9315140

The default polices are defined in the /etc/default/ufw file and can be changed either by manually modifying the file or with the sudo ufw default <policy> <chain> command.

## IP Masquerading

IP Masquerading is a variant of NAT (network address translation) in the Linux kernel that translates the network traffic by re-writing the source and destination IP addresses and ports. With IP Masquerading, you can allow one or more machines in a private network to communicate with the Internet using one Linux machine that acts as a gateway.

Configuring IP Masquerading with UFW involves several steps.

First, you need to enable IP forwarding. To do that, open the /etc/ufw/sysctl.conf file:

sudo nano /etc/ufw/sysctl.conf

Find and uncomment the line which reads net.ipv4.ip_forward = 1:
/etc/ufw/sysctl.conf

net/ipv4/ip_forward=1

Next, you need to configure UFW to allow forwarded packets. Open the UFW configuration file:

sudo nano /etc/default/ufw

Locate the DEFAULT_FORWARD_POLICY key, and change the value from DROP to ACCEPT:
/etc/default/ufw

DEFAULT_FORWARD_POLICY="ACCEPT"

Now you need to set the default policy for the POSTROUTING chain in the nat table and the masquerade rule. To do so, open the /etc/ufw/before.rules file and append the lines highlighted in yellow, as shown below:

sudo nano /etc/ufw/before.rules

Append the following lines:
/etc/ufw/before.rules

#NAT table rules
*nat
:POSTROUTING ACCEPT [0:0]

# Forward traffic through eth0 - Change to public network interface
-A POSTROUTING -s 10.8.0.0/16 -o eth0 -j MASQUERADE

# don't delete the 'COMMIT' line or these rules won't be processed
COMMIT

# systemctl

systemctl is a command-line utility Linux offers, which is used to monitor and control one other command-line utility named ‘systemd‘. It also inspects and controls the system manager along with the ‘systemd‘ utility.

# traceroute / ping without nat from different network

YOu wont be able to get a reply back because the reply source packet would be in a different network.

## configuring iptables

`iptables -X` to remove alll.


linode tutorial is a good resource.

https://www.linode.com/docs/guides/control-network-traffic-with-iptables/

```
*filter

# Allow all loopback (lo0) traffic and reject traffic
# to localhost that does not originate from lo0.
-A INPUT -i lo -j ACCEPT
-A INPUT ! -i lo -s 127.0.0.0/8 -j REJECT

# Allow ping.
-A INPUT -p icmp -m state --state NEW --icmp-type 8 -j ACCEPT

# Allow SSH connections.
-A INPUT -p tcp --dport 22 -m state --state NEW -j ACCEPT

# Allow HTTP and HTTPS connections from anywhere
# (the normal ports for web servers).
-A INPUT -p tcp --dport 80 -m state --state NEW -j ACCEPT
-A INPUT -p tcp --dport 443 -m state --state NEW -j ACCEPT

# Allow inbound traffic from established connections.
# This includes ICMP error returns.
-A INPUT -m state --state ESTABLISHED,RELATED -j ACCEPT

# Log what was incoming but denied (optional but useful).
-A INPUT -m limit --limit 5/min -j LOG --log-prefix "iptables_INPUT_denied: " --log-level 7

# Reject all other inbound.
-A INPUT -j REJECT

# Log any traffic that was sent to you
# for forwarding (optional but useful).
-A FORWARD -m limit --limit 5/min -j LOG --log-prefix "iptables_FORWARD_denied: " --log-level 7

# Reject all traffic forwarding.
-A FORWARD -j REJECT

COMMIT
```

This enables us to restrict the routes followed however in order to actually route the packet we need to use policy based routing in linux

This policy based routing is defined in the `ip rule list`

```
root@ubuntu:/home/bison# echo 200 custom >> /etc/iproute2/rt_tables
root@ubuntu:/home/bison# cat /etc/iproute2/rt_tables

# reserved values
#
255	local
254	main
253	default
0	unspec
#
# local
#
#1	inr.ruhep
200 custom
```
## creating load balancers

https://scalingo.com/blog/iptables

DNAT 
SNAT
NAT


if put a DROP rule in forward the only way possible to reach internal network is through SSH tunneling


## SSH port forwarding 

local port forwarding

ssh -L local_ip:locla_port:remote_ip:remote_port -N -f ssh_target

so when accessing the local_port it goes to the ssh_target and then connects to the remote port of remote ip, which then comes back to the local port

check on related,established field. whenever you modify the firewall rules

best tool-
https://linuxize.com/post/how-to-setup-ssh-tunneling/


