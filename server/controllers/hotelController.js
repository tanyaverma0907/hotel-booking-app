import pool from "../configs/db.js";


// ✅ CREATE HOTEL
export const createHotel = async (req, res) => {
  try {
    const { name, address, contact, owner_id, city } = req.body;

    if (!name || !address || !contact || !owner_id || !city) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const result = await pool.query(
      `INSERT INTO hotels (name, address, contact, owner_id, city)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, address, contact, owner_id, city]
    );

    res.status(201).json({
      success: true,
      message: "Hotel created successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error creating hotel:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};




// ✅ GET ALL HOTELS (with search 🔍)
export const getAllHotels = async (req, res) => {
  try {
    const { city } = req.query;

    let query = "SELECT * FROM hotels WHERE 1=1";
    const values = [];

    if (city) {
      values.push(`%${city}%`);
      query += ` AND city ILIKE $${values.length}`;
    }

    query += " ORDER BY id DESC";

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

  } catch (error) {
    console.error("Error fetching hotels:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ GET HOTEL BY ID (with rooms 🔥 JOIN)
export const getHotelById = async (req, res) => {
  try {
    const { id } = req.params;

    const hotelResult = await pool.query(
      "SELECT * FROM hotels WHERE id = $1",
      [id]
    );

    if (hotelResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    // 🔥 Get rooms of this hotel
    const roomsResult = await pool.query(
      "SELECT * FROM rooms WHERE hotel_id = $1",
      [id]
    );

    res.status(200).json({
      success: true,
      hotel: hotelResult.rows[0],
      rooms: roomsResult.rows,
    });

  } catch (error) {
    console.error("Error fetching hotel:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ UPDATE HOTEL
export const updateHotel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, contact, city } = req.body;

    const result = await pool.query(
      `UPDATE hotels
       SET name = $1,
           address = $2,
           contact = $3,
           city = $4
       WHERE id = $5
       RETURNING *`,
      [name, address, contact, city, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hotel updated successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error updating hotel:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ DELETE HOTEL
export const deleteHotel = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM hotels WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Hotel not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Hotel deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting hotel:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

