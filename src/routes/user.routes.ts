import { Router } from "express";
import { create, getAll, getById, remove, update } from "../controllers/user.controller";
import { userExists } from "../middlewares/userExists.middleware";
import { requestBodyValidator } from "../middlewares/requestBodyValidator.middleware";
import { isValidID } from "../middlewares/isValidID.middleware";
import { usernameAndEmailExists } from "../middlewares/usernameAndEmailExists";

export const userRouter = Router();

userRouter.get("/api/v1/user", getAll);

userRouter.get("/api/v1/user/:id", isValidID, userExists, getById);

userRouter.post("/api/v1/user", requestBodyValidator, usernameAndEmailExists, create);

userRouter.delete("/api/v1/user/:id", isValidID, userExists, remove);

userRouter.put("/api/v1/user/:id", requestBodyValidator, userExists, update);
