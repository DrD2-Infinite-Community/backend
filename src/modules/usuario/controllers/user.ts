import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../services/user";

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
  const { id } = req.params;
  const userDeleted = await deleteUser(id);

  if (!userDeleted) {
    return res.status(StatusCodes.BAD_GATEWAY).json({
      mensagem: `Não foi possível excluir usuário de id: ${id}. Tente novamente mais tarde.`,
    });
  }

  res.status(StatusCodes.OK).json({ mensagem: "Usuário apagado com sucessor." });
};

export const update = async (req: Request, res: Response) => {
  const userUpdated = await updateUser(req.params.id, req.body);

  res.status(StatusCodes.OK).json(userUpdated);
};
