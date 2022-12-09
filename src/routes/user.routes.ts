import { Router } from "express";
import { create, getAll, getById, remove, update } from "../controllers/user.controller";
import { userExists } from "../middlewares/userExists.middleware";
import { requestBodyValidator } from "../middlewares/requestBodyValidator.middleware";

export const userRouter = Router();

userRouter.get("/api/v1/user", getAll);

userRouter.get("/api/v1/user/:id", userExists, getById);

userRouter.post("/api/v1/user", requestBodyValidator, userExists, create);

userRouter.delete("/api/v1/user/:id", userExists, remove);

userRouter.put("/api/v1/user/:id", requestBodyValidator, userExists, update);
