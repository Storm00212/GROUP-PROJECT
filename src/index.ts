import express from 'express'
import dotenv from 'dotenv';
import { getPool } from './db/config.js';
import carsRouter from './router/cars.routes.js';
import customerRouter from './router/customer.routes.js';
import bookingRouter from './router/booking.routes.js';
import insuranceRouter from './router/insurance.routes.js';
import locationRouter from './router/location.routes.js';
import paymentRouter from './router/payment.routes.js';
import maintenanceRouter from './router/maintenance.routes.js';
import userRouter from './router/user.routes.js';

//create express app
const app = express();

//config dotenv - load env variables
dotenv.config();

//middleware
app.use(express.json()); //parse json request body

// Log request details - Add this before your routes
app.use((req, _, next) => {
    console.log('Request Method:', req.method);
    console.log('Request URL:', req.url);
    console.log('Request Path:', req.path);
    console.log('Request Body:', req.body);
    console.log('Content-Type:', req.headers['content-type']);
    next();
});

// Routes - Update these with proper prefixes
app.use('/api/cars', carsRouter);
app.use('/api/customers', customerRouter);
app.use('/api/bookings', bookingRouter);
app.use('/api/insurance', insuranceRouter);
app.use('/api/locations', locationRouter);
app.use('/api/payments', paymentRouter);
app.use('/api/maintenance', maintenanceRouter);
app.use('/api/users', userRouter); // This defines the base path for all user routes

//Root route
app.get('/', (_, res) => {
    res.send("Hello, express API is running...");
});

//Fetch users with minimal error handling
app.get('/users', (_, res) => {
    getPool().then(pool => {
        return pool.request().query('SELECT * FROM Users');
    }).then(result => {
        res.json(result.recordset);
    }).catch(err => {
        console.log("SQL error", err);
        res.status(500).send("Server error");
    });
})

//Fetch todos with minimal error handling
app.get('/todos', (_, res) => {
    getPool().then(pool => {
        return pool.request().query('SELECT * FROM Todos');
    }).then(result => {
        res.json(result.recordset);
    }).catch(err => {
        console.log("SQL error", err);
        res.status(500).send("Server error");
    });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
})

//test database connection
getPool()
    .then(() => console.log("Database connected"))
    .catch((err: any) => console.log("Database connection failed: ", err));
