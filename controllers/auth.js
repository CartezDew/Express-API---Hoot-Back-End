// server.js
import { config } from "dotenv";
import express from "express";
import { connect, connection } from "mongoose";
import cors from "cors";
import morgan from "morgan";

import authRouter from "./controllers/auth.js";
import testJwtRouter from "./controllers/test-jwt.js";
import usersRouter from "./controllers/users.js";

config();

const PORT = process.env.PORT ?? 3000;
const app = express();

const start = async () => {
  try {
    await connect(process.env.MONGODB_URI);
    console.log(`Connected to MongoDB ${connection.name}.`);
    app.use(cors(), express.json(), morgan("dev"));
    app.use("/auth", authRouter);
    app.use("/test-jwt", testJwtRouter);
    app.use("/users", usersRouter);
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("Startup failed:", err);
    process.exit(1);
  }
};

start();
