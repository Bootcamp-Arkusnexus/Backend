import pg from "pg";
import {
  DB_USER,
  DB_HOST,
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
} from "./config.js";

export const pool = new pg.Pool({
  user: DB_USER,
  host: DB_HOST,
  database: DB_DATABASE,
  password: DB_PASSWORD,
  port: DB_PORT,
});

// Testing DB Connection

// pool.query('SELECT NOW()').then(result => {
//     console.log(result);
// })
