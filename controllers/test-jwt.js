// controllers/auth.js
import { Router } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";

const router = Router();
const secret = process.env.JWT_SECRET;

router.get("/sign-token", (req, res) => {
  const user = { _id: 1, username: "test", password: "test" };
  const token = jwt.sign({ user }, secret, { expiresIn: "1h" });
  return res.json({ token });
});

router.post("/verify-token", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token missing" });

  try {
    const decoded = jwt.verify(token, secret);
    return res.json({ decoded });
  } catch {
    return res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
