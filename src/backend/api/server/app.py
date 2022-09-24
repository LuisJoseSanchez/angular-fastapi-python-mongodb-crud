from fastapi import FastAPI
from server.routes import cliente_router

app = FastAPI()
app.include_router(cliente_router)

# @app.get("/", tags=['root'])
# async def read_root():
#     return {"message": "Hola mundo"}
