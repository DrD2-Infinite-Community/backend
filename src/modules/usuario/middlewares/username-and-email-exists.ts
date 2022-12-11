import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import { getAUserEmail, getAUserUsername } from "../services/user";

export const usernameAndEmailExists: RequestHandler = async (req, res, next) => {
  const { email, username } = req.body;

  let user = await getAUserUsername(username);
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ mensagem: "Este username já existe. Escolha outro, por favor." });
  }

  user = await getAUserEmail(email);
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ mensagem: "Este email já existe. Escolha outro, por favor." });
  }
  next();
};
