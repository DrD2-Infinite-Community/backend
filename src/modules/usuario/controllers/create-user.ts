import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import createService from "../services/create-user";

export class CreateUserController {
  static async handle(req: Request, res: Response) {
    const userCreated = await createService.handle(req.body);

    return res.status(StatusCodes.CREATED).json(userCreated);
  }
}
