newfile = open('secret.txt', 'r')
secret = newfile.readlines()

consumer_key        = secret[0]
consumer_secret     = secret[1]
access_token        = secret[2]
access_token_secret = secret[3]

from twython import Twython

twitter = Twython(
    consumer_key,
    consumer_secret
)

auth = twitter.get_authentication_tokens()

twitter = Twython(consumer_key, consumer_secret, oauth_version=2)
ACCESS_TOKEN = twitter.obtain_access_token()

twitter = Twython(consumer_key, access_token=ACCESS_TOKEN)

message ="Hello! Decided to do oscp prep for the next 100 days and provide you with insights from a newbie point of view!"
tags = "#oscp #infosec #cybersecurity #redteam"

print(len(tags))

full_tweet = message + tags
if (len(full_tweet) > 280):
    print("you exceeded word limit by " + len(full_tweet) - 280 + " characters." )
    quit()

twitter.update_status(status=message)
print("Tweeted: %s" % message)