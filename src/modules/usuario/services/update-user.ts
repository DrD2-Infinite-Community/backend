import { User } from "../interface/user";
import { UserModel } from "../models/user";
import bcrypt from "bcrypt";

export class UpdateUserService {
  async handle(id: string, user: User) {
    const username = user.username.trim();
    let password = user.password.replace(/ /g, "");
    password = await bcrypt.hash(password, 10);

    return await UserModel.findByIdAndUpdate(
      id,
      {
        username: username,
        email: user.email,
        password: password,
      },
      { returnDocument: "after" }
    );
  }
}

export default new UpdateUserService();
