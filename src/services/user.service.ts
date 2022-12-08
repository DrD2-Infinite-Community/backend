import UserModel, { User } from "../models/user.model";

export const createUser = async (user: User) => {
  return await UserModel.create({
    username: user.username,
    email: user.email,
    password: user.password,
  });
};

export const getAllUsers = async () => {
  return await UserModel.find();
};

export const getAUserEmail = async (email: string) => {
  return await UserModel.findOne({ email: email });
};

export const getAUserUsername = async (username: string) => {
  return await UserModel.findOne({ username: username });
};

export const getUserById = async (id: string) => {
  return await UserModel.findById(id);
};

export const updateUser = async (id: string, user: User) => {
  return await UserModel.findByIdAndUpdate(id, user);
};

export const deleteUser = async (id: string) => {
  return await UserModel.findByIdAndDelete(id);
};
