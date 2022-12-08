import "dotenv/config";
import express from "express";
import { connectCloudDatabase, connectMemoryDatabase } from "./database/db.connection";
import { userRouter } from "./routes/user.routes";

export const server = express();

server.use(express.json());

if (process.env.NODE_ENV === "test") {
  connectMemoryDatabase();
}

if (process.env.NODE_ENV === "developer") {
  connectCloudDatabase();
}

server.use(userRouter);
