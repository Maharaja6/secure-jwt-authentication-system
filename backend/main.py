from fastapi import FastAPI, HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.middleware.cors import CORSMiddleware
 
import database

from models import User
from auth import (
    hash_password,
    verify_password,
    create_access_token,
    verify_token
)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://secure-jwt-authentication-system-frontend.onrender.com",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to JWT Authentication Project"}


@app.post("/register")
def register(user: User):

    conn = database.get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT * FROM users WHERE username = %s",
        (user.username,)
    )

    existing_user = cursor.fetchone()

    if existing_user:
        cursor.close()
        conn.close()

        raise HTTPException(
            status_code=400,
            detail="Username already exists"
        )

    hashed_password = hash_password(user.password)

    cursor.execute(
        "INSERT INTO users(username, password) VALUES (%s, %s)",
        (user.username, hashed_password)
    )

    conn.commit()

    cursor.close()
    conn.close()

    return {
        "message": "User registered successfully"
    }


@app.post("/login")
def login(form_data: OAuth2PasswordRequestForm = Depends()):

    conn = database.get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT username, password FROM users WHERE username = %s",
        (form_data.username,)
    )

    db_user = cursor.fetchone()

    cursor.close()
    conn.close()

    if db_user is None:
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    username = db_user[0]
    hashed_password = db_user[1]

    if not verify_password(form_data.password, hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    access_token = create_access_token(
        data={"sub": username}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }

@app.get("/profile")
def profile(username: str = Depends(verify_token)):
    return {
        "message": "Welcome to your profile",
        "username": username
    }