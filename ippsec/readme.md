# looking at ippsec techniques

# setting slack web hooks and C2
make the channel private
webhook integrations
https://hooks.slack.com/services/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

$body = COnvertTo-Json @{
    pretext = "Automated"
    text = "Hi there"
}
Invoke-RestMethod https://hooks.slack.com/services/
B0559PG99FC/Ej96lpmHngg1OV7htEKcfk3n -Method Post -Body $body -ContentType "application/json"

![](message_passed.png)

### using this as a C2

https://3xpl01tc0d3r.blogspot.com/2018/06/how-to-use-slack-as-c2-sever.html

using a slackshell