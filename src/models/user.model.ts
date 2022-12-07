import mongoose from "mongoose";

export interface User {
  username: string,
  password: string,
  email: string;
};

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: [true, "Username obrigatório"],
    minlength: [4, "O nome do usuário deve ter no mínimo 4 caracteres"]
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength:  [7, "O nome do usuário deve ter no mínimo 4 caracteres"]
  },
});

userSchema.set("toJSON", {
  transform: (document, returnedObj) => {
    returnedObj.id = returnedObj._id.toString();
    delete returnedObj._id;
    delete returnedObj.__v;
    delete returnedObj.password;
  },
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
