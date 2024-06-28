from flask import g
import pymongo


def connect_mongo():
    if 'db' not in g:
        g.db = pymongo.MongoClient("mongodb+srv://MusMixAdmin1:uGpw6A07tp2kbTP7@musmix.bb1xivw.mongodb.net/",
                                    username = "MusMixAdmin1", password = "uGpw6A07tp2kbTP7").get_database()
    return g.db

