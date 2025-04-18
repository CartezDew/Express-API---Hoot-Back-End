<<<<<<< HEAD
// server.js
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import logger from "morgan";

import authRouter from "./controllers/auth.js";
import testJwtRouter from "./controllers/test-jwt.js";
import usersRouter from "./controllers/users.js";

const app = express();

mongoose.connect(process.env.MONGODB_URI);
mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(cors());
app.use(express.json());
app.use(logger("dev"));

app.use("/auth", authRouter);
app.use("/test-jwt", testJwtRouter);
app.use("/users", usersRouter);

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
=======
// npm
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');

// Import routers
const authRouter = require('./controllers/auth');
const testJwtRouter = require('./controllers/test-jwt');
const usersRouter = require('./controllers/users');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

// Routes
app.use('/auth', authRouter);
app.use('/test-jwt', testJwtRouter);
app.use('/users', usersRouter);

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('The express app is ready!');
>>>>>>> 45addd14a0b4bc0cc0e868551b7270d2d7cb4b92
});
