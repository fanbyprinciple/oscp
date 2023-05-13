consumer_key        = 'first from the secret.txt'
consumer_secret     = 'second from the secret.txt'
access_token        = 'third from the secret.txt'
access_token_secret = 'fourth from the secret.txt'



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