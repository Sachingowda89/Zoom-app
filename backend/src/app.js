// src/app.js
import express from "express";
import { createServer } from "node:http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectToSocket } from "./controllers/socketManager.js";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";

// Load environment variables from .env
dotenv.config();

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

// Set server port
app.set("port", process.env.PORT || 8000);

// Middleware
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

// Routes
app.use("/api/v1/users", userRoutes);

// Start server and connect to MongoDB
const start = async () => {
    try {
        // Debug log to check URI
        console.log("Connecting to MongoDB:", process.env.MONGO_URI);

        // Connect to MongoDB Atlas
        const connectionDb = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`✅ MONGO Connected DB Host: ${connectionDb.connection.host}`);

        // Start HTTP server
        server.listen(app.get("port"), () => {
            console.log(`🚀 LISTENING ON PORT ${app.get("port")}`);
        });
    } catch (error) {
        console.error("❌ Failed to connect to MongoDB:", error);
    }
};

start();
