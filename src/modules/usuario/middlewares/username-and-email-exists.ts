import { RequestHandler } from "express";
import { StatusCodes } from "http-status-codes";
import getAUserEmail from "../services/get-user-email";
import getAUserUsername from "../services/get-user-name";

export const usernameAndEmailExists: RequestHandler = async (req, res, next) => {
  const { email, username } = req.body;

  let user = await getAUserUsername.handle(username);
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ mensagem: "Este username já existe. Escolha outro, por favor." });
  }

  user = await getAUserEmail.handle(email);
  if (user) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ mensagem: "Este email já existe. Escolha outro, por favor." });
  }
  next();
};
