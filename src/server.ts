import "dotenv/config";
import "./modules/usuario/translation/TranslationsYup";
import express from "express";
import { connectCloudDatabase } from "./database/cloud-db";
import { connectMemoryDatabase } from "./database/in-memory-db";
import { userRouter } from "./modules/usuario/routes/user";

export const server = express();

server.use(express.json());
server.use(userRouter);

if (process.env.NODE_ENV === "test") {
  connectMemoryDatabase();
} else if (process.env.NODE_ENV === "developer") {
  connectCloudDatabase();
}
