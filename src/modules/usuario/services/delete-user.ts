import { UserModel } from "../models/user";
import getService from "./get-user";

export class DeleteUserService {
  async handle(id: string) {
    await UserModel.findByIdAndDelete(id);
    const userFound = await getService.getByID(id);
    if (userFound) {
      return false;
    }

    return true;
  }
}

export default new DeleteUserService();
