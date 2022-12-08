import { Router } from "express";
import { create, getAll } from "../controllers/user.controller";
import { userExists } from "../middlewares/userExists.middleware";
import { requestBodyValidator } from "../middlewares/requestBodyValidator.middleware";

export const userRouter = Router();

userRouter.get("/api/v1/user", getAll);

userRouter.post("/api/v1/user", requestBodyValidator, userExists, create);
