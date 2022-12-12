import { Router } from "express";
// import { create, getAll, getById, remove, update } from "../controllers/user";
import { userExists } from "../middlewares/user-exists";
import { isValidBody } from "../middlewares/is-valid-body";
import { isValidID } from "../middlewares/is-valid-id";
import { usernameAndEmailExists } from "../middlewares/username-and-email-exists";
import {
  CreateUserController,
  GetUserController,
  DeleteUserController,
  UpdateUserController,
} from "../controllers";

export const userRouter = Router();

userRouter.get("/api/v1/user", GetUserController.getAll);

userRouter.get("/api/v1/user/:id", isValidID, userExists, GetUserController.getByID);

userRouter.post("/api/v1/user", isValidBody, usernameAndEmailExists, CreateUserController.handle);

userRouter.delete("/api/v1/user/:id", isValidID, userExists, DeleteUserController.handle);

userRouter.put("/api/v1/user/:id", isValidID, isValidBody, userExists, UpdateUserController.handle);
