import pymongo
from bson.objectid import ObjectId

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["MusMix"]
collection = db.users
result = collection.update_one(
    {"_id": ObjectId("666b067c17df24017f6ecf5a")},
    {"$set": {"name": "Alice", "age": 30}}
)



