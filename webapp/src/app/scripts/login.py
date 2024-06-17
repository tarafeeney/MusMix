import sys
from hashlib import sha256
from pymongo import MongoClient


n = len(sys.argv)
assert n == 3 # If this fails then the wrong number of args is used
uname = sys.argv[1]
pwd=sys.argv[2]
combined=uname+pwd # combine the uname and pwd
hash = sha256(combined.encode()).hexdigest() # SHA256 hash them
print(hash)
client = MongoClient("mongodb+srv://MusMixAdmin1:uGpw6A07tp2kbTP7@musmix.bb1xivw.mongodb.net/")
print(client["musmixdata"]["userdata"][hash])