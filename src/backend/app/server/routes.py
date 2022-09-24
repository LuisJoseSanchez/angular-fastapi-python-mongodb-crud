from fastapi import APIRouter
from pydantic import json
from bson.objectid import ObjectId
from server.dbconfig import db
from server.models import Cliente

# fix ObjectId & FastApi conflict
json.ENCODERS_BY_TYPE[ObjectId]=str

cliente_router = APIRouter()

@cliente_router.get("/clientes")
async def get_clientes():
    return list(db.clientes.find())

@cliente_router.get("/cliente/{id}")
async def get_cliente(id: str):
    return db.clientes.find_one({"_id": ObjectId(id)})

@cliente_router.post("/cliente")
async def post_cliente(cliente: Cliente):
    nuevo_cliente = dict(cliente)
    id = db.clientes.insert_one(nuevo_cliente).inserted_id
    return str(id)

@cliente_router.put("/cliente/{id}")
async def put_cliente(id: str, cliente: Cliente):
    db.clientes.find_one_and_update({"_id": ObjectId(id)}, {"$set": dict(cliente)})

@cliente_router.delete("/cliente/{id}")
async def delete_cliente(id: str):
    db.clientes.find_one_and_delete({"_id": ObjectId(id)})
