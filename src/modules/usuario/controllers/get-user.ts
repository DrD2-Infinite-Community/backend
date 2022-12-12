import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import getService from "../services/get-user";

export class GetUserController {
  static async getByID(req: Request, res: Response) {
    const { id } = req.params;
    const users = await getService.getByID(id);

    return res.status(StatusCodes.OK).json(users);
  }

  static async getAll(req: Request, res: Response) {
    const users = await getService.getAll();

    return res.status(StatusCodes.OK).json(users);
  }
}
