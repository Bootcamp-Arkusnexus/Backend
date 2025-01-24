import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM employees_history");
  //   console.log(rows);
  res.json(rows);
  //   res.send("Getting users");
};

export const getUserByID = async (req, res) => {
  const { userID } = req.params;
  const { rows } = await pool.query(
    `SELECT * FROM employees_history WHERE id = ${userID}`
  );
  //   const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
  //     userID,
  //   ]);
    // res.send(`Get user id: ${userID}`);
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
      "INSERT INTO employees_history ( is_active_arkus, is_active_mind, full_name, role, level, cv_link, tech_profile_1, entry_type, mt_entry_date, mt_exit_date, business_days_in_mt, office_location, city_of_residence, time_zone, assigned_account_or_clients, english_level, mt_exit_projection_date, base_income_money, tech_profile_2, mt_validated, company_exit_type, company_exit_date, entry_type_details) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23) RETURNING *",
      [
        data.is_active_arkus,
        data.is_active_mind,
        data.full_name,
        data.role,
        data.level,
        data.cv_link,
        data.tech_profile_1,
        data.entry_type,
        data.mt_entry_date,
        data.mt_exit_date,
        data.business_days_in_mt,
        data.office_location,
        data.city_of_residence,
        data.time_zone,
        data.assigned_account_or_clients,
        data.english_level,
        data.mt_exit_projection_date,
        data.base_income_money,
        data.tech_profile_2,
        data.mt_validated,
        data.company_exit_type,
        data.company_exit_date,
        data.entry_type_details,
      ]
    );
    //   console.log(rows);
    res.json({message: 'User was created successful', rows}); //
    // console.log(`User created ${rows.full_name}`)
  } catch (error) {
    console.log(error);
    // When user email already exists this line show an Error
    if (error?.code === "23505") {
      return res.status(409).json({ message: "This user already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { userID } = req.params;
  const data = req.body;
  const { rows } = await pool.query(
    "UPDATE employees_history SET is_active_arkus = $1, is_active_mind = $2, full_name = $3, role = $4, level = $5, cv_link = $6, tech_profile_1 = $7, entry_type = $8, mt_entry_date = $9, mt_exit_date = $10, business_days_in_mt = $11, office_location = $12, city_of_residence = $13, time_zone = $14, assigned_account_or_clients = $15, english_level = $16, mt_exit_projection_date = $17, base_income_money = $18, tech_profile_2 = $19, mt_validated = $20, company_exit_type = $21, company_exit_date = $22, entry_type_details = $23 WHERE id = $24 RETURNING *",

    [
      data.is_active_arkus,
      data.is_active_mind,
      data.full_name,
      data.role,
      data.level,
      data.cv_link,
      data.tech_profile_1,
      data.entry_type,
      data.mt_entry_date,
      data.mt_exit_date,
      data.business_days_in_mt,
      data.office_location,
      data.city_of_residence,
      data.time_zone,
      data.assigned_account_or_clients,
      data.english_level,
      data.mt_exit_projection_date,
      data.base_income_money,
      data.tech_profile_2,
      data.mt_validated,
      data.company_exit_type,
      data.company_exit_date,
      data.entry_type_details,
      userID,
    ]
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