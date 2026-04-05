import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";

import "./configs/db.js";

import clerkWebhooks from "./controllers/clerkWebhooks.js";
import userRoutes from "./routes/userRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

import connectCloudinary from "./configs/cloudinary.js";

connectCloudinary();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

// Routes
app.use("/api/clerk", clerkWebhooks);

app.get("/", (req, res) => {
  res.send("API is working 🚀");
});



// ✅ Use plural naming (REST standard)
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);