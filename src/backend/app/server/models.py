
from typing import Optional
from pydantic import BaseModel

class Cliente(BaseModel):
    _id: Optional[str]
    dni: str
    nombre: str
    direccion: str
    telefono: str
