import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import updateService from "../services/update-user";

export class UpdateUserController {
  static async handle(req: Request, res: Response) {
    const userUpdated = await updateService.handle(req.params.id, req.body);

    return res.status(StatusCodes.OK).json(userUpdated);
  }
}
