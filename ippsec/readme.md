# looking at ippsec techniques

# setting slack web hooks
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
