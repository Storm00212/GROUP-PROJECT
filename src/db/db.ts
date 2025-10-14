import sql from "mssql";
import assert from "assert";
import dotenv from "dotenv";

dotenv.config();

const {
    SQL_SERVER,
    SQL_USER,
    SQL_PWD,
    SQL_DB,
    PORT
} = process.env

assert(PORT, "PORT is required");
assert(SQL_SERVER, "SQL_SERVER is required");
assert(SQL_USER, "SQL_USER is required");
assert(SQL_PWD, "SQL_PWD is required");
assert(SQL_DB, "SQL_DB is required");
//configuration object for database connection.
export const config = {
    port: Number(PORT) || 1433,
    sqlConfig: {
        user: SQL_USER,
        password: SQL_PWD,
        database: SQL_DB,
        server: SQL_SERVER as string,
        pool:{//for managing multiple database connections
            max:10,
            min:0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: false,//for azure
            trustServerCertificate: true,// for local dev / self-signed charts.
            driver: 'msnodesqlv8'
        }
    }
};
////Created connection pool - a cache of database connections maintained so that the connections can be reused when future requests to the database are required

// ...existing code...
export const getPool = async () => {
    try {
        const pool = await sql.connect(config.sqlConfig);
        return pool;
    } catch (error) {
        console.error("SQL connection error:");
        // Print the error object
        console.error("Error object:", error);

        // Print all error properties as JSON
        try {
            console.error("Error (all properties):", JSON.stringify(error, Object.getOwnPropertyNames(error)));
        } catch {
            console.error("Error (stringified):", String(error));
        }

        // If error.message is an object, print its properties too
        if (error && typeof error === "object" && "message" in error) {
            const msg = (error as any).message;
            if (typeof msg === "object" && msg !== null) {
                // Print all properties of error.message
                try {
                    console.error("Error.message (all properties):", JSON.stringify(msg, Object.getOwnPropertyNames(msg)));
                } catch {
                    console.error("Error.message (stringified):", String(msg));
                }
                // Print each property individually for clarity
                for (const key of Object.getOwnPropertyNames(msg)) {
                    // @ts-ignore
                    console.error(`Error.message.${key}:`, msg[key]);
                }
            } else {
                console.error("Error.message:", msg);
            }
        }
        throw error;
    }
}
// ...existing code...