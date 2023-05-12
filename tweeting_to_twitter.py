consumer_key        = ''
consumer_secret     = ''
access_token        = ''
access_token_secret = ''



from twython import twython

from auth import (
    consumer_key,
    consumer_secret,
    access_token,
    access_token_secret
)

twitter = Twython(
    consumer_key
)