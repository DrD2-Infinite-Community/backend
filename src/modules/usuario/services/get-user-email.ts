import { UserModel } from "../models/user";

export class GetAUserEmailService {
  async handle(email: string) {
    return await UserModel.findOne({ email: email });
  }
}

export default new GetAUserEmailService();
