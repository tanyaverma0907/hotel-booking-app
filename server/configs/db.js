import dotenv from "dotenv";
dotenv.config();

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "hotel_booking",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

// Optional: test connection
pool.connect()
  .then(() => console.log("✅ PostgreSQL connected successfully"))
  .catch((err) => console.error("❌ DB connection error:", err));

export default pool;