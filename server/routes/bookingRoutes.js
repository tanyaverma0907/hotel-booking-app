import express from "express";
import {
  createBooking,
  getAllBookings,
  getUserBookings,
  updateBookingStatus,
  deleteBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

// Routes
router.post("/", createBooking);
router.get("/", getAllBookings);
router.get("/user/:userId", getUserBookings); // 🔥 keep before :id
router.put("/:id", updateBookingStatus);
router.delete("/:id", deleteBooking);

export default router;
