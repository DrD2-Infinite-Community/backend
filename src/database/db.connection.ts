import mongoose from "mongoose"

const mongo = "";

export const connectDatabase = () => {
  console.log("Realizado a conexão com o MongoDB Atlas...");

  mongoose
    .connect(mongo)
    .then(() => console.log("Conectado com MongoDB Atlas com sucessor."))
    .catch((err) => console.error(err));
};