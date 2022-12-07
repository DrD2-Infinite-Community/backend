import express from "express";
import { connectDatabase } from "../database/db.connection";
import { router } from "../routes/user.routes";

export const server = express();
server.use(express.json());

connectDatabase();

server.use(router);
