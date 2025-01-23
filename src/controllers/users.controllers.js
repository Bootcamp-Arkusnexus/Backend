import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM employees_history");
  //   console.log(rows);
  res.json(rows);
  //   res.send("Getting users");
};

export const getUserByID = async (req, res) => {
  const { userID } = req.params;
  const { rows } = await pool.query(`SELECT * FROM employees_history WHERE id = ${userID}`);
  //   const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
  //     userID,
  //   ]);
  //   res.send(`Get user id: ${userID}`);
  // When client get an ID that doesn't exist
  if (rows.length === 0) {
    return res.status(404).json({ message: "User not found or doens't exist" });
  }
  res.json(rows[0]);
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    const { rows } = await pool.query(
      "INSERT INTO employees_history (name, email) VALUES ($1, $2) RETURNING *",
      [data.name, data.email]
    );
    //   console.log(rows);

    //   res.send(`User: ${data.name}, ${data.email} was created`);
    res.json(rows); //
  } catch (error) {
    console.log(error);
    // When user email already exists this line show an Error
    if(error?.code === "23505"){
        return res.status(409).json({ message: "Email already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE employees_history SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [data.name, data.email, userID]
  );

  //   console.log(rows);
  //   console.log(result);
  //   res.send(`Updating user id: ${userID}`);

  // Return to Client
  return res.json(rows[0]);
};

export const deleteUser = async (req, res) => {
  const { userID } = req.params;
  //   const { rows } = await pool.query(`DELETE FROM * users WHERE id = ${userID}`);
  const { rows, rowCount } = await pool.query(
    `DELETE FROM employees_history WHERE id = ${userID} RETURNING *`
  );
  console.log(rows);

  if (rowCount.length === 0) {
    return res.status(404).json({ message: "User not found or doens't exist" });
  } else {
    return res.json({ message: `User deleted ${rows}` });
  }
  //   res.send(`Delete user id: ${userID}`);
};
