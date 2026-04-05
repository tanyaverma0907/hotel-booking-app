

// import pool from "../configs/db.js";




// export const createRoom = async (req, res) => {
//   try {
//     // const rooms = Array.isArray(req.body) ? req.body : [req.body];

//     const rooms = Array.isArray(req.body)
//   ? req.body
//   : Array.isArray(req.body.rooms)
//   ? req.body.rooms
//   : [req.body];

//     // ✅ Validate all rooms first
//     for (const room of rooms) {
//       const { hotel_id, room_type, price_per_night } = room;

//       if (!hotel_id || !room_type || !price_per_night) {
//         return res.status(400).json({
//           success: false,
//           message: "hotel_id, room_type and price_per_night are required",
//         });
//       }
//     }

//     // ✅ Check all hotel_ids at once (IMPORTANT 🔥)
//     const hotelIds = [...new Set(rooms.map(r => r.hotel_id))];

//     const hotelCheck = await pool.query(
//       `SELECT id FROM hotels WHERE id = ANY($1::int[])`,
//       [hotelIds]
//     );

//     const existingHotelIds = hotelCheck.rows.map(h => h.id);

//     for (const id of hotelIds) {
//       if (!existingHotelIds.includes(id)) {
//         return res.status(404).json({
//           success: false,
//           message: `Hotel with id ${id} not found`,
//         });
//       }
//     }

//     // ✅ Bulk insert (single query)
//     const values = [];
//     const placeholders = rooms.map((room, i) => {
//       const idx = i * 4;

//       values.push(
//         room.hotel_id,
//         room.room_type,
//         room.price_per_night,
//         room.is_available ?? true
//       );

//       return `($${idx + 1}, $${idx + 2}, $${idx + 3}, $${idx + 4})`;
//     });

//     const query = `
//       INSERT INTO rooms (hotel_id, room_type, price_per_night, is_available)
//       VALUES ${placeholders.join(", ")}
//       RETURNING *
//     `;

//     const result = await pool.query(query, values);

//     res.status(201).json({
//       success: true,
//       message: `${result.rows.length} room(s) created successfully`,
//       data: result.rows,
//     });

//   } catch (error) {
//     console.error("Error creating rooms:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };



// // ✅ GET ALL ROOMS (with filters + JOIN)
// export const getAllRooms = async (req, res) => {
//   try {
//     const { hotel_id, is_available } = req.query;

//     let query = `
//       SELECT rooms.*, hotels.name AS hotel_name, hotels.city
//       FROM rooms
//       JOIN hotels ON rooms.hotel_id = hotels.id
//       WHERE 1=1
//     `;

//     const values = [];

//     if (hotel_id) {
//       values.push(hotel_id);
//       query += ` AND rooms.hotel_id = $${values.length}`;
//     }

//     if (is_available !== undefined) {
//       values.push(is_available === "true");
//       query += ` AND rooms.is_available = $${values.length}`;
//     }

//     query += " ORDER BY rooms.id DESC";

//     const result = await pool.query(query, values);

//     res.status(200).json({
//       success: true,
//       count: result.rows.length,
//       data: result.rows,
//     });

//   } catch (error) {
//     console.error("Error fetching rooms:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };



// // ✅ GET ROOM BY ID
// export const getRoomById = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query(
//       `SELECT rooms.*, hotels.name AS hotel_name, hotels.city
//        FROM rooms
//        JOIN hotels ON rooms.hotel_id = hotels.id
//        WHERE rooms.id = $1`,
//       [id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Room not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: result.rows[0],
//     });

//   } catch (error) {
//     console.error("Error fetching room:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };



// // ✅ UPDATE ROOM
// export const updateRoom = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { room_type, price_per_night, is_available } = req.body;

//     const result = await pool.query(
//       `UPDATE rooms
//        SET room_type = $1,
//            price_per_night = $2,
//            is_available = $3
//        WHERE id = $4
//        RETURNING *`,
//       [room_type, price_per_night, is_available, id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Room not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Room updated successfully",
//       data: result.rows[0],
//     });

//   } catch (error) {
//     console.error("Error updating room:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };



// // ✅ DELETE ROOM
// export const deleteRoom = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const result = await pool.query(
//       "DELETE FROM rooms WHERE id = $1 RETURNING *",
//       [id]
//     );

//     if (result.rows.length === 0) {
//       return res.status(404).json({
//         success: false,
//         message: "Room not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Room deleted successfully",
//     });

//   } catch (error) {
//     console.error("Error deleting room:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };


import pool from "../configs/db.js";


// ✅ CREATE ROOM (NO CHANGE)
export const createRoom = async (req, res) => {
  try {
    const rooms = Array.isArray(req.body)
      ? req.body
      : Array.isArray(req.body.rooms)
      ? req.body.rooms
      : [req.body];

    for (const room of rooms) {
      const { hotel_id, room_type, price_per_night } = room;

      if (!hotel_id || !room_type || !price_per_night) {
        return res.status(400).json({
          success: false,
          message: "hotel_id, room_type and price_per_night are required",
        });
      }
    }

    const hotelIds = [...new Set(rooms.map(r => r.hotel_id))];

    const hotelCheck = await pool.query(
      `SELECT id FROM hotels WHERE id = ANY($1::int[])`,
      [hotelIds]
    );

    const existingHotelIds = hotelCheck.rows.map(h => h.id);

    for (const id of hotelIds) {
      if (!existingHotelIds.includes(id)) {
        return res.status(404).json({
          success: false,
          message: `Hotel with id ${id} not found`,
        });
      }
    }

    const values = [];
    const placeholders = rooms.map((room, i) => {
      const idx = i * 4;

      values.push(
        room.hotel_id,
        room.room_type,
        room.price_per_night,
        room.is_available ?? true
      );

      return `($${idx + 1}, $${idx + 2}, $${idx + 3}, $${idx + 4})`;
    });

    const query = `
      INSERT INTO rooms (hotel_id, room_type, price_per_night, is_available)
      VALUES ${placeholders.join(", ")}
      RETURNING *
    `;

    const result = await pool.query(query, values);

    res.status(201).json({
      success: true,
      message: `${result.rows.length} room(s) created successfully`,
      data: result.rows,
    });

  } catch (error) {
    console.error("Error creating rooms:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ GET ALL ROOMS (UPDATED 🔥)
export const getAllRooms = async (req, res) => {
  try {
    const { hotel_id, is_available } = req.query;

    let query = `
      SELECT 
        rooms.id,
        rooms.hotel_id,
        rooms.room_type,
        rooms.price_per_night,
        rooms.is_available,

        -- ✅ ADDED: hotel fields
        hotels.name AS hotel_name,
        hotels.address AS hotel_address,
        hotels.city AS hotel_city

      FROM rooms
      JOIN hotels ON rooms.hotel_id = hotels.id
      WHERE 1=1
    `;

    const values = [];

    // ✅ FILTER: hotel_id
    if (hotel_id) {
      values.push(hotel_id);
      query += ` AND rooms.hotel_id = $${values.length}`;
    }

    // ✅ FILTER: availability
    if (is_available !== undefined) {
      values.push(is_available === "true");
      query += ` AND rooms.is_available = $${values.length}`;
    }

    query += " ORDER BY rooms.id DESC";

    const result = await pool.query(query, values);

    res.status(200).json({
      success: true,
      count: result.rows.length,
      data: result.rows,
    });

  } catch (error) {
    console.error("Error fetching rooms:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ GET ROOM BY ID (UPDATED 🔥)
export const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT 
        rooms.id,
        rooms.hotel_id,
        rooms.room_type,
        rooms.price_per_night,
        rooms.is_available,

        -- ✅ ADDED: hotel details
        hotels.name AS hotel_name,
        hotels.address AS hotel_address,
        hotels.city AS hotel_city

      FROM rooms
      JOIN hotels ON rooms.hotel_id = hotels.id
      WHERE rooms.id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error fetching room:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ UPDATE ROOM (NO CHANGE)
export const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const { room_type, price_per_night, is_available } = req.body;

    const result = await pool.query(
      `UPDATE rooms
       SET room_type = $1,
           price_per_night = $2,
           is_available = $3
       WHERE id = $4
       RETURNING *`,
      [room_type, price_per_night, is_available, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room updated successfully",
      data: result.rows[0],
    });

  } catch (error) {
    console.error("Error updating room:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};



// ✅ DELETE ROOM (NO CHANGE)
export const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM rooms WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Room not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Room deleted successfully",
    });

  } catch (error) {
    console.error("Error deleting room:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};