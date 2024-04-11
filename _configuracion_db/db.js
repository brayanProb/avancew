// db.js
import { Pool } from "pg";

const pool = new Pool({
  user: 'brayan',
  host: 'localhost',
  database: 'tienda',
  password: '123456',
  port: 5432,
});

export default pool;