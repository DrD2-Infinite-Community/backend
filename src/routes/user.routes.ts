import { Request, Response, Router } from "express";
import { create , getAll} from "../controllers/user.controller";
import {userExits} from "../middlewares/userExit.middlewares";

export const router = Router();

router.get("/api/v1/user", getAll);

router.post("/api/v1/user", userExits, create);
