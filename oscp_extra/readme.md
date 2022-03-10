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


linode tutorial is a good resource
