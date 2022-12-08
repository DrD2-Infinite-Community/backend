import { createUser, getAllUsers } from "../services/user.service";

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import "../translation/TranslationsYup";

export const create = async (req: Request, res: Response) => {
  const userCreated = await createUser(req.body);
  res.status(StatusCodes.CREATED).json(userCreated);
};

export const getAll = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(StatusCodes.OK).json(users);
};
