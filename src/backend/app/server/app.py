from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.routes import cliente_router

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:4200", # Angular frontend
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(cliente_router)

# @app.get("/", tags=['root'])
# async def read_root():
#     return {"message": "Hola mundo"}



