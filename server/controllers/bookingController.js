import pool from "../configs/db.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  try {
    const { user_id, room_id, check_in, check_out } = req.body;

    // 1. Validation
    if (!user_id || !room_id || !check_in || !check_out) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // 2. Check if room exists
    const roomResult = await pool.query(
      "SELECT * FROM rooms WHERE id = $1",
      [room_id]
    );

    if (roomResult.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    const room = roomResult.rows[0];

    // 3. Prevent double booking (OVERLAPS 🔥)
    const check = await pool.query(
      `SELECT * FROM bookings 
       WHERE room_id = $1 
       AND (check_in, check_out) OVERLAPS ($2::date, $3::date)`,
      [room_id, check_in, check_out]
    );

    if (check.rows.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Room already booked for selected dates",
      });
    }

    // ✅ 4. Calculate total price (🔥 important)
    const days =
      (new Date(check_out) - new Date(check_in)) /
      (1000 * 60 * 60 * 24);

    const total_price = days * room.price_per_night;

    // 5. Insert booking
    const result = await pool.query(
      `INSERT INTO bookings 
      (user_id, room_id, check_in, check_out, total_price) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *`,
      [user_id, room_id, check_in, check_out, total_price]
    );

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// GET ALL BOOKINGS
export const getAllBookings = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};


// GET BOOKINGS BY USER
export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const result = await pool.query(
      "SELECT * FROM bookings WHERE user_id = $1",
      [userId]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user bookings" });
  }
};


// ✅ UPDATE BOOKING STATUS
export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const result = await pool.query(
      "UPDATE bookings SET status = $1 WHERE id = $2 RETURNING *",
      [status, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error updating booking" });
  }
};


// ✅ DELETE BOOKING
export const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM bookings WHERE id = $1", [id]);

    res.json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting booking" });
  }
};