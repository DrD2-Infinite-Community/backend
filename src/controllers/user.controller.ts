import {
  createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUser,
} from "../services/user.service";

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

export const getById = async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  res.status(StatusCodes.OK).json(user);
};

export const remove = async (req: Request, res: Response) => {
  await deleteUser(req.params.id);
  res.status(StatusCodes.OK).send();
};

export const update = async (req: Request, res: Response) => {
  const userUpdated = await updateUser(req.params.id, req.body);
  res.status(StatusCodes.OK).json(userUpdated);
  console.log(res);
};
