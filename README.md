🚀 Express + MSSQL CRUD API
A simple yet powerful Node.js + Express backend API connected to a Microsoft SQL Server (MSSQL) database.
This project demonstrates clean architecture using TypeScript, MVC structure, and JWT authentication for secure login.

🌟 Features
⚙️ Express.js backend with TypeScript
🧩 Modular folder structure (Controllers, Services, Repositories, Routes, Types)
🗄️ SQL Server database integration using mssql
🔐 JWT-based authentication
🧰 Environment variable management using .env
🧪 Ready for Postman API testing
💬 Middleware setup for logging, error handling, and auth checks
📁 Folder Structure
src/ │ ├── controllers/ # Route logic and request handling ├── db/ # Database config and connection pooling ├── middleware/ # Authentication, logging, and validation ├── routes/ # API routes ├── services/ # Business logic and data validation ├── types/ # TypeScript interfaces and models ├── index.ts # App entry point └── .env # Environment variables

yaml Copy code

⚡ Getting Started
1️⃣ Clone the repository
git clone https://github.com/yourusername/express-mssql-api.git
cd express-mssql-api
2️⃣ Install dependencies Using pnpm (recommended):

Copy code
pnpm install
Or with npm:
Copy code
npm install
3️⃣ Set up your .env file Create a .env file in the root folder:

env

Copy code
PORT=8081
SQL_SERVER=127.0.0.1
SQL_USER=sa
SQL_PWD=your_password
SQL_DB=your_database
JWT_SECRET=your_secret_key
🧑‍💻 Run the Server
Development mode (with auto-reload)

Copy code
pnpm run dev
Production mode

bash
Copy code
pnpm run start
📬 API Endpoints
Method Endpoint Description Auth Required

GET	/api/cars	Get all cars	❌ No
GET	/api/cars/:id	Get car by ID	❌ No
POST	/api/auth/login	Login and get JWT token	❌ No
POST	/api/cars	Add new car	✅ Yes
PUT	/api/cars/:id	Update car info	✅ Yes
DELETE	/api/cars/:id	Delete car record	✅ Yes
🧠 Tech Stack
Backend: Node.js, Express.js

Language: TypeScript

Database: Microsoft SQL Server

ORM/Driver: mssql

Auth: JSON Web Token (JWT)

Testing: Postman

🧩 Sample SQL Table
sql

CREATE TABLE Car (
    CarID INT PRIMARY KEY IDENTITY(1,1),
    CarModel NVARCHAR(50),
    Manufacturer NVARCHAR(50),
    Year INT,
    Color NVARCHAR(20),
    RentalRate DECIMAL(10,2),
    Availability NVARCHAR(20)
);
🔒 Authentication Flow
User sends login credentials via /api/auth/login

Server verifies credentials and returns a signed JWT

Client includes JWT in headers for protected routes:

makefile Copy code Authorization: Bearer Middleware verifies and grants access

🧱 Example Response
json

Copy code

{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5..."
}
🛠️ Scripts Script Description

pnpm run dev	Runs the app in development with live reload
pnpm run build	Compiles TypeScript to JavaScript
pnpm run start	Runs the compiled app in production
💡 Notes
Make sure your SQL Server is running and TCP/IP is enabled.

Always use trustServerCertificate: true for local development.

Keep your .env file private — never commit it to GitHub.
