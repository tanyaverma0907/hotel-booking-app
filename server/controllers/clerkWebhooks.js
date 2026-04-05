import pool from "../configs/db.js";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    const headers = {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    };

    await whook.verify(JSON.stringify(req.body), headers);

    const { data, type } = req.body;

    const userData = {
      id: data.id,
      email: data.email_addresses[0].email_address,
      name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
      image: data.image_url,
      role: "user",
    };

    switch (type) {

      // ✅ CREATE USER
      case "user.created": {
        await pool.query(
          `INSERT INTO users (id, email, name, image, role)
           VALUES ($1, $2, $3, $4, $5)
           ON CONFLICT (id) DO NOTHING`,
          [
            userData.id,
            userData.email,
            userData.name,
            userData.image,
            userData.role,
          ]
        );
        break;
      }

      // ✅ UPDATE USER
      case "user.updated": {
        await pool.query(
          `UPDATE users
           SET email = $1,
               name = $2,
               image = $3
           WHERE id = $4`,
          [
            userData.email,
            userData.name,
            userData.image,
            userData.id,
          ]
        );
        break;
      }

      // DELETE USER
      case "user.deleted": {
        await pool.query(
          "DELETE FROM users WHERE id = $1",
          [userData.id]
        );
        break;
      }

      default:
        break;
    }

    res.json({ success: true, message: "Webhook Received" });

  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export default clerkWebhooks;