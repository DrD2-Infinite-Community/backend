import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import deleteService from "../services/delete-user";

export class DeleteUserController {
  static async handle(req: Request, res: Response) {
    const { id } = req.params;
    const userDeleted = await deleteService.handle(id);

    if (!userDeleted) {
      return res.status(StatusCodes.BAD_GATEWAY).json({
        mensagem: `Não foi possível excluir usuário de id: ${id}. Tente novamente mais tarde.`,
      });
    }

    res.status(StatusCodes.OK).json({ mensagem: "Usuário apagado com sucessor." });
  }
}
