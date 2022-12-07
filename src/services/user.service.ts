import UserModel, { User } from "../models/user.model";

export async function createUser(user: User) {
  return await UserModel.create({
    username: user.username,
    email: user.email,
    password: user.password,
  });
}

export async function getAllUsers() {
  return await UserModel.find();
}

export async function getAUserEmail(email: string) {
  return await UserModel.findOne({ email: email });
}

export async function getAUserUsername(username: string) {
  return await UserModel.findOne({ username: username });
}

export async function getUserById(id: number) {
  return await UserModel.findById(id);
}

export async function updateUser(id: number, user: User) {
  return await UserModel.findByIdAndUpdate(id, user);
}

export async function deleteUser(id: number) {
  return await UserModel.findByIdAndDelete(id);
}
