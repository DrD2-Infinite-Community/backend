import { Request, Response, Router } from "express";
import { create, getAll } from "../controllers/user.controller";
import { userExists } from "../middlewares/userExists.middlewares";

export const router = Router();

router.get("/api/v1/user", getAll);

router.post("/api/v1/user", userExists, create);
