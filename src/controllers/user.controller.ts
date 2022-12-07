import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/user.service";

import { Request, Response } from "express";
import { User } from "../models/user.model";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import "../translation/TranslationsYup";

const bodyValidation: yup.SchemaOf<User> = yup.object().shape({
  username: yup.string().required().min(4),
  email: yup.string().required().email(),
  password: yup.string().required().min(7),
});

export const create = async (req: Request, res: Response) => {
  let user: User | undefined;

  try {
    user = await bodyValidation.validate(req.body, { abortEarly: false });

    const userCreated = await createUser(user);
    res.status(StatusCodes.CREATED).json(userCreated);
  } catch (err) {
    const yupError = err as yup.ValidationError;

    const errors: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    return res.status(StatusCodes.BAD_REQUEST).json({ errors });
  }
};

export const getAll = async (req: Request, res: Response) => {
  const users = await getAllUsers();
  res.status(StatusCodes.OK).json(users);
};
