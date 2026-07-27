# 🔐 Secure JWT Authentication System

A full-stack JWT Authentication System built using **React**, **FastAPI**, **SQLite**, and **JSON Web Tokens (JWT)**.

This project demonstrates secure user authentication with user registration, login, protected routes, JWT token verification, and a modern responsive user interface.

---
## 📸 Project Preview

> Add screenshots here after taking them.

### Login Page
![Login](screenshots/login.png)

### Register Page
![Register](screenshots/register.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)

---

## 📌 Features

- ✅ User Registration
- ✅ Secure Login Authentication
- ✅ Password Hashing using Passlib (bcrypt)
- ✅ JWT Token Generation
- ✅ JWT Token Verification
- ✅ Protected Dashboard
- ✅ Logout Functionality
- ✅ Duplicate Username Validation
- ✅ Responsive Modern UI
- ✅ FastAPI Backend
- ✅ React Frontend
- ✅ SQLite Database

---

## 🛠 Tech Stack

### Frontend

- React.js
- Axios
- HTML5
- CSS3
- JavaScript

### Backend

- FastAPI
- Python
- JWT (python-jose)
- Passlib (bcrypt)
- SQLite

---

## 📁 Project Structure

```
jwt-auth-project/
│
├── backend/
│   ├── auth.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   ├── requirements.txt
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│
└── README.md
```

---

## 🚀 Installation

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

```
User Registration
        │
        ▼
Password Hashing
        │
        ▼
Store in SQLite
        │
        ▼
User Login
        │
        ▼
Verify Password
        │
        ▼
Generate JWT Token
        │
        ▼
Store Token in Browser
        │
        ▼
Access Protected Dashboard
        │
        ▼
Verify Token on Every Request
```

---

## 📸 Screenshots

- Login Page
- Register Page
- Dashboard
- Swagger Authentication

(Add screenshots after uploading to GitHub.)

---

## 📚 Learning Outcomes

This project helped in understanding:

- React Authentication
- FastAPI API Development
- JWT Authentication
- Password Hashing
- Protected Routes
- REST APIs
- Axios
- SQLite Database Integration

---

## 🔮 Future Improvements

- Email Verification
- Forgot Password
- Refresh Tokens
- User Roles (Admin/User)
- MySQL/PostgreSQL Support
- Docker Deployment

---

## 👨‍💻 Author

**Maharaja B**

B.Tech Computer Science & Engineering

Cybersecurity Specialization

---

## ⭐ If you like this project

Give it a ⭐ on GitHub.
