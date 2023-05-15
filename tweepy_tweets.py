# Import Tweepy
import tweepy

newfile = open('secret.txt', 'r')
secret = newfile.readlines()

consumer_key        = secret[0]
consumer_secret     = secret[1]
access_token        = secret[2]
access_token_secret = secret[3]
bearer_token = secret[4]

# Authenticate
auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

client = tweepy.Client(bearer_token, 
                       consumer_key, 
                       consumer_secret, 
                       access_token, 
                       access_token_secret)


message ="Hello! Decided to do oscp prep for the next 100 days and provide you with insights from a newbie point of view!"
tags = "#oscp #infosec #cybersecurity #redteam"

print(len(tags))

full_tweet = message + tags
if (len(full_tweet) > 280):
    print("you exceeded word limit by " + len(full_tweet) - 280 + " characters." )
    quit()

client.create_tweet(text=full_tweet, user_auth=False)