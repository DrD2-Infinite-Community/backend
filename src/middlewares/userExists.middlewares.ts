import { NextFunction, Request, Response } from "express";
import { getAUserEmail, getAUserUsername } from "../services/user.service";


export const userExists = async (req: Request, res: Response, next: NextFunction) => {
  const { email, username } = req.body;

  let user = await getAUserUsername(username);
  if (user) {
    return res.status(404).json({ mensagem: "usuário já existe." });
  }

  user = await getAUserEmail(email);
  if (user) {
    return res.status(404).json({ mensagem: "Email já existe." });
  }
  next();
};
