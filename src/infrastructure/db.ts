import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const env = process.env;

const pool = new Pool({
  host: env.PGHOST,
  user: env.PGUSER,
  password: env.PGPASSWORD,
  database: env.PGDATABASE,
  port: env.PGPORT ? parseInt(env.PGPORT, 10) : undefined, // ensure port is a number
});

export default pool;
