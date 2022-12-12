import { StatusCodes } from "http-status-codes";
import { RequestHandler } from "express";
import getUserById from "../services/get-user";

export const userExists: RequestHandler = async (req, res, next) => {
  const { id } = req.params;

  const user = await getUserById.getByID(id);
  if (!user) {
    return res.status(StatusCodes.BAD_REQUEST).json({ mensagem: "Usuário não existe." });
  }

  next();
};
