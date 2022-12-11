import { Router } from "express";
import { create, getAll, getById, remove, update } from "../controllers/user";
import { userExists } from "../middlewares/user-exists";
import { isValidBody } from "../middlewares/is-valid-body";
import { isValidID } from "../middlewares/is-valid-id";
import { usernameAndEmailExists } from "../middlewares/username-and-email-exists";

export const userRouter = Router();

userRouter.get("/api/v1/user", getAll);

userRouter.get("/api/v1/user/:id", isValidID, userExists, getById);

userRouter.post("/api/v1/user", isValidBody, usernameAndEmailExists, create);

userRouter.delete("/api/v1/user/:id", isValidID, userExists, remove);

userRouter.put("/api/v1/user/:id", isValidID, isValidBody, userExists, update);
