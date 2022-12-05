import UserModel, { User } from "../models/User.model";

export async function createUser(user:User) {
  return await UserModel.create(user)
}

export async function getAllUsers () {
  return await UserModel.find()
}

export async function getUserById(id: number) {
  return await UserModel.findById(id)
}

export async function updateUser(id: number, user:User) {
  return await UserModel.findByIdAndUpdate(id, user)
}

export async function deleteUser(id: number) {
  return await UserModel.findByIdAndDelete(id)
}