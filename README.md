# 🚀 Task 004 – Authentication with Passport & JWT

## 📖 Overview
This project implements a secure authentication system within a **NestJS** application. It demonstrates user registration, login, and route protection using **Passport.js** with both `local` (username/password) and `jwt` (JSON Web Token) strategies. It serves as the fourth technical task for the **Skandavel Webtech Internship**.

The application provides endpoints for user management and secures specific routes, ensuring only authenticated users can access them.

## 🎯 Objective (Why?)
This task was created to:
- Implement a robust authentication and authorization layer in a NestJS application.
- Demonstrate proficiency with **Passport.js** for handling authentication strategies.
- Secure an API using **JSON Web Tokens (JWT)**.
- Differentiate between public and protected routes using Guards.
- Manage user credentials and sessions securely.

## 🛠️ Tech Stack
- **Language**: TypeScript
- **Runtime**: Node.js
- **Framework**: NestJS
- **Authentication**: Passport.js (`passport-local`, `passport-jwt`)
- **Database**: PostgreSQL
- **Tools**: Postman (for testing), Dotenv (for configuration)

## ✨ Features
- **User Registration**: New users can sign up with their credentials.
- **User Login**: Registered users can log in to receive a JWT access token.
- **Protected Routes**: Certain endpoints are protected and require a valid JWT in the `Authorization` header.

## ⚙️ Installation & Setup

### 1. Prerequisites
Ensure you have the following installed:
- Node.js
- PostgreSQL
- NestJS CLI (Optional but recommended)

### 2. Navigate to the Directory
```bash
cd 004_task
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment
Create a `.env` file in the `004_task` root directory. Add your database credentials and a secret key for signing JWTs:
```env
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database_name
PORT=3000
JWT_SECRET=your_super_secret_key
```

### 5. Run the Application
```bash
npm run start:dev
```
The server will start on `http://localhost:3000`.

## 👤 Author
**Muhilan**
*Intern Developer @ [Skandavel Webtech](https://www.linkedin.com/company/skandavel)*
*--- [Linkedin Profile](https://www.linkedin.com/in/rcmuhilan/)*

---
*Created for learning and assessment purposes.*
