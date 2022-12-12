import { UserModel } from "../models/user";

export class GetUserService {
  async getByID(id: string) {
    return await UserModel.findById(id);
  }

  async getAll() {
    return await UserModel.find();
  }
}

export default new GetUserService();
