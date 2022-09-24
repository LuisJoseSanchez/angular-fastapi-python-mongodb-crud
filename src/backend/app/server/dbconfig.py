from pymongo import MongoClient

conn = MongoClient("mongodb+srv://admin:admin@cluster0.fgx95e6.mongodb.net/?retryWrites=true&w=majority")
db = conn.banco
