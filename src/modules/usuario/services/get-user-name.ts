import { UserModel } from "../models/user";

export class GetAUsernameService {
  async handle(username: string) {
    return await UserModel.findOne({ username: username });
  }
}

export default new GetAUsernameService();
