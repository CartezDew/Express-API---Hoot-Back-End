// server.js
import { config } from "dotenv";
import express from "express";
import cors from "cors";
import morgan from "morgan";

import testJwtRouter from "./test-jwt.js";
import usersRouter from "./users.js";

const router = express.Router();

// POST /auth/sign-up
router.post("/sign-up", async (req, res) => {
  try {
    // For example purposes — extract user info from body
    const { username, password } = req.body;

    // TODO: Add user creation logic here (hash password, save user, etc.)

    // Simulate token generation
    const token = "mock.jwt.token";

    // Respond with a token
    res.status(201).json({ token });
  } catch (err) {
    console.error("Sign-up error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router; 