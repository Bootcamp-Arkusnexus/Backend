import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// CRUD

// Route for users

// Create users
router.post("/users", async (req, res) => {
  const data = req.body;
  console.log(data);
  const { rows } = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [data.name, data.email]
  );
  //   console.log(rows);

  //   res.send(`User: ${data.name}, ${data.email} was created`);
  res.json(rows); //
});

// Read list of users
router.get("/users", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");
  //   console.log(rows);
  res.json(rows);
  //   res.send("Getting users");
});

// Route for users with id
// Read just one user with ID
router.get("/users/:userID", async (req, res) => {
  const { userID } = req.params;
  const { rows } = await pool.query(`SELECT * FROM users WHERE id = ${userID}`);
  //   const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
  //     userID,
  //   ]);
  //   res.send(`Get user id: ${userID}`);
  // When client get an ID that doesn't exist
  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found or doens't exist" });
  }
  res.json(rows[0]);
});

// Update user using user ID
router.put("/users/:userID", async (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [data.name, data.email, userID]
  );

  //   console.log(rows);
  //   console.log(result);
  //   res.send(`Updating user id: ${userID}`);

  // Return to Client
  return res.json(rows[0]);
});

//Delete User
router.delete("/users/:userID", async (req, res) => {
  const { userID } = req.params;
  //   const { rows } = await pool.query(`DELETE FROM * users WHERE id = ${userID}`);
  const { rows, rowCount } = await pool.query(
    `DELETE FROM users WHERE id = ${userID} RETURNING *`
  );
  console.log(rows);

  if (rowCount.length === 0) {
    return res.status(404).json({ message: "User not found or doens't exist" });
  } else {
    return res.json({ message: `User deleted ${rows}` });
  }
  //   res.send(`Delete user id: ${userID}`);
});

export default router;
