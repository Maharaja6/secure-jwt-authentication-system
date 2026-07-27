# 🔐 Secure JWT Authentication System

A modern Full Stack Authentication System built using **React.js**, **FastAPI**, **JWT**, and **SQLite**. This project demonstrates secure user authentication with JSON Web Tokens, protected routes, user registration, login, and a responsive dashboard.

---

## 📸 Project Preview

> Add screenshots here after taking them.

### Login Page
![Login](screenshots/login.png)

### Register Page
![Register](screenshots/register.png)

### Dashboard
![Dashboard](screenshots/dashboard.png)
![Dashboard](screenshots/dashboard2.png)

---

## ✨ Features

- 🔐 Secure JWT Authentication
- 👤 User Registration
- 🔑 User Login
- 🔒 Protected Dashboard
- 🔑 Password Hashing
- 🚪 Logout Functionality
- 📱 Responsive UI
- ⚡ FastAPI REST API
- 💾 SQLite Database
- 🔄 Axios API Integration
- 🎨 Modern User Interface

---

## 🛠 Tech Stack

### Frontend

- React.js
- CSS3
- Axios
- JavaScript (ES6)

### Backend

- FastAPI
- Python
- JWT Authentication
- Passlib (Password Hashing)
- Uvicorn

### Database

- SQLite

### Version Control

- Git
- GitHub

---

# 📂 Project Structure

```
jwt-auth-project
│
├── backend
│   ├── main.py
│   ├── auth.py
│   ├── database.py
│   ├── models.py
│   ├── requirements.txt
│   └── users.db
│
├── frontend
│   ├── src
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Navbar.jsx
│   │   ├── api.js
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Maharaja6/secure-jwt-authentication-system.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at

```
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173
```

---

# 🔑 Authentication Flow

```
Register
      │
      ▼
Password Hashing
      │
      ▼
Store User in SQLite
      │
      ▼
Login
      │
      ▼
Generate JWT Token
      │
      ▼
Store Token
      │
      ▼
Access Protected Dashboard
```

---

# 🎯 Learning Outcomes

This project helped in understanding:

- React Component Architecture
- FastAPI REST API Development
- JWT Authentication
- Password Hashing
- Protected Routes
- Axios API Communication
- SQLite Database Integration
- Authentication Workflow
- Git & GitHub Version Control

---

# 🔮 Future Improvements

- Email Verification
- Forgot Password
- Profile Update
- User Roles (Admin/User)
- Dark Mode
- MySQL/PostgreSQL Support
- Docker Deployment
- Refresh Token Authentication

---

# 👨‍💻 Author

**Maharaja B**

B.Tech Computer Science & Engineering (Cybersecurity)

---

## ⭐ If you like this project, don't forget to star the repository.
