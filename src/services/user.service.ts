import UserModel, { User } from "../models/user.model";

export const createUser = async (user: User) => {
  const username = user.username.trim();
  const password = user.password.replace(/ /g, "");

  return await UserModel.create({
    username: username,
    email: user.email,
    password: password,
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
  const username = user.username.trim();
  const password = user.password.replace(/ /g, "");

  return await UserModel.findByIdAndUpdate(
    id,
    {
      username: username,
      email: user.email,
      password: password,
    },
    { returnDocument: "after" }
  );
};

export const deleteUser = async (id: string) => {
  await UserModel.findByIdAndDelete(id);
  const userFound = await getUserById(id);
  if (userFound) {
    return false;
  }

  return true;
};
