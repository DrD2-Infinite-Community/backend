import mongoose from "mongoose";

export const connectCloudDatabase = () => {
  console.log("Realizado a conexão com o MongoDB Atlas...");
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const url = process.env.MONGO_URL!;
  mongoose
    .connect(url)
    .then(() => console.log("Conectado com MongoDB Atlas com sucessor."))
    .catch((err) => console.error(err));
};
