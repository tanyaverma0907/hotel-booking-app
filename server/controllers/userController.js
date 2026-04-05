import pool from "../configs/db.js";


// ✅ CREATE USER
export const createUser = async (req, res) => {
  try {
    const { id, username, email, image, role } = req.body;

    // Check if user exists
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [id]
    );

    if (existingUser.rows.length > 0) {
      return res.status(200).json({
        message: "User already exists",
        user: existingUser.rows[0],
      });
    }

    // Insert new user
    const result = await pool.query(
      `INSERT INTO users (id, name, email, image, role)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [id, username, email, image, role || "user"]
    );

    res.status(201).json({
      message: "User created successfully",
      user: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};


// ✅ GET ALL USERS
export const getAllUsers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching users",
      error: error.message,
    });
  }
};


// ✅ GET USER BY ID
export const getUserById = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM users WHERE id = $1",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching user",
      error: error.message,
    });
  }
};


// ✅ UPDATE USER
export const updateUser = async (req, res) => {
  try {
    const { username, email, image, role } = req.body;

    const result = await pool.query(
      `UPDATE users
       SET name = $1, email = $2, image = $3, role = $4
       WHERE id = $5
       RETURNING *`,
      [username, email, image, role, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user: result.rows[0],
    });

  } catch (error) {
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
};


// ✅ DELETE USER
export const deleteUser = async (req, res) => {
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: "Error deleting user",
      error: error.message,
    });
  }
};
