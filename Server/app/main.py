from fastapi import FastAPI
from fastapi.middlewares.cors import CORSMiddleware

app = FastAPI()
origins = ["*"]

app.add_midleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def root():
    return {"Message": "Bingo!"}
    
@app.get('/{name}')
async def get_name(name: str):
    return {"Message": f"Hello {name}"}

# Path: Server\app\main.py