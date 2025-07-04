import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB(); // 🔌 MongoDB connection

const app = express();
// middleware, routes, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
