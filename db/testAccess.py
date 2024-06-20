import pymongo
from bson.objectid import ObjectId

client = pymongo.MongoClient("mongodb+srv://MusMixAdmin1:uGpw6A07tp2kbTP7@musmix.bb1xivw.mongodb.net/",
                             username = "MusMixAdmin1", password = "uGpw6A07tp2kbTP7")
db = client["musmixdata"]
collection = db.userdata
id = "667061da90987ea9f48188eb"
result = collection.find_one({"_id": ObjectId(id)})
print(result)


