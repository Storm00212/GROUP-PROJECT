#  Car Management System API

A **TypeScript + Express + Microsoft SQL Server** project designed to manage cars, customers, bookings, and locations for a car rental business.
This system demonstrates clean architecture, database integration, authentication, and teamwork in backend development.

---

##  Project Overview

The **Car Management System API** provides a RESTful interface to interact with and manage:

* Cars available for rent
* Customers who rent them
* Bookings linking cars and customers
* Locations where cars are managed or picked up

This project was built as part of **Week 4 Group Assessment 1**, focusing on applying concepts in Express, TypeScript, SQL Server, and secure authentication.

---

##  Technologies Used

* **TypeScript**
* **Node.js / Express**
* **Microsoft SQL Server**
* **bcrypt** — Password hashing
* **jsonwebtoken (JWT)** — Authentication
* **dotenv** — Environment variable management
* **Postman** — API testing and documentation

---

##  Project Structure

```
CarManagementSystemAPI/
├── src/
│   ├── config/           # Database and environment configuration
│   ├── controllers/      # Handle API requests
│   ├── routes/           # Define API endpoints
│   ├── services/         # Business logic layer
│   ├── models/           # TypeScript interfaces & SQL table mappings
│   ├── middleware/       # Authentication & error handling
│   └── index.ts          # Main server entry point
├── .env                  # Environment variables
├── tsconfig.json         # TypeScript configuration
├── package.json
└── README.md
```

---

##  Database Setup

### 1️ Create Database

```sql
CREATE DATABASE CarManagementDB;
```

### 2️ Create Tables

The system includes the following tables:

| Entity       | Columns                                                                   |
| ------------ | ------------------------------------------------------------------------- |
| **Car**      | CarID, CarModel, Manufacturer, Year, Color, RentalRate, Availability      |
| **Customer** | CustomerID, FirstName, LastName, Email, PhoneNumber, Address              |
| **Booking**  | BookingID, CarID, CustomerID, RentalStartDate, RentalEndDate, TotalAmount |
| **Location** | LocationID, CarID, LocationName, Address, ContactNumber                   |

Populate each table with **at least 5 rows** of sample data.

---

##  API Development

### CRUD Endpoints

Each entity supports full CRUD operations:

| Entity        | Routes                                                                                                   |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| **Cars**      | GET `/cars`, GET `/cars/:id`, POST `/cars`, PUT `/cars/:id`, DELETE `/cars/:id`                          |
| **Customers** | GET `/customers`, GET `/customers/:id`, POST `/customers`, PUT `/customers/:id`, DELETE `/customers/:id` |
| **Bookings**  | GET `/bookings`, GET `/bookings/:id`, POST `/bookings`, PUT `/bookings/:id`, DELETE `/bookings/:id`      |
| **Locations** | GET `/locations`, GET `/locations/:id`, POST `/locations`, PUT `/locations/:id`, DELETE `/locations/:id` |

### Example Request

```http
POST /customers
Content-Type: application/json

{
  "firstName": "Paul",
  "lastName": "Muyali",
  "email": "paul@example.com",
  "phoneNumber": "0712345678",
  "address": "Nairobi, Kenya"
}
```

---

##  Authentication

* **Registration**: Hash passwords using `bcrypt` before storing.
* **Login**: Generate JWT tokens using `jsonwebtoken`.
* **Protected Routes**: Access only with a valid token.

### Example

```bash
# Register
POST /auth/register

# Login
POST /auth/login

# Access protected route
GET /cars (with Authorization header)
```

---

##  Testing

Use **Postman** to test and document all endpoints.
Organize requests into collections for:

* Cars
* Customers
* Bookings
* Locations
* Authentication

---

##  Learning Outcomes

By completing this project, we learned how to:

* Structure a full Express API with modular architecture
* Integrate TypeScript and SQL Server
* Implement JWT authentication and secure password handling
* Apply collaborative development workflows
* Use Postman for organized API testing

---

##  Showcase

When your API is complete:

1. Capture screenshots of your API and Postman tests.
2. Share your success on **LinkedIn**.
3. Mention your learning experience and teamwork.
4. Tag **Teach2Give** and your teammates!

> 🏁 “Building is the best way to learn — and sharing is the best way to grow.”

---

**Authors:** *Week 4 Group (Paul Muyali, Luke Mbogo, Mcbridge Obwoge — Car Management System API Team*
**Course:** Teach2Give Backend Development Bootcamp
**Language:** TypeScript
**Database:** Microsoft SQL Server
**Framework:** Express.js
