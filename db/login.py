from flask import Flask
import pymongo
from sha import sha256
import dbConnection

app = Flask(__name__)

@app.route('/login', methods=['?'])
def user_login():
    
    
