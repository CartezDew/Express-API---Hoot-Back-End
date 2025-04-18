// controllers/users.js
import { Router } from "express";
import User from "../models/user.js";
import verifyToken from "../middleware/verify-token.js";

const router = Router();

router.get("/", verifyToken, async (req, res) => {
  try {
    const users = await User.find({}, "username");
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.get("/:userId", verifyToken, async (req, res) => {
  const { userId } = req.params;
  if (req.user._id.toString() !== userId) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  try {
    const user = await User.findById(userId).select("-hashedPassword");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default router;
