// server.js
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

import authRouter from "./controllers/auth.js";
import testJwtRouter from "./controllers/test-jwt.js";
import usersRouter from "./controllers/users.js";

const PORT = process.env.PORT || 3000;
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log(`Connected to MongoDB ${mongoose.connection.name}.`))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/auth", authRouter);
app.use("/test-jwt", testJwtRouter);
app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});

