import { User } from "../interface/user";
import { UserModel } from "../models/user";

class CreateUserService {
  async handle(user: User) {
    const username = user.username.trim();
    const password = user.password.replace(/ /g, "");

    return await UserModel.create({
      username: username,
      email: user.email,
      password: password,
    });
  }
}

export default new CreateUserService();
