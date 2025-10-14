import dotenv from 'dotenv';
import assert from 'assert';
import sql from 'mssql'; // ✅ Only default import

dotenv.config();

const {
  SQL_SERVER,
  SQL_USER,
  SQL_PWD,
  SQL_DB,
  PORT,
} = process.env;

assert(PORT, 'PORT is required');
assert(SQL_SERVER, 'SQL_SERVER is required');
assert(SQL_USER, 'SQL_USER is required');
assert(SQL_PWD, 'SQL_PWD is required');
assert(SQL_DB, 'SQL_DB is required');

export const config = {
  port: Number(PORT),
  sqlConfig: {
    user: SQL_USER,
    password: SQL_PWD,
    server: SQL_SERVER,
    database: SQL_DB,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000,
    },
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
  },
};

export const getPool = async (): Promise<sql.ConnectionPool> => {
  try {
    console.log('Attempting to connect to SQL Server...');
    console.log('Connection config:', {
      server: config.sqlConfig.server,
      database: config.sqlConfig.database,
      user: config.sqlConfig.user,
    });

    const pool = await sql.connect(config.sqlConfig);
    console.log('✅ Successfully connected to SQL Server');
    return pool;
  } catch (error) {
    console.error('❌ SQL connection error:', error);
    throw error;
  }
};

console.log('ENV:', { SQL_SERVER, SQL_USER, SQL_DB });
